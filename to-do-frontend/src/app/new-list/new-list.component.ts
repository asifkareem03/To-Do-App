import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {

  constructor(private router:Router,private fb:FormBuilder,private ds:DataService,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  cancelnewlist(){
    this.router.navigateByUrl("../")
  }

  newlistcreation(value:any){
    if(value==''){
      alert("Please Enter Something")
    }
    else{
      this.ds.createnewlist(value)
      .subscribe((result:any)=>{
        alert(result.message);
        this.router.navigateByUrl("userhome")
      },result=>{
        alert(result.error.message)
      })
    }
  }

  logout(){
    alert("clicked")
  }

}
