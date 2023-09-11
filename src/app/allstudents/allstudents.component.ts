import { Component } from '@angular/core';
import { AllstudentsService } from '../allstudents.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent {
  public students: any = [];
  public term:string = "";
  public column:string = "";
  public order:string = "";
  public limit:string = "";
  public page:string = "";
  
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

  // filter method
  // filter(){
  //   this.students = this.students.filter((value:any)=>value.name.includes(this.term))
  // }
  getFiltered(){
    this.allStudentsService.getFiltered(this.term).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

  // sort method
  getSorted(){
    this.allStudentsService.getSorted(this.column,this.order).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

  // delete method
  deleteStudent(id:any){
    this.allStudentsService.deleteStudent(id).subscribe(
        (data:any)=>{
          alert("deleted succefully");
          location.reload()

        },
        (err:any)=>{
          alert("internal server error")
        }
      )
  }

  // pagination method
   getPage(){
    this.allStudentsService.getPage(this.limit,this.page).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
   }


  
  
}
