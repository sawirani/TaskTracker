import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ProfileComponent } from '../profile/profile.component';
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

  constructor(private userService: UserService, private appService: AppService, private usver: User ) { }

  logis(any){
    console.log(any)
  }


  // taskForm = new FormGroup({
  //   taskName: new FormControl('', Validators.nullValidator && Validators.required),
  //   taskDescription: new FormControl('', Validators.nullValidator && Validators.required)
  // });

 taskForm = new FormGroup({
    taskName: new FormControl('', Validators.nullValidator && Validators.required),
    taskDescription: new FormControl('', Validators.nullValidator && Validators.required),
    assigned: new FormControl('', Validators.nullValidator && Validators.required),
    eta: new FormControl('', Validators.nullValidator && Validators.required),
    points: new FormControl('', Validators.nullValidator && Validators.required)
  });

  
  tasks: any[] = [];
  tasks_tmp: any[] = [];
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
        // for (let i = 0; i < this.taskCount; i++) {
        //   if ( tasks[i]["assigned"]  == this.usver.username) {
        //     this.tasks_tmp.push(tasks[i]);
        //     console.log ("This is task number " + i);
        //   }
        //   else {
        //     console.log(this.usver.username);
        //     console.log("Nothing to add" + i);
        //   }
        // }
        
        // this.tasks=this.tasks_tmp
        // this.taskCount = this.tasks.length;
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
