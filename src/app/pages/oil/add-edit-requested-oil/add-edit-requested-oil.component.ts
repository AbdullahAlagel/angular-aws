import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { OilService } from 'src/app/core/services/oil.service';
import { OilRequestedOutput } from 'src/app/core/types/OilRequestedOutput';

@Component({
  selector: 'app-add-edit-requested-oil',
  templateUrl: './add-edit-requested-oil.component.html',
  styleUrls: ['./add-edit-requested-oil.component.scss']
})
export class AddEditRequestedOilComponent {

  messages: Message[] = [];
  editMode: boolean = false;
  userId:any;
  loading:boolean=false;
  oil!: UntypedFormGroup;
  submitted = false;
  oilRequestedOutput: OilRequestedOutput[] = [];

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
      // this.oilService.getAllRequestedOil().subscribe(r=>
      //   { this.oilRequestedOutput=r})
    }

}
