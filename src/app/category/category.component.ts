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
  updateCategory: Category = { id: 0, name: "" };
  deleteCategory: Category = { id: 0, name: "" };

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory(): void {
    this.categoryService.getAllCategory()
      .subscribe(categories => this.categories = categories);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.categoryService.addCategory({ name } as Category)
      .subscribe(category => {
        console.log('new category:', category)
        this.categories.push(category);
      });
  }

  onOpenUpdateModal(category: any) {
    this.updateCategory = category;
  }

  update(): void {
    if (!this.updateCategory.name.trim()) { return; }
    this.categoryService.updateCategory(this.updateCategory)
      .subscribe(category => {
        console.log('updated category:', category);
        this.getAllCategory();
      });
  }

  onOpenDeleteModal(category: any) {
    this.deleteCategory = category;
  }

  delete(id: number): void {
    this.categoryService.deleteCategory(id).subscribe(
      () => this.getAllCategory()
    );
  }
}
