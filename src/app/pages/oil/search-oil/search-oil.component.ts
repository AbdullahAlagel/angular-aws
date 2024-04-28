import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'primeng/api';
import { OilService } from 'src/app/core/services/oil.service';
import { OilOutput } from 'src/app/core/types/Oil';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-search-oil',
  templateUrl: './search-oil.component.html',
  styleUrls: ['./search-oil.component.scss']
})
export class SearchOilComponent {

  messages: Message[] = [];
  editMode: boolean = false;
  userId:any;
  loading:boolean=false;
  oil!: UntypedFormGroup;
  submitted = false;
  oilOutput:OilOutput[]=[];


  constructor(private oilService: OilService,
    private formBuilder: UntypedFormBuilder,
    private activatedRoute: ActivatedRoute,
    private router:Router) {}


    ngOnInit() {
      this.oilService.getAllOil().subscribe((data) => {
         this.oilOutput=data 
      });


  }
  
  editOilInfo(id:number){
    this.router.navigate(['/oil/edit-oil/'+id]);
  }

  readImage(id:number){
  return [environment.apiBaseUrl +"api/v1/image-oil/"+id];
  }
}
