import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit {
  searchTerm = '';
  constructor(activatedRoute: ActivatedRoute, private router:Router){
    activatedRoute.params.subscribe((params) =>{
      if(params.searchTerm) this.searchTerm = params.searchTerm;
    })
  }

  ngOnInit(): void{
  }

  search(term:string ): void{
    if(term)
      this.router.navigateByUrl('/search/' + term);
  }
}
