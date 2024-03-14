import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
   
  date: any;
  constructor(){
    this.date =this.getDate()
  }
 
  ngOnInit(): void {

    
  }


  getDate(){
   return new Date();
  }
 

 
}
