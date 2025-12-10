import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetailResponse } from '@app/models/rick_and_morty/DetailModel';
import { ResultsResponse } from '@app/models/rick_and_morty/ListModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiRickAndMorty {
  private baseUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private _httpClient: HttpClient) {}

  getRecipes(): Observable<ResultsResponse> {
    return this._httpClient.get<ResultsResponse>(`${this.baseUrl}`);
  }

  getRecipeById(id: number): Observable<DetailResponse> {
    return this._httpClient.get<DetailResponse>(`${this.baseUrl}/${id}`);
  }
}
