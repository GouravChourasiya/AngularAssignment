import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import{MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog'
import {MatSnackBar} from '@angular/material/snack-bar';
import {DateValidation} from '../Validator/DateValidation'

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent implements OnInit { 
 actionbtn:string='Submit';
 IsRollUnique!:boolean;

  AddRecordForm !:FormGroup 
  constructor(private formbuilder:FormBuilder,private api:ApiService,
    private dialog:MatDialogRef<DialogComponentComponent>,@Inject(MAT_DIALOG_DATA) public editData:any,
    private snackbar: MatSnackBar) {
 
      

   }
 

  ngOnInit(): void {
    this.AddRecordForm=this.formbuilder.group({
      Name:['',Validators.required],
      DOB:['',[Validators.required,DateValidation]],
      RollNo:['',Validators.required],
      Scores:['',Validators.required]
    })
// retrieving the data through mat dialouge data from mattable for binding data to form ,edit purpose
    if(this.editData){
      this.actionbtn='Update';
      this.AddRecordForm.controls['Name'].setValue(this.editData.Name);
      this.AddRecordForm.controls['DOB'].setValue(this.editData.DOB);
      this.AddRecordForm.controls['RollNo'].setValue(this.editData.RollNo);
      this.AddRecordForm.controls['Scores'].setValue(this.editData.Scores);
    }
   
    
   
  }

// Method to add records using post method in http client module
  AddRecord(){
    if(!this.editData){
      //checking if form data is unique and roll no is unique for not
      if(this.AddRecordForm.valid && this.IsRollUnique){
        this.api.postRecord(this.AddRecordForm.value).subscribe({
          next:(res)=>{
            console.log(this.AddRecordForm.get('DOB')?.value);
            
            this.snackbar.open("Record Added Succesfully",'close',{
              verticalPosition:'top',
              horizontalPosition:'right',
              panelClass:['mat-toolbar','mat-primary']

            });
            this.AddRecordForm.reset();
            this.dialog.close('saved');
          },error:()=>{
            this.snackbar.open("Error while adding the data",'close',{
              verticalPosition:'top',
              horizontalPosition:'right',
              panelClass:['mat-toolbar','mat-warn']

            });
          }
        })
        
         
      }
      //else Check unique method
      else{
          this.checkRollUnique();
      }
    }
    else{
      this.UpdateRecord();
    }
  }
  //Update method to update data 
  UpdateRecord(){
    if(this.AddRecordForm.valid){
    this.api.putRecord(this.AddRecordForm.value,this.editData.id).subscribe({
      next:(res)=>{
        this.snackbar.open("Record Updated Succesfully",'close',{
          verticalPosition:'top',
          horizontalPosition:'right',
          panelClass:['mat-toolbar','mat-primary']

        });
        this.AddRecordForm.reset;
        this.dialog.close('Update');
      },error:(err)=>{
        this.snackbar.open("Error while updating the data",'close',{
          verticalPosition:'top',
          horizontalPosition:'right',
          panelClass:['mat-toolbar','mat-warn']

        });
      }
    });}
  }
  // Update Record Method End Here
  // Checking Roll No to be Unique Validation
  checkRollUnique(){
    this.api.getRecord().subscribe(val=>{
    for (let index = 0; index < val.length; index++)
   {
    if(this.AddRecordForm.get('RollNo')?.value==val[index].RollNo)
   {
      this.IsRollUnique=false;
      console.log(this.IsRollUnique);
      
      break;
    }
    else{
      this.IsRollUnique=true;
    }
  

   }
  //  if Roll is not unique then showing failure snackbar
   if(!this.IsRollUnique){
    console.log("Rollno unique",this.IsRollUnique);
    this.snackbar.open("Please Enter Unique Roll no ",'close',{
      verticalPosition:'top',
      horizontalPosition:'right',
      panelClass:['mat-toolbar','mat-warn']

    });

   }
    
  });}
  // CheckRoll Unique Methods ENd Here


// Get methods for Showing Error Messages
get RollNo(){
      return this.AddRecordForm.get('RollNo');
}
get Name(){
  return this.AddRecordForm.get('Name');
}
get DOB(){
  return this.AddRecordForm.get('DOB');
}
get Scores(){
  return this.AddRecordForm.get('Scores');
}
// GET MEthods ENd Here
  
}
