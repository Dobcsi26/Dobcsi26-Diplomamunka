import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { user } from '../../models/user';
import { Router } from '@angular/router';


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


  choose: any;

  constructor(private router: Router, private location: Location, private authService: AuthService, private userService: UserServiceService) { }

  ngOnInit(): void {
  }

  onSubmitSeeker() {
    console.log(this.signUpFormUser.value);
    this.authService.signup(this.signUpFormUser.get('email')?.value, this.signUpFormUser.get('pw')?.value).then(cred => {
      console.log(cred);
      const seeker: user = {
        id: cred.user?.uid as string,
        email: this.signUpFormUser.get('email')?.value,
      };
      this.userService.createSeeker(seeker).then(_ => {
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
