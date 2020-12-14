import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../_services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  task = {
    taskTitle: '',
    taskDescription: '',
    eta: '',
    assigned: '',
    points: '',
    resolved: false
  };
  submitted = false;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  saveTask(): void {
    const data = {
      taskTitle: this.task.taskTitle,
      taskDescription: this.task.taskDescription,
      eta: this.task.eta,
      assigned: this.task.assigned,
      points: this.task.points
    };

    this.taskService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTask(): void {
    this.submitted = false;
    this.task = {
      taskTitle: '',
      taskDescription: '',
      eta: '',
      assigned: '',
      points: '',
      resolved: false
    };
  }

}
