import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PCreator';
  page = '';
  routes: Array<string> = [];



  constructor(private router: Router) {
  
  }

  ngOnInit() {
    
  }

  changePage(selectedPage: string) {
    // this.page = selectedPage;
    this.router.navigateByUrl(selectedPage);
  }
}

