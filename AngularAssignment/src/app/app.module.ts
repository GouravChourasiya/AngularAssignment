import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{MatButtonModule} from "@angular/material/button";
import{ MatSidenavModule} from "@angular/material/sidenav"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import {MatIconModule} from '@angular/material/icon';
import{MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { TeacherloginComponent } from './teacherlogin/teacherlogin.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule } from "@angular/material/radio" ;
import {MatInputModule }from "@angular/material/input" ;
import {MatDatepickerModule} from "@angular/material/datepicker" ;
import {MatNativeDateModule} from "@angular/material/core" ;
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherAdminComponent } from './teacher-admin/teacher-admin.component';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './services/auth.service';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    WelcomePageComponent,
    TeacherloginComponent,
    StudentloginComponent,
    TeacherAdminComponent,
    DialogComponentComponent,
    ViewstudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,MatToolbarModule,MatTooltipModule,MatCardModule,MatFormFieldModule,
    MatInputModule ,MatRadioModule,MatDatepickerModule,MatNativeDateModule,ReactiveFormsModule,
    FormsModule,MatDialogModule,HttpClientModule,MatTableModule,MatPaginatorModule,MatSortModule,
    MatSnackBarModule
  
 
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
