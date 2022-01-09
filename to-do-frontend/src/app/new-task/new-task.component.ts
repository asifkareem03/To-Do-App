import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  listname: any
  constructor(private route: ActivatedRoute,private ds:DataService,private router:Router) {
  }

  ngOnInit(): void {
    this.listname = this.route.snapshot.params.listname;
  }

  newTaskcreation(task: any) {
    if(task==''){
      alert("Please Enter Something")
    }
    else{
      this.ds.createnewTask(this.listname,task)
      .subscribe((result:any)=>{
        alert(result.message);
        this.router.navigate(['../'], { relativeTo: this.route});
      },result=>{
        alert(result.error.message)
      })
    }
  }

}
