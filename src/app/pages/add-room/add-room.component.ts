import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Category } from 'src/app/model/category';
import { District } from 'src/app/model/district';
import { Province } from 'src/app/model/province';
import { Ward } from 'src/app/model/ward';
import { AddressService } from 'src/app/service/address.service';
import { CategoryService } from 'src/app/service/category.service';
import { RoomService } from 'src/app/service/room.service';
import { Room } from '../../model/room';


@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  newRoom: Room = {
    id: 0,
    name: '',
    area: 0,
    address: '',
    price: 0,
    image: '',
    description: '',
    categoryId: 0
  };
  categories: Category[] = [];
  districts: District[] = [];
  wards: Ward[] = [];

  @ViewChild('d') d!: ElementRef;

  constructor(
    private roomService: RoomService,
    private categoryService: CategoryService,
    private location: Location,
    private addressService: AddressService
  ) { }

  ngOnInit(): void {
    this.getAllCategory();
    this.getDistrictByProvinceId('01');
  }

  getAllCategory(): void {
    this.categoryService.getAllCategory()
      .subscribe(categories => this.categories = categories);
  }

  add(): void {
    this.roomService.addRoom(this.newRoom).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  getDistrictByProvinceId(provinceId: string): void {
    this.addressService.getDistrictByProvinceId(provinceId).subscribe(districts => this.districts = districts);
  }

  getWardByDistrictId(districtId: string): void {
    console.log(this.d.nativeElement.value);
    this.addressService.getWardByDistrictId(districtId).subscribe(wards => this.wards = wards);
  }

}
