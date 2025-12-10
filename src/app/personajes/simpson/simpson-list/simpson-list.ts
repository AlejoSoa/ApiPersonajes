import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ResultsSimple } from '@app/models/simpsons/ListModel';
import { ApiSimpson } from '@app/servicios/api-simpson';

@Component({
  selector: 'app-simpson-list',
  imports: [RouterModule],
  templateUrl: './simpson-list.html',
  styleUrl: './simpson-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpsonList implements OnInit {
  protected results: ResultsSimple[] = [];

  constructor(
    private _apiSimpson: ApiSimpson,
    private _router: Router,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this._apiSimpson.getRecipes().subscribe((resultsResponse) => {
      this.results = resultsResponse.results;
      this._cdr.detectChanges();
    });
  }

  navigateToDetail(id: number) {
    this._router.navigate([`/simpsons/${id}`]);
  }
}
