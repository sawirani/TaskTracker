import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getUsers() {
    return this.http.get(this.rootURL + '/users');
  }

  getTasks() {
    return this.http.get(this.rootURL + '/tasks');
  }

  addUser(user: any, id: number) {
	user.id = id;
	return this.http.post(this.rootURL + '/user', user);
  }

  addTask(task: any, id: number) {
  task.task_id = id;
  return this.http.post(this.rootURL + '/task', task);
  }

  updateTask(task: any, id: number) {
    this.getTasks();
    task.task_id = id;

    return this.http.post(this.rootURL + '/task', task);
    }

}
