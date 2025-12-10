import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ResultsSimple } from '@app/models/rick_and_morty/ListModel';
import { ApiRickAndMorty } from '@app/servicios/api-rick-and-morty';

@Component({
  selector: 'app-rick-and-morty-list',
  imports: [RouterModule],
  templateUrl: './rick-and-morty-list.html',
  styleUrl: './rick-and-morty-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RickAndMortyList implements OnInit {
  protected results: ResultsSimple[] = [];

  constructor(
    private _apiRickAndMorty: ApiRickAndMorty,
    private _router: Router,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this._apiRickAndMorty.getRecipes().subscribe((resultsResponse) => {
      this.results = resultsResponse.results;
      this._cdr.detectChanges();
    });
  }
  
  navigateToDetail(id: number) {
    this._router.navigate([`/rickandmorty/${id}`]);
  }
}
