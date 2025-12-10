import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ItemsSimple } from '@app/models/dragon_ball/ListModel';
import { ApiDragonBall } from '@app/servicios/api-dragon-ball';

@Component({
  selector: 'app-dragon-ball-list',
  imports: [RouterModule],
  templateUrl: './dragon-ball-list.html',
  styleUrl: './dragon-ball-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonBallList implements OnInit {
  protected items: ItemsSimple[] = [];

  constructor(
    private _apiDragonBall: ApiDragonBall,
    private _router: Router,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this._apiDragonBall.getRecipes().subscribe((itemsResponse) => {
      this.items = itemsResponse.items;
      this._cdr.detectChanges();
    });
  }
  
  navigateToDetail(id: number) {
    this._router.navigate([`/dragonball/${id}`]);
  }
}
