import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';

import { OilService } from 'src/app/core/services/oil.service';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-add-edit-oil',
  templateUrl: './add-edit-oil.component.html',
  styleUrls: ['./add-edit-oil.component.scss']
})
export class AddEditOilComponent {
  
  messages: Message[] = [];
  editMode: boolean = false;
  userId:any;
  loading:boolean=false;
  oil!: UntypedFormGroup;
  submitted = false;
  uploadedFiles: File[] = [];

  constructor(private oilService: OilService,
    private formBuilder: UntypedFormBuilder,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private messageService: MessageService) {
      this.updateOil();
    }

    ngOnInit(): void {

      this.oil = this.formBuilder.group({
        oilNameEn: ["", Validators.required],
        oilNameAr: ["", Validators.required],
        oilDesc: ["", Validators.required],
        oilType: ["", Validators.required],
        oilPrice:["", Validators.required],
      })

      this.uploadedFiles.length==0;
    }
    


    get oilInput() { return this.oil.controls; }


    submit(){
      this.submitted = true;
      this.loading=true;
      if (this.oil.invalid) {
        for (const control of Object.keys(this.oil.controls)) {
          this.oil.controls[control].markAsTouched();
        }
        this.loading=false;
        return;
      }
  
      if (this.editMode) {
        this.oilService.updateOil(this.oil,this.uploadedFiles,this.userId).subscribe(a => {
          this.messages = [{ severity: 'info', summary: 'Oil has been updated successfully ', detail: '' }]
          setTimeout(() => {
            this.loading=false;
            this.router.navigate(['/main'])
          }, 
          3000);
        },err => {
          this.loading=false;
          console.log(err)
        })
      } else {
      
        this.oilService.AddOil(this.oil,this.uploadedFiles).subscribe(a => {
        console.log(a)
        this.loading=false;
        this.messages = [{ severity: 'success', summary: 'Oil has been added successfully', detail: '' }]
        setTimeout(() => {
          this.router.navigate(['/main'])
        }, 
        3000);
      },err => {
        this.loading=false;
        console.log(err)
      })
    }
  }


    
    onSelection(event: UploadEvent) {
    }
  
    myUploader(event: UploadEvent) {
      console.log('myUploader:', event);
      this.uploadedFiles
        .filter((p) => p !== null)
        .find((a) => {
          event.files.find((n) => {
            if (n.name === a.name) {
              console.log('no replace file:', a.name);
              return;
            } else {
              console.log('uploaded Files:', a.name);
              this.uploadedFiles.push(n);
            }
          });
        });
      if (this.uploadedFiles.length === 0) {
        event.files.find((n) => {
          // console.log('uploaded Files is null');
          this.uploadedFiles.push(n);
        });
      }
    }
  
    onRemoval(event: any) {
      this.uploadedFiles
        .filter((p) => p !== null)
        .find((a) => {
          // console.log('Check', event.file);
          const index = a.name.indexOf(event.file.name);
          // console.log('index:', index);
          if (index !== -1) {
            this.uploadedFiles.splice(index, 1);
          }
          // console.log(a);
        });
    }
    onClear() {
       this.uploadedFiles.length==0;
    }



    updateOil(){
      this.userId = this.activatedRoute.snapshot.paramMap.get('id');
      if (this.userId) {
        this.editMode = true; 
        // call Oil by id 
        this.oilService.findOilById(Number( this.userId)).subscribe(r=>{
          console.log("UPDATE < ",r)
          this.oil.setValue({
            oilNameAr:r.oilNameAr,
            oilNameEn:r.oilNameEn,
            oilPrice:r.oilPrice,
            oilType:r.oilType,
            oilDesc:r.oilDescription,
          });
          this.updateImage(r.id)
        }, (err) => {
          this.messages = [{ severity: 'error', summary: err, detail: '...' }]
        })
       
      }
    }
    

    updateImage(id:number){
      // this.
    }

}
