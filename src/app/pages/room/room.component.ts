import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Room } from 'src/app/model/room';
import { CategoryService } from 'src/app/service/category.service';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  categories: Category[] = [];
  rooms: Room[] = [] ;
  deleteRoom: Room = {
    id: 0,
    name: '',
    area: 0,
    address: '',
    price: 0,
    image: '',
    description: '',
    categoryId: 0
  } ;

  constructor(
    private roomService: RoomService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getAllRoom();
  }

  getAllRoom(): void {
    this.roomService.getAllRoom()
      .subscribe(rooms => this.rooms = rooms);
  }

  onOpenDeleteModal(room: any) {
    this.deleteRoom = room;
  }

  delete(id: number): void {
    this.roomService.deleteRoom(id).subscribe(
      () => this.getAllRoom()
    );
  }

}
