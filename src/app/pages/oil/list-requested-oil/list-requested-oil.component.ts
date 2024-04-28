import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { OilService } from 'src/app/core/services/oil.service';
import { OilRequestedOutput } from 'src/app/core/types/OilRequestedOutput';
@Component({
  selector: 'app-list-requested-oil',
  templateUrl: './list-requested-oil.component.html',
  styleUrls: ['./list-requested-oil.component.scss']
})
export class ListRequestedOilComponent {

  zoom = 15;
  latitude: number=24.774265;
  longitude: number=46.738586;
  messages: Message[] = [];
  editMode: boolean = false;
  userId:any;
  loading:boolean=false;
  oil!: UntypedFormGroup;
  submitted = false;
  visible: boolean = false;
  
  oilRequestedOutput: OilRequestedOutput[] = [];
  oilRequestedDailog:OilRequestedOutput | undefined
  constructor(private oilService: OilService,
    private formBuilder: UntypedFormBuilder,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private messageService: MessageService) {
      // this.updateOil();
    }

    ngOnInit(): void {
      // this.oil = this.formBuilder.group({
      //   oilNameEn: ["", Validators.required],
      //   oilNameAr: ["", Validators.required],
      //   oilDesc: ["", Validators.required],
      //   oilType: ["", Validators.required],
      //   oilPrice:["", Validators.required],
      // })

      // this.uploadedFiles.length==0;
      this.oilService.getAllRequestedOil().subscribe(r=>
        { this.oilRequestedOutput=r})
    }

    showDialog(id:number) {
      this.visible = true;
      this.oilRequestedDailog= this.oilRequestedOutput.find(r => r.id===id);
  }
}
