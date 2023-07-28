import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {
  studentId!:number;
  studentData!:any;


  constructor(private api:ApiService,private actroute: ActivatedRoute) {
   

   }
   
getStudentRecord(id:number){
  this.api.getSingleRecordbyId(id).subscribe(res=>{
    this.studentData=res;
    
  })
}
  ngOnInit(): void {
   this.studentId=this.actroute.snapshot.params['id'];
   
     this.getStudentRecord(this.studentId);
  }

}
