import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ComputerService } from 'src/app/services/computer.service';
import { Computer } from 'src/app/models/models/pc';
import { PcomponentsService } from 'src/app/services/pcomponents.service';
import { CPU } from 'src/app/models/models/pc_components/cpu';
import { GPU } from 'src/app/models/models/pc_components/gpu';
import { HDD } from 'src/app/models/models/pc_components/hdd';
import { MB } from 'src/app/models/models/pc_components/mb';
import { PC_case } from 'src/app/models/models/pc_components/pc_case';
import { PSU } from 'src/app/models/models/pc_components/psu';
import { RAM } from 'src/app/models/models/pc_components/ram';
import { SSD } from 'src/app/models/models/pc_components/ssd';


@Component({
  selector: 'app-pcreate',
  templateUrl: './pcreate.component.html',
  styleUrls: ['./pcreate.component.scss']
})
export class PcreateComponent implements OnInit {

  compterCreateForm = new FormGroup({
    CPU: new FormControl(''),
    GPU: new FormControl(''),
    HDD: new FormControl(''),
    MB: new FormControl(''),
    PC_case: new FormControl(''),
    PSU: new FormControl(''),
    RAM: new FormControl(''),
    SSD: new FormControl('')
  });

  cpus?: Array<CPU>;
  gpus?: Array<GPU>;
  hdds?: Array<HDD>;
  mbs?: Array<MB>;
  pc_cases?: Array<PC_case>;
  psus?: Array<PSU>;
  rams?: Array<RAM>;
  ssds?: Array<SSD>;

  constructor(
      private router: Router,
      private location: Location,
      private authService: AuthService,
      private pcService: ComputerService,
      private pcomponentService: PcomponentsService
         ) { }

  ngOnInit(): void {
    this.pcomponentService.getAllCPU().subscribe((data: Array<CPU>) => {
      console.log(data);
      this.cpus = data;
    })
    this.pcomponentService.getAllGPU().subscribe((data: Array<GPU>) => {
      console.log(data);
      this.gpus = data;
    })
    this.pcomponentService.getAllHDD().subscribe((data: Array<HDD>) => {
      console.log(data);
      this.hdds = data;
    })
    this.pcomponentService.getAllMB().subscribe((data: Array<MB>) => {
      console.log(data);
      this.mbs = data;
    })
    this.pcomponentService.getAllPC_case().subscribe((data: Array<PC_case>) => {
      console.log(data);
      this.pc_cases = data;
    })
    this.pcomponentService.getAllPSU().subscribe((data: Array<PSU>) => {
      console.log(data);
      this.psus = data;
    })
    this.pcomponentService.getAllRAM().subscribe((data: Array<RAM>) => {
      console.log(data);
      this.rams = data;
    })
    this.pcomponentService.getAllSSD().subscribe((data: Array<SSD>) => {
      console.log(data);
      this.ssds = data;
    })
  }

  onSubmit() {
    const computer: Computer = {
      cpu: this.compterCreateForm.get('CPU')?.value,
      gpu: this.compterCreateForm.get('GPU')?.value,
      hdd: this.compterCreateForm.get('HDD')?.value,
      mb: this.compterCreateForm.get('MB')?.value,
      pc_case: this.compterCreateForm.get('PC_case')?.value,
      psu: this.compterCreateForm.get('PSU')?.value,
      ram: this.compterCreateForm.get('RAM')?.value,
      ssd: this.compterCreateForm.get('SSD')?.value,
      id: '1',
      userStandard: 'this.authService.getID as any',
      userWorker: "-"
    };

    this.pcService.create(computer).then(_ => {
      console.log('Succesfull create.');
      this.router.navigateByUrl('/home');
      }).catch(error => {
        console.error(error);
      });
  }


}
