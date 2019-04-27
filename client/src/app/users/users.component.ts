import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  Author = [
    {name: "adnan", intrest: false},
    {name: "akram", intrest: false},
    {name: "tark", intrest: false},
    {name: "ali", intrest: false},
    {name: "abod", intrest: false}
  ]


  intrestForm = this.fb.group({
    intrest: ['', [Validators.required]],
   
  })
  constructor(private fb: FormBuilder ) { }

  ngOnInit() {
  }
  onSubmit() {

  }
}
