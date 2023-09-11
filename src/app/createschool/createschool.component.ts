import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AllstudentsService } from '../allstudents.service';

@Component({
  selector: 'app-createschool',
  templateUrl: './createschool.component.html',
  styleUrls: ['./createschool.component.css']
})
export class CreateschoolComponent {
  // form method
  public studentForm: FormGroup = new FormGroup({
    // input form validators for name and phone given below
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    percentage: new FormControl("", [Validators.required, Validators.min(1), Validators.max(100)]),
    class: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),

    // Nested form method
    address: new FormGroup({
      // nested form validators given below
      addressLine: new FormControl(),
      state: new FormControl("", [Validators.required]),
      pin: new FormControl("", [Validators.required, Validators.min(100000), Validators.max(999999)])
    }),

    // Dynamic form method
    type: new FormControl(),
    busfee: new FormControl(),
    hostelfee: new FormControl(),

    // Array form method
    marks: new FormArray([])
  });

  // Array form method
  get marksFormArray() {
    return this.studentForm.get('marks') as FormArray;
  }

  addMarks() {
    this.marksFormArray.push(
      new FormGroup({
        class: new FormControl(),
        year: new FormControl(),
        // array form validators
        percentage: new FormControl("", [Validators.required, Validators.min(1), Validators.max(100)])
      })
    )
  }

  deleteMarks(i: number) {
    this.marksFormArray.removeAt(i);
  }

  constructor(private allStudentsService: AllstudentsService) { }

  submit() {
    console.log(this.studentForm);
    this.allStudentsService.getPost(this.studentForm.value).subscribe(
      (data: any) => {
        alert("details created successfully")
      },
      (err: any) => {
        alert("details creation failed")
      }
    )

  }


}
