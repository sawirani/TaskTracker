import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-board',
  templateUrl: './display-board.component.html',
  styleUrls: ['./display-board.component.css']
})
export class DisplayBoardComponent implements OnInit {

  constructor() { }

  @Input() userCount = 0;
  @Input() taskCount = 0;
  @Output() getUsersEvent = new EventEmitter();
  @Output() getTasksEvent = new EventEmitter();

  ngOnInit(): void {
  }

  getAllUsers() {
    this.getUsersEvent.emit('get all users');
  }

  getAllTasks() {
    this.getTasksEvent.emit('get all tasks');
    
  }

}
