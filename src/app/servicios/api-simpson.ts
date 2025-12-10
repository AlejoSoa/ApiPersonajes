import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetailResponse } from '@app/models/simpsons/DetailModel';
import { ResultsResponse } from '@app/models/simpsons/ListModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiSimpson {
  private baseUrl = 'https://thesimpsonsapi.com/api/characters';

  constructor(private _httpClient: HttpClient) {}

  getRecipes(): Observable<ResultsResponse> {
    return this._httpClient.get<ResultsResponse>(`${this.baseUrl}`);
  }

  getRecipeById(id: number): Observable<DetailResponse> {
    return this._httpClient.get<DetailResponse>(`${this.baseUrl}/${id}`);
  }
}
