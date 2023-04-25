import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

import { ComputerService } from 'src/app/services/computer.service';
import { Computer } from 'src/app/models/models/pc';

@Component({
  selector: 'app-standardcomputers',
  templateUrl: './standardcomputers.component.html',
  styleUrls: ['./standardcomputers.component.scss']
})
export class StandardcomputersComponent implements OnInit {

  computers?: Array<Computer>;

  constructor(private computerService: ComputerService, private router: Router) { }

  ngOnInit(): void {
    this.computerService.getPCbyStandardUserID('kPg9MtuuoEPdarkg5TPjUvIMB3l2').subscribe((data: Array<Computer>) => {
      console.log(data);
      this.computers = data;
    })
  }

  delete(id: any){
    this.computerService.delete(id);
  }

  update(computer: Computer){
    this.computerService.update(computer);
  }

}
