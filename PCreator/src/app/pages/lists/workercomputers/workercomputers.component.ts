import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

import { ComputerService } from 'src/app/services/computer.service';
import { Computer } from 'src/app/models/models/pc';
import { PcomponentsService } from 'src/app/services/pcomponents.service';

import { CPU } from '../../../models/models/pc_components/cpu';
import { GPU } from '../../../models/models/pc_components/gpu';
import { HDD } from '../../../models/models/pc_components/hdd';
import { MB } from '../../../models/models/pc_components/mb';
import { PC_case } from '../../../models/models/pc_components/pc_case';
import { PSU } from '../../../models/models/pc_components/psu';
import { RAM } from '../../../models/models/pc_components/ram';
import { SSD } from '../../../models/models/pc_components/ssd';
import { UserService } from 'src/app/services/user.service';

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

  cpu?: CPU;
  gpu?: GPU;
  hdd?: HDD;
  mb?: MB;
  pc_case?: PC_case;
  psu?: PSU;
  ram?: RAM;
  ssd?: SSD;

  constructor(
    private computerService: ComputerService,
    private router: Router,
    private componentService: PcomponentsService,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;

    this.computerService.getPCbyWorkerUserID(user.uid).subscribe((data: Array<Computer>) => {
      console.log(user.uid);
      this.computers = data;
    })
  }

  delete(id: any){
    this.computerService.delete(id);
  }


  updateProgress(computer: Computer, progress: string){
    console.log(progress)
    this.computerService.update(computer, progress);
  }

}
