import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailResponse } from '@app/models/dragon_ball/DetailModel';
import { ApiDragonBall } from '@app/servicios/api-dragon-ball';

@Component({
  selector: 'app-dragon-ball-detail',
  imports: [],
  templateUrl: './dragon-ball-detail.html',
  styleUrl: './dragon-ball-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonBallDetail implements OnInit{
detailResponse!: DetailResponse;

  constructor(
    private _apiService: ApiDragonBall,
    private _activedRoute: ActivatedRoute,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this._activedRoute.params.subscribe((params) => {
      console.log(params['id']);
      this._apiService.getRecipeById(params['id']).subscribe((detailResponse) => {
      console.log(detailResponse)
      this.detailResponse = detailResponse
      this._cdr.markForCheck();
      });   
    });
  }
}
