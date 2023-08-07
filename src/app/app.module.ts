import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';

import { StudentmarkComponent } from './studentmark/studentmark.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StudentComponent,
    
    StudentmarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
