import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

import { ComputerService } from 'src/app/services/computer.service';
import { Computer } from 'src/app/models/models/pc';

@Component({
  selector: 'app-workercomputers',
  templateUrl: './workercomputers.component.html',
  styleUrls: ['./workercomputers.component.scss']
})
export class WorkercomputersComponent implements OnInit {

  updateForm = new FormGroup({
    progress: new FormControl('')
  });

  computers?: Array<Computer>;

  constructor(private computerService: ComputerService, private router: Router) { }

  ngOnInit(): void {
    this.computerService.getPCbyWorkerUserID('xOo5VHjMSURJYXXiCAiK4hQWXry1').subscribe((data: Array<Computer>) => {
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

  /*updateProgress(computer: Computer){
    computer.stage = this.updateForm.get('progress')?.value;
    this.computerService.update(computer);
  }*/

}
