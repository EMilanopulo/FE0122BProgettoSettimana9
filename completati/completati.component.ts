import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import * as TodoSrv from '../todo.service'

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {

  tasks!: Todo[];
  newTaskTitle: string | undefined;

  constructor(){
    TodoSrv.get().then(
      (todos) =>(this.tasks = todos.filter((todo) => todo.completed))
    )
  }

  ngOnInit(): void {}

  async addTask(){
    const list = await TodoSrv.add({
      title: this.newTaskTitle as string,
      completed:true,
    });
    this.tasks.push(list);
    this.newTaskTitle = '';
   }

}
