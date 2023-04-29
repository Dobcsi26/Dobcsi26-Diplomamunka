import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signUpFormUser = new FormGroup({
    email: new FormControl(''),
    pw: new FormControl(''),
    repw: new FormControl(''),
  });


  constructor(private router: Router, private location: Location, private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.signUpFormUser.get('pw') == this.signUpFormUser.get('repw')){
      this.authService.signup(this.signUpFormUser.get('email')?.value, this.signUpFormUser.get('pw')?.value).then(cred => {
        
        const user: User = {
          id: cred.user?.uid as string,
          email: this.signUpFormUser.get('email')?.value,
          permission: 1
        };
        this.userService.create(user).then(_ => {
          console.log('User added successfully.');
          this.router.navigateByUrl('/home');
        }).catch(error => {
          console.error(error);
        })
    
      }).catch(error => {
        console.error(error);
      });
    }
  }

 
}
