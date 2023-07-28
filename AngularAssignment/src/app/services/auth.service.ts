import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   // user loggrdin property
  isUserLoggedIn: boolean = false;
//   Login method for teacher admin
  login(userName: string, password: string): Observable<any> {
    console.log(userName);
    console.log(password);
    this.isUserLoggedIn = userName == 'admin' && password == 'admin';
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 

 return of(this.isUserLoggedIn).pipe(
    delay(1000),
    tap(val => { 
       console.log("Is User Authentication is successful: " + val); 
    })
 );
 }
 // Logout method
 logout(): void {
  this.isUserLoggedIn = false;
     localStorage.removeItem('isUserLoggedIn'); 
  }

  //Method for guard 
  loggedIn(){
   return this.isUserLoggedIn;
  }
  constructor() { }
}
