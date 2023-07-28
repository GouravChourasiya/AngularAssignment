import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postRecord(data:any){
    return this.http.post<any>("http://localhost:3000/RecordList/",data);
  }
  getRecord(){
    return this.http.get<any>("http://localhost:3000/RecordList/");
  }
  putRecord(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/RecordList/"+id,data);
  }
  deleteRecord(id:number){
    return this.http.delete<any>("http://localhost:3000/RecordList/"+id);
  }
  getSingleRecordbyId(id:number){
    return this.http.get<any>("http://localhost:3000/RecordList/"+id);
  }
 
}
