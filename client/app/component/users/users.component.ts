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

}
