import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { StarRatingComponent } from "../../partials/star-rating/star-rating.component";
import { SearchBarComponent } from '../../partials/search-bar/search-bar.component';
import { TagsComponent } from "../../partials/tags/tags.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, StarRatingComponent, SearchBarComponent, TagsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  foods:Food[] = [];

  constructor(private foodServices:FoodService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) =>{
      if(params.searchTerm)
        this.foods = this.foodServices.getAllFoodSearchTerm(params.searchTerm);
      else if(params.tag)
        this.foods = this.foodServices.getAllFoodByTags(params.tag);
      else
        this.foods = this.foodServices.getAll();
    })
   }

  ngOnInit(): void {
  }
}
