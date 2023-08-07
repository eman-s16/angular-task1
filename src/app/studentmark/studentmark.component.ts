import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-studentmark',
  templateUrl: './studentmark.component.html',
  styleUrls: ['./studentmark.component.css']
})
export class StudentmarkComponent {
  students = [
    { name: 'Ahmed', email: 'ahmed@example.com', mark: 85 },
    { name: 'Fatima', email: 'fatima@example.com', mark: 22 },
    { name: 'Youssef', email: 'youssef@example.com', mark: 78 },
    { name: 'Layla', email: 'layla@example.com', mark: 44 },
    { name: 'Khalid', email: 'khalid@example.com', mark: 95 }
  ];


  hasPassed(marks: number): boolean {
    return marks > 50;
  }

}
