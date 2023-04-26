import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

import { ComputerService } from 'src/app/services/computer.service';
import { Computer } from 'src/app/models/models/pc';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/models/user';
import { News } from 'src/app/models/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminpageComponent implements OnInit {

  users?: Array<User>;
  news?: Array<News>;
  picked?: string = 'Users';

  constructor(private computerService: ComputerService, private router: Router, private userService: UserService, private newsService: NewsService) { }


  ngOnInit(): void {
    this.newsService.getAllNews().subscribe((data: Array<News>) => {
      this.news = data;
    })
    this.userService.getAll().subscribe((data: Array<User>) => {
      this.users = data;
    })
  }

  deleteNew(id: any){
    this.newsService.delete(id);
  }

  deleteUser(id: any){
    this.userService.delete(id);
  }

  setPicked(a: string){
    this.picked = a;
  }

}
