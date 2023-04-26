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
import { User } from 'src/app/models/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-pcreate',
  templateUrl: './pcreate.component.html',
  styleUrls: ['./pcreate.component.scss']
})
export class PcreateComponent implements OnInit {
  tmpUser?: User | null;
  id?: string;
  computers?: Array<Computer>;
  maxId?: string | undefined;

  compterCreateForm = new FormGroup({
    name: new FormControl(''),
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
      private pcomponentService: PcomponentsService,
      private userService: UserService,
      private computerService: ComputerService
         ) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;

    this.userService.getById(user.uid).subscribe(data => {
      this.tmpUser = data;
      this.id = this.tmpUser?.id;
    }, error => {
      console.error(error);
    });

    this.pcomponentService.getAllCPU().subscribe((data: Array<CPU>) => {
      this.cpus = data;
    })
    this.pcomponentService.getAllGPU().subscribe((data: Array<GPU>) => {
      this.gpus = data;
    })
    this.pcomponentService.getAllHDD().subscribe((data: Array<HDD>) => {
      this.hdds = data;
    })
    this.pcomponentService.getAllMB().subscribe((data: Array<MB>) => {
      this.mbs = data;
    })
    this.pcomponentService.getAllPC_case().subscribe((data: Array<PC_case>) => {
      this.pc_cases = data;
    })
    this.pcomponentService.getAllPSU().subscribe((data: Array<PSU>) => {
      this.psus = data;
    })
    this.pcomponentService.getAllRAM().subscribe((data: Array<RAM>) => {
      this.rams = data;
    })
    this.pcomponentService.getAllSSD().subscribe((data: Array<SSD>) => {
      this.ssds = data;
    })

    this.computerService.getAll().subscribe((data: Array<Computer>) => {
      this.computers = data;
      this.maxId = String(parseInt(this.computers[this.computers.length -1].id) + 1);
    })
  }

  onSubmit() {
    console.log(this.maxId);
    const computer: Computer = {
      name: this.compterCreateForm.get('name')?.value,
      cpu: this.compterCreateForm.get('CPU')?.value,
      gpu: this.compterCreateForm.get('GPU')?.value,
      hdd: this.compterCreateForm.get('HDD')?.value,
      mb: this.compterCreateForm.get('MB')?.value,
      pc_case: this.compterCreateForm.get('PC_case')?.value,
      psu: this.compterCreateForm.get('PSU')?.value,
      ram: this.compterCreateForm.get('RAM')?.value,
      ssd: this.compterCreateForm.get('SSD')?.value,
      id: this.maxId!,
      userStandard: this.id as string,
      userWorker: "P0yFtoCvbRfWu2wdqBS5lSaJJug1",
      stage: '0'
    };

    this.pcService.create(computer).then(_ => {
      console.log('Succesfull create.');
      this.router.navigateByUrl('/lists');
      }).catch(error => {
        console.error(error);
      });
  }


}
