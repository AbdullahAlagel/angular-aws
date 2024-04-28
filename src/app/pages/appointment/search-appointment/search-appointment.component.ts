import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { TimeBooked } from 'src/app/core/types/TimeBooked';

@Component({
  selector: 'app-search-appointment',
  templateUrl: './search-appointment.component.html',
  styleUrls: ['./search-appointment.component.scss']
})
export class SearchAppointmentComponent {

  messages: Message[] = [];
  editMode: boolean = false;
  userId:any;
  loading:boolean=false;
  dateForm!: UntypedFormGroup;
  submitted = false;
  timeBooked:TimeBooked[]=[]

  
  constructor(private appointmentService: AppointmentService,
    private formBuilder: UntypedFormBuilder,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private messageService: MessageService) {

    }


    ngOnInit(): void {
    this.appointmentService.findAllTime().subscribe(r => {
      this.timeBooked=r
    })

    }
    
    
}
