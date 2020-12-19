import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasksCommentStub = [
    {
      userName: 'Name',
      comment: 'Text',
      date: '12.19.2020'
    },
    {
      userName: 'Name',
      comment: 'Text',
      date: '12.19.2020' 
    },
    {
      userName: 'Name',
      comment: 'Text',
      date: '12.19.2020' 
    },
    {
      userName: 'Name',
      comment: 'Text',
      date: '12.19.2020' 
    }
  ]

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(taskTitle): Observable<any> {
    return this.http.get(`${baseUrl}?taskTitle=${taskTitle}`);
  }

  getTaskComments(task): Observable<any> {
    // TODO add api
    // return this.http.get()
    return of(this.tasksCommentStub);
  }

  addTaskComments(comment): Observable<any> {
     // TODO add api
    // return this.http.get()
    this.tasksCommentStub.push(comment);
    return of(this.tasksCommentStub);
  }

  
}
