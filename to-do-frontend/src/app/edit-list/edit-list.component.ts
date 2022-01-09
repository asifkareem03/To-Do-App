import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

  oldlistname: any;

  constructor(private router: Router, private ds: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.oldlistname = this.route.snapshot.params.listname
  }

  editList(listname: any) {
    if (listname == '') {
      alert("Please Enter Something")
    }
    else {
      if (this.oldlistname == listname) {
        alert("PLease Edit List Name OR Press Cancel")
      }
      else {
        this.ds.checklistname(listname)
          .subscribe((result: any) => {
            if (result.status) {
              this.ds.editlist(this.oldlistname,listname)
                .subscribe((out: any) => {
                  alert(out.message);
                  this.router.navigateByUrl("userhome")
                }, out => {
                  alert(out.error.message)
                })
            }
          }, result => {
            alert(result.error.message)
          })
      }
    }
  }

}
