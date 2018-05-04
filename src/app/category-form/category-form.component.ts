import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  category = new Category();
  wording: string;
  edit = false;
  id: number;

  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.getCategory();
      this.edit = true;
    }
  }

  getCategory(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(this.id).subscribe(category => this.category = category);
  }

  goBack(): void {
    this.location.back();
  }

  saveCategory(): void {
    // Check if the title is not a blank
    this.wording = this.wording.trim();
    if (!this.wording) { return; }
    // Then look if the mode is EDIT or ADD
    if (this.edit) {
      this.categoryService.updateCategory({ wording: this.wording } as Category, this.id)
        .subscribe(() => this.goBack());
    } else {
      this.categoryService.addCategory({ wording: this.wording} as Category)
        .subscribe(() => this.goBack());
    }

  }

}

