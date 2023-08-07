import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { StudentComponent } from './student/student.component';

import { StudentmarkComponent } from './studentmark/studentmark.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'student', component: StudentComponent },
  { path: 'studentmark', component: StudentmarkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
