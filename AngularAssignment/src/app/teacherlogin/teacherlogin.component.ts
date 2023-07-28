import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-teacherlogin',
  templateUrl: './teacherlogin.component.html',
  styleUrls: ['./teacherlogin.component.css']
})
export class TeacherloginComponent implements OnInit {
 
   Username!:string;
   password!: string;
  
  TeacherLoginForm !:FormGroup
  constructor(private formbuilder:FormBuilder,private router:Router,private authService : AuthService,private snackbar:MatSnackBar) { 
    this.TeacherLoginForm =this.formbuilder.group({
      Name:['',Validators.required],
      Password:['',Validators.required]})


    
  }
  OnLogin(data:any){
   
    // Data.name is coming from teacher login form while username is property
    // data.password is coming from teacher login form while password is property
    this.Username = data.Name;
    this.password = data.Password;

    console.log("Login page: " + this.Username);
    console.log("Login page: " + this.password);

    this.authService.login(this.Username, this.password)
       .subscribe(data=> { 
          console.log("Is Login Success: " + data); 
    
         if(data) {
          // snakbar for showing message
          this.snackbar.open('Login Succesfull','close',{
            verticalPosition: 'top',
            horizontalPosition:'right',
            panelClass: ['mat-toolbar','mat-primary']
            
          });
          this.router.navigate(['/teacherAdmin']);
        }
         else{
          this.snackbar.open('Login Unsuccesfull','close',{
            verticalPosition: 'top',
            horizontalPosition:'right',
            panelClass:  ['mat-toolbar','mat-warn']
          });
         }
    });
 }
    
   
      
  //GET Method to Show Errors
get Name(){
  return this.TeacherLoginForm.get('Name');
}

get Password(){
  return this.TeacherLoginForm.get('Password');
}

  // Get Methods End here
  
  ngOnInit(): void {
  }

}
