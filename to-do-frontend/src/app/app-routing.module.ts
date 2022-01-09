import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditListComponent } from './edit-list/edit-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { HomeComponent } from './home/home.component';
import { NewListComponent } from './new-list/new-list.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userhome', component: UserhomeComponent },
  { path: 'userhome/new-list', component: NewListComponent },
  { path: 'userhome/:listname', component: UserhomeComponent },
  { path: 'userhome/:listname/edit-list', component: EditListComponent },
  { path: 'userhome/:listname/new-task', component: NewTaskComponent },
  { path: 'userhome/:listname/edit-task/:taskid', component: EditTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
