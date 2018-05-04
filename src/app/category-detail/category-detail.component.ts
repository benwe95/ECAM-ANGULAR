import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../category';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../category.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  @Input() category: Category;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id).subscribe(category => this.category = category);
  }

  goBack(): void {
    this.location.back();
  }

  /*save(): void {
    this.categoryService.updateCategory(this.category)
      .subscribe(() => this.goBack());
  }*/
}
