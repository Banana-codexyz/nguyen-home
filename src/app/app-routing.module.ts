import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoomComponent } from './add-room/add-room.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'room', component: RoomComponent },
  { path: 'user', component: UserComponent },
  { path: 'add-room', component: AddRoomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
