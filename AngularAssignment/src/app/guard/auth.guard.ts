import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
constructor(private authservice:AuthService,private router:Router){}
  canActivate():boolean{
    if(this.authservice.loggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/teacher']);
      alert('Please First SignIn As a Teacher');
      return false;
     
    }
    
  }
}
