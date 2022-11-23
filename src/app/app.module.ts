import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddRoomComponent } from './add-room/add-room.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    CategoryComponent,
    HomeComponent,
    RoomComponent,
    UserComponent,
    AddRoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ HttpClientModule,],
  bootstrap: [AppComponent]
})
export class AppModule { }
