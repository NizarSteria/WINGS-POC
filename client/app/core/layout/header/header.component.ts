import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { User } from "../../models/user.model";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(
    private userService: UserService, public auth: AuthService
  ) {}

  currentUser: User;

  ngOnInit() {
   /* this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    )*/
  }
}
