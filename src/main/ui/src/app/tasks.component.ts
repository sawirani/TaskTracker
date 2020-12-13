import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor() { }

  @Input() tasks: any[];

  ngOnInit(): void {
 
  }

  selectedTasks: any[] = [];

  RowSelected(tasks:any){
    this.selectedTasks=tasks;   // declare variable in component.
    }

  //   sort(colName) {
  //     this.tasks.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
  // }
}

