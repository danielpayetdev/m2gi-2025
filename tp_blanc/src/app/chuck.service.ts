import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ChuckFact {
  value: string;
  icon_url: string;
}

@Injectable({providedIn: 'root'})
export class ChuckService {
  private readonly httpclient = inject(HttpClient);

  public getFact(): Observable<ChuckFact> {
    return this.httpclient.get<ChuckFact>('https://api.chucknorris.io/jokes/random');
  }
}
