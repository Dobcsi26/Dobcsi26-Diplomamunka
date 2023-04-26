import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

import { ComputerService } from 'src/app/services/computer.service';
import { Computer } from 'src/app/models/models/pc';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-standardcomputers',
  templateUrl: './standardcomputers.component.html',
  styleUrls: ['./standardcomputers.component.scss']
})
export class StandardcomputersComponent implements OnInit {

  computers?: Array<Computer>;

  constructor(private computerService: ComputerService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;

    this.computerService.getPCbyStandardUserID(user.uid).subscribe((data: Array<Computer>) => {
      console.log(data);
      this.computers = data;
    })
  }

  delete(id: any){
    this.computerService.delete(id);
  }

}
