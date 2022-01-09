import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {


  lists:any;
  tasksdiv = false;
  tasks:any
  selectedListName:any
  user:any
  constructor(private router: Router, private ds: DataService,private route: ActivatedRoute) {
    this.getAllData()
  }

  ngOnInit(): void {
    this.user=localStorage.getItem("currentUser")
    if(!localStorage.getItem("token")){
      alert("Please Login!!!")
      this.router.navigateByUrl("")
    }
  }

  edit_div(task:any,index:any) {
    this.ds.singletaskvalue=task
    this.ds.task=this.tasks
    this.ds.taskindex=index
  }

  del_div(index:any) {
    this.tasks.splice(index,1)
    this.ds.deleteTask(this.selectedListName,this.tasks)
      .subscribe((result:any)=>{
        alert(result.message);
      },result=>{
        alert(result.error.message)
      })
  }

  viewtasks(listname: any,index:any) {
    this.tasksdiv = true
    this.selectedListName=listname
    this.tasks=this.lists[index]['tasks']
  }

  getAllData() {
    this.ds.getAlldata()
      .subscribe((result: any) => {
        if (result) {
          this.lists = result.lists
        }
      }, result => {
        alert(result.error.message)
      })
  }

  newlistcreation() {
    this.router.navigateByUrl("userhome/new-list")
  }

  deleteList(listname:any){
    this.ds.deleteList(listname)
      .subscribe((result:any)=>{
        alert(result.message)
        this.router.navigateByUrl("userhome")
      },result=>{
        alert(result.error.message)
      })
  }

  onTaskClick(index:any){
    this.tasks[index].completed=! this.tasks[index].completed
    this.ds.editTask(this.selectedListName,this.tasks)
      .subscribe((result:any)=>{
      },result=>{
        alert(result.error.message)
      })
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl("")
  }
}
