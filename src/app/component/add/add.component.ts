import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/app.state';
import * as TaskActions from "../../shared/actions/task.action";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
  }

  addTask(taskname: string, tasktime: string) {
  	this.store.dispatch(new TaskActions.addTask({taskname: taskname, tasktime: tasktime}));
  }

}
