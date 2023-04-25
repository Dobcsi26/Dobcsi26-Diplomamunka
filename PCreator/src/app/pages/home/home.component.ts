import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/models/models/news';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  news?: Array<News>;

  constructor( 
    private router: Router,
      private location: Location,
      private authService: AuthService,
      private newsService: NewsService
      ) {} 

    ngOnInit(): void {
      this.newsService.getAllNews().subscribe((data: Array<News>) => {
        console.log(data);
        this.news = data;
      })
      
    }

}
