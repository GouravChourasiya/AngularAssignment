import { Component, OnInit } from '@angular/core';
import{DialogComponentComponent} from '../dialog-component/dialog-component.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {AfterViewInit,  ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from '../services/api.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-teacher-admin',
  templateUrl: './teacher-admin.component.html',
  styleUrls: ['./teacher-admin.component.css']
})
export class TeacherAdminComponent implements OnInit {
  displayedColumns: string[] = ['Name','DOB','RollNo', 'Scores','Actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog:MatDialog,private authService:AuthService,private router :Router,private api:ApiService,private snackbar:MatSnackBar) { }
   //Importing logout method from auth services And making LogOut Event to logout
   LogOut(){
    this.authService.logout();
    this.router.navigate(['']);

  }
  //Method to open dialog box to add record
  openDialog() {
    this.dialog.open(DialogComponentComponent, {
    width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val=='saved'){
        this.getRecordlist();
      }
    });
  }
  // Edit Method TO Edit THE Record value
  editRecord(row:any){
    this.dialog.open(DialogComponentComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val=="Update"){
        this.getRecordlist();
      }
    });
  }
  // Delete Method TO delete THE Record value
  deleteRecord(id:number){
   
    this.api.deleteRecord(id).subscribe({
      next:(res)=>{
        this.snackbar.open("Record Deleted Succesfully",'close',{
          verticalPosition:'top',
          horizontalPosition:'right',
          panelClass:['mat-toolbar','mat-primary']
        });
        this.getRecordlist();
      },error:(err)=>{
        this.snackbar.open("Error While deleting the Record",'close',{
          verticalPosition:'top',
          horizontalPosition:'right',
          panelClass:['mat-toolbar','mat-warn']

        });
      }
    })
  }
  //Method to show Records in a table
 getRecordlist(){
  this.api.getRecord().subscribe({
    next:(res)=>{
          this.dataSource=new MatTableDataSource(res);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
          console.log(res);
    }, error:(err)=>{
      alert("Error while retreiving the data");
    }
  })
 }
 //Method to apply filter
 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
  ngOnInit(): void {
    this.getRecordlist();
  }

}
