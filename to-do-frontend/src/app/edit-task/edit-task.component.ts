import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  tempvalue:any;
  taskid:any;
  listname: any;

  constructor(private route: ActivatedRoute,private ds:DataService,private router:Router) { }

  ngOnInit(): void {
    this.tempvalue=this.ds.singletaskvalue;
    this.taskid = this.route.snapshot.params.taskid;
    this.listname = this.route.snapshot.params.listname;
  }

  updateTask(taskvalue:any){
    if(taskvalue===this.tempvalue){
      alert("Please Edit the task or click Cancel")
    }
    else{
      this.ds.task[this.ds.taskindex]={
        uid:this.taskid,
        taskname:taskvalue,
        completed:false
      }
      this.ds.editTask(this.listname,this.ds.task)
      .subscribe((result:any)=>{
        alert(result.message);
        this.router.navigate(['../'], { relativeTo: this.route});
      },result=>{
        alert(result.error.message)
      })
    }
  }

}
