import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailResponse } from '@app/models/simpsons/DetailModel';
import { ApiSimpson } from '@app/servicios/api-simpson';

@Component({
  selector: 'app-simpson-detail',
  imports: [],
  templateUrl: './simpson-detail.html',
  styleUrl: './simpson-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpsonDetail implements OnInit {
  detailResponse!: DetailResponse;

  constructor(
    private _apiService: ApiSimpson,
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
