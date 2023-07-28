import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {
   IsValidStudent:boolean=false;
  studentForm !:FormGroup
  
  constructor(private formbuilder:FormBuilder,private api:ApiService,private router :Router,private snackbar:MatSnackBar) { 
  
    this.studentForm=this.formbuilder.group({
      RollNo:['',Validators.required],
      DOB:['',Validators.required]
    })
    
  }
  
OnSubmit(){
 this.api.getRecord().subscribe(val=>{
  for (let index = 0; index < val.length; index++)
   {
    if(this.studentForm.get('RollNo')?.value==val[index].RollNo && 
    this.studentForm.get('DOB')?.value==val[index].DOB)
    
    {
      this.snackbar.open("Student Login Succesfully",'close',{
        verticalPosition:'top',
        horizontalPosition:'right',
        panelClass:['mat-toolbar','mat-primary']

      });
      this.router.navigate(['/viewstudent/'+val[index].id]);
       this.IsValidStudent=true;
       break;
    }
    else{
      this.IsValidStudent=false;
    }

  }
  if(!this.IsValidStudent){
    this.snackbar.open("Wrong Student Credential",'close',{
      verticalPosition:'top',
      horizontalPosition:'right',
      panelClass:['mat-toolbar','mat-warn']

    });
  }
 })
  
 }
    

  
    
     
get RollNo(){
  return  this.studentForm.get('RollNo');
}
get DOB(){
  return  this.studentForm.get('DOB');
}

  ngOnInit(): void {
   
  }

}
