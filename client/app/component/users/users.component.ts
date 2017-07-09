import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


import { ToastComponent } from '../../shared/toast/toast.component';
import { UserService } from "../../core/services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user = {};
  users = [];
  isLoading = true;
  isEditing = false;

  addUserForm: FormGroup;
  username = new FormControl('', Validators.required);
  bio = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.getUsers();
    this.addUserForm = this.formBuilder.group({
      username: this.username,
      email: this.email,
      bio: this.bio
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      data => this.users = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

    addUser() {
    this.userService.addUser(this.addUserForm.value).subscribe(
      res => {
        const newUser = res.json();
        this.users.push(newUser);
        this.addUserForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(user) {
    this.isEditing = true;
    this.user = user;
  }

  cancelEditing() {
    this.isEditing = false;
    this.user = {};
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the users to reset the editing
    this.getUsers();
  }

  editUser(user) {
    this.userService.editUser(user).subscribe(
      res => {
        this.isEditing = false;
        this.user = user;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteUser(user) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.userService.deleteUser(user).subscribe(
        res => {
          const pos = this.users.map(elem => elem._id).indexOf(user._id);
          this.users.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
