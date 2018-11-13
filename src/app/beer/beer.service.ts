import { Injectable } from '@angular/core';
import { root } from 'rxjs/internal-compatibility';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: root
})

export class BeerService {
  constructor(private http: HttpClient) {}

  loadBeerList(): Observable<Item[]> {
    return this.http.get<Item[]>('https://api.punkapi.com/v2/beers');
  }

  loadBeerDetails(id: number): Observable<Item> {
    return this.http.get<Item[]>(`https://api.punkapi.com/v2/beers/${id}`).pipe(
      filter((res: Item[]) => !!res && res.length > 0),
      map((res: Item[]) => res && res[0])
    );
  }
}


