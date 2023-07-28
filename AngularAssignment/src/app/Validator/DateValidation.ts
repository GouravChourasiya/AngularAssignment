import { AbstractControl } from "@angular/forms";
import { DatePipe } from '@angular/common';
import { Component, VERSION } from '@angular/core';

export function DateValidation(control :AbstractControl): {[key: string  ] :any } | null {
 const date=control.value;
 var today=new Date();
 var pipe  = new DatePipe('en-US');
var ChangedFormat:any = pipe.transform(today, 'YYYY-MM-dd');

 console.log('date',date);
 console.log('today',today);
 console.log('Changed',ChangedFormat);

 
 if(date < ChangedFormat){
    return null;
 }
 else{
    return {'DateValidation':true}
 }
}

   
   