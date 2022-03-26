import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import * as TodoSrv from '../todo.service'


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

 tasks!: Todo[];

 newTaskTitle: string | undefined;

  constructor() {
  TodoSrv.get().then(
    (todos) =>(this.tasks = todos.filter((todo) => !todo.completed))
  )

  }

  ngOnInit(): void {}

  async addTask(){
   const list = await TodoSrv.add({
     title: this.newTaskTitle as string,
     completed:false,
   });
   this.tasks.push(list);
   this.newTaskTitle = '';

   this.rimuoviOps();
  }

rimuoviOps(){
    var elem = document.querySelector('#ins');
    elem?.parentNode?.removeChild(elem);
  }


  async completeTask(todo: Todo, i: number){
     await TodoSrv.update({completed: true}, todo.id);
     this.tasks.splice(i,1)
  }

  async cancelTask(todo: Todo, i:number){
    await TodoSrv.remove(todo);
    this.tasks.splice(i,1)
  }
}

  /*aggiungi(){

    var select: any = document.querySelector('#task');
    this.tService.addTodo(select.value);



  }



  cancella(elemento:any){
    this.tService.deleteTask(elemento);
  }

  }*/
