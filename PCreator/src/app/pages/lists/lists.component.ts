import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth-guard.service';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/models/user';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  tmpUser?: User | null;
  permission?: number;

  constructor(private authService: AuthService, private router: Router, private authGuard: AuthGuard, private userService: UserService) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;

    this.userService.getById(user.uid).subscribe(data => {
      this.tmpUser = data;
      this.permission = this.tmpUser?.permission;
      console.log(this.permission)
    }, error => {
      console.error(error);
    });
  }

}
