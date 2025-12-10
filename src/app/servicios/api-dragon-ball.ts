import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetailResponse } from '@app/models/dragon_ball/DetailModel';
import { ItemsResponse } from '@app/models/dragon_ball/ListModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiDragonBall {
  private baseUrl = 'https://dragonball-api.com/api/characters';

  constructor(private _httpClient: HttpClient) {}

  getRecipes(): Observable<ItemsResponse> {
    return this._httpClient.get<ItemsResponse>(`${this.baseUrl}`);
  }

  getRecipeById(id: number): Observable<DetailResponse> {
    return this._httpClient.get<DetailResponse>(`${this.baseUrl}/${id}`);
  }
}
