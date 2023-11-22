import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
[x: string]: any;
  inputAdd!: string;
  items: any;
  
constructor(private api: ApiService) { }
  todos: any;
  newTaskTitle: string = '';
    
      ngOnInit(){
        this.api.getTodo().subscribe((data:any) => {
          this.todos=data
        })

      }
      delete(id: any) {
        this.todos = this.todos.filter((e : {id:any})=> e.id != id)
      }
      addNewTask() {
        if (this.newTaskTitle.trim() !== '') {
          const newTask = { title: this.newTaskTitle, finished: false };
          this.todos.push(newTask);
          this.newTaskTitle = ''; // Clear the input field after adding the task
        }
      }
    
    }
    
