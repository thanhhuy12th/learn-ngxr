import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Task } from '../../shared/models/task.model';
import { AppState } from '../../shared/app.state';
import * as TaskAction from '../../shared/actions/task.action';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tasks: Observable<Task[]>;

  constructor(private store:Store<AppState>) { 
  	this.tasks = store.select("task");
  }

  ngOnInit() {
  }

  removeTask(i: number) {
  	this.store.dispatch(new TaskAction.removeTask(i));
  }

}
