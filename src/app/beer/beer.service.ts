import { Injectable } from '@angular/core';
import { root } from 'rxjs/internal-compatibility';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: root
})

export class BeerService {
  constructor(private http: HttpClient) {}

  loadBeerList(): Observable<Item[]> {
    return this.http.get<Item[]>('https://api.punkapi.com/v2/beers');
  }

  loadBeerDetails(id: number): Observable<Item> {
    return this.http.get<Item>(`https://api.punkapi.com/v2/beers/${id}`);
  }
}


