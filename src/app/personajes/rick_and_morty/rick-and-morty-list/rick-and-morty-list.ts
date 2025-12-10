import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultsSimple } from '@app/models/rick_and_morty/ListModel';
import { ApiRickAndMorty } from '@app/servicios/api-rick-and-morty';

@Component({
  selector: 'app-rick-and-morty-list',
  imports: [],
  templateUrl: './rick-and-morty-list.html',
  styleUrl: './rick-and-morty-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RickAndMortyList implements OnInit {
  protected results: ResultsSimple[] = [];
  protected limit: number = 0;

  constructor(private _apiRickAndMorty: ApiRickAndMorty, private _router: Router) {}

  ngOnInit() {
    this._apiRickAndMorty.getRecipes().subscribe((resultsResponse) => {
      this.results = resultsResponse.results;
    });
  }
  navigateToDetail(id: number) {
    this._router.navigate([`/results/${id}`]);
  }
}
