import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory(): void {
    this.categoryService.getAllCategory()
      .subscribe( categories => this.categories = categories);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.categoryService.addCategory({ name } as Category)
      .subscribe(category => {
        this.categories.push(category);
      });
  }

}
