import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from'../services/auth.service';


@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {
  
  constructor(private authservice:AuthService,private router:Router) {
   
   }
// Direct To Admin Method IF Admin is alredy logged in the showing Admin Page
   directToAdmin(){
    if(this.authservice.loggedIn()){
        this.router.navigate(['/teacherAdmin'])
    }
    else{
      this.router.navigate(['/teacher'])
    }
   }
// directToAdmin Method Ends here
  ngOnInit(): void {
  }

}
