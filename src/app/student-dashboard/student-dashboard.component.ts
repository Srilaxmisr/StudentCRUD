import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  studentValue!:FormGroup
  

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.studentValue=this.fb.group({
      name:[''],
      class:[''],
      email:[''],
      mobile:['']
    })
  }
 AddStudent(){

 }

}
