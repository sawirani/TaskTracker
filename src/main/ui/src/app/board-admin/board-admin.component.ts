import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../app-state/models';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content = '';

  constructor(private userService: UserService, private appService: AppService) { }


 taskForm = new FormGroup({
    taskTitle: new FormControl('', Validators.nullValidator && Validators.required),
    taskDescription: new FormControl('', Validators.nullValidator && Validators.required),
    eta: new FormControl('', Validators.nullValidator && Validators.required),
    assigned: new FormControl('', Validators.nullValidator && Validators.required),
    points: new FormControl('', Validators.nullValidator && Validators.required)
  });

  
  tasks: any[] = [];
  taskCount = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  onSubmitTask() {
    this.appService.addTask(this.taskForm.value, this.taskCount + 1).pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log('message::::', data);
      this.taskCount = this.taskCount + 1;
      console.log(this.taskCount);
      this.taskForm.reset();
    });
  }
  
  
  getAllTasks() {
    this.appService.getTasks().pipe(takeUntil(this.destroy$)).subscribe((tasks: any[]) => {
		this.taskCount = tasks.length;
    this.tasks = tasks;
    });

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.getAllTasks();
  }
}
