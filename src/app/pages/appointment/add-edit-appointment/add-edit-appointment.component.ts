import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { AppointmentService } from 'src/app/core/services/appointment.service';

@Component({
  selector: 'app-add-edit-appointment',
  templateUrl: './add-edit-appointment.component.html',
  styleUrls: ['./add-edit-appointment.component.scss']
})
export class AddEditAppointmentComponent {

  messages: Message[] = [];
  editMode: boolean = false;
  userId:any;
  loading:boolean=false;
  dateForm!: UntypedFormGroup;
  submitted = false;
  uploadedFiles: File[] = [];

  constructor(private appointment: AppointmentService,
    private formBuilder: UntypedFormBuilder,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private messageService: MessageService) {
      // this.updateOil();
    }


    ngOnInit(): void {

      this.dateForm = this.formBuilder.group({
        dateInput: ["", Validators.required],
        selectedCity: ["", Validators.required]
      })

      this.uploadedFiles.length==0;
    }
    
    

    get dateInput() { return this.dateForm.controls; }



    submit(){
      this.submitted = true;
      this.loading=true;
      if (this.dateForm.invalid) {
        for (const control of Object.keys(this.dateForm.controls)) {
          this.dateForm.controls[control].markAsTouched();
        }
        this.loading=false;
        return;
      }
  
      if (this.editMode) {
        // this.oilService.updateOil(this.oil,this.uploadedFiles,this.userId).subscribe(a => {
        //   this.messages = [{ severity: 'info', summary: 'Oil has been updated successfully ', detail: '' }]
        //   setTimeout(() => {
        //     this.loading=false;
        //     this.router.navigate(['/main'])
        //   }, 
        //   3000);
        // },err => {
        //   this.loading=false;
        //   console.log(err)
        // })
      } else {
      
      //   this.oilService.AddOil(this.oil,this.uploadedFiles).subscribe(a => {
      //   console.log(a)
      //   this.loading=false;
      //   this.messages = [{ severity: 'success', summary: 'Oil has been added successfully', detail: '' }]
      //   setTimeout(() => {
      //     this.router.navigate(['/main'])
      //   }, 
      //   3000);
      // },err => {
      //   this.loading=false;
      //   console.log(err)
      // })
    }
  }




    
}
