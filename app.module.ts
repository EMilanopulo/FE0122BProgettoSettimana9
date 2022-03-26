import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { CompletatiComponent } from './completati/completati.component';

const routes : Route[] = [
  {
    path: "", //questo è l'indirizzo di home
    component: TodoComponent
  },
  {
    path: "completati",
    component: CompletatiComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CompletatiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
