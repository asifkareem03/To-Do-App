import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';


const options={
  withCredentials:true,
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  singletaskvalue:any
  task:any
  taskindex:any

  constructor(private http:HttpClient) { }

  getOptions(){
    const token=localStorage.getItem("token")
    let headers=new HttpHeaders()
    if(token){
      headers=headers.append('x-access-token',token)
      options.headers=headers;
    }
    return options
  }

  register(name:any, uname: any, password: any) {
    
    const data={
      name,
      uname,
      password
    }

    return this.http.post("http://localhost:3000/register",data)
  }

  login(uname: any, password: any) {
    const data={
      uname,
      password
    }
    return this.http.post("http://localhost:3000/login",data)
    // return this.http.post(environment.apiURL+"/login",data)
  }


  getAlldata(){
    const data={}
    return this.http.post("http://localhost:3000/getAlldata",data,this.getOptions())
  }

  // checklistname


  checklistname(listname:any){
    const data={
      listname
    }
    return this.http.post("http://localhost:3000/checklistname",data,this.getOptions())
  }

  createnewlist(listname:any){
    const data={
      listname
    }
    return this.http.post("http://localhost:3000/newlist",data,this.getOptions())
  }

  editlist(oldlistname:any,newlistname:any){
    const data={
      oldlistname,
      newlistname
    }
    return this.http.post("http://localhost:3000/editlist",data,this.getOptions())
  }

  deleteList(listname:any){
    const data={
      listname
    }
    return this.http.post("http://localhost:3000/deleteList",data,this.getOptions())
  }

  createnewTask(listname:any,task:any){
    const data={
      listname,
      task
    }
    return this.http.post("http://localhost:3000/newtask",data,this.getOptions())
  }


  editTask(listname:any,task:any){
    const data={
      listname,
      task
    }
    return this.http.post("http://localhost:3000/editTask",data,this.getOptions())
  }

  deleteTask(listname:any,task:any){
    const data={
      listname,
      task
    }
    return this.http.post("http://localhost:3000/deleteTask",data,this.getOptions())
  }

  view(){
    const data={}
    // return this.http.post("http://localhost:3000/view",data,this.getOptions())
  }

  editEvent(eventData:any,eventDate:any,uid:any){
    const data={
      eventData,
      eventDate,
      uid
    }
    // return this.http.post("http://localhost:3000/editEvent",data,this.getOptions())
  }

  deleteEvent(uid:any){
    const data={uid}
    // return this.http.post("http://localhost:3000/deleteEvent",data,this.getOptions())
  }
}

