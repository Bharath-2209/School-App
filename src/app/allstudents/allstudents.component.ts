import { Component } from '@angular/core';
import { AllstudentsService } from '../allstudents.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent {
  public students: any = [];

  constructor(private allStudentsService: AllstudentsService){
    allStudentsService.getAllStudents().subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("internak server error")
      }
    )
  }

  
  
}
