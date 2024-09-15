import { Component, OnInit } from '@angular/core';
import { Tags } from '../../../shared/models/Tags';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit {
  tags?: Tags[];
  constructor(foodService: FoodService) {
    this.tags = foodService.getAllTags();
   }

  ngOnInit(): void {
  }

}
