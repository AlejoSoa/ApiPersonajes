import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DetailResponse } from '@app/models/rick_and_morty/DetailModel';
import { ApiRickAndMorty } from '@app/servicios/api-rick-and-morty';

@Component({
  selector: 'app-rick-and-morty-detail',
  imports: [],
  templateUrl: './rick-and-morty-detail.html',
  styleUrl: './rick-and-morty-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RickAndMortyDetail implements OnInit {
  detailResponse!: DetailResponse;

  constructor(
    private _apiService: ApiRickAndMorty,
    private _activedRoute: ActivatedRoute,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this._activedRoute.params.subscribe((params) => {
      console.log(params['id']);
      this._apiService.getRecipeById(params['id']).subscribe((detailResponse) => {
        console.log(detailResponse);
        this.detailResponse = detailResponse;
        this._cdr.markForCheck();
      });
    });
  }
}
