import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsSimple } from '@app/models/dragon_ball/ListModel';
import { ApiDragonBall } from '@app/servicios/api-dragon-ball';

@Component({
  selector: 'app-dragon-ball-list',
  imports: [],
  templateUrl: './dragon-ball-list.html',
  styleUrl: './dragon-ball-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonBallList implements OnInit {
  protected items: ItemsSimple[] = [];
  protected limit: number = 0;

  constructor(private _apiDragonBall: ApiDragonBall, private _router: Router) {}

  ngOnInit() {
    this._apiDragonBall.getRecipes().subscribe((itemsResponse) => {
      this.items = itemsResponse.items;
    });
  }
  navigateToDetail(id: number) {
    this._router.navigate([`/items/${id}`]);
  }
}
