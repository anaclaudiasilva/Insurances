import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Coverages } from '../models/coverage.model';

@Injectable({
  providedIn: 'root'
})
export class CoverageService {

  constructor(
    private http: HttpClient
  ) { }

  public getResidencial(): Observable<Coverages[]> {
    const uri = `${environment.residencial}`;
    return this.http.get<Coverages[]>(uri);
  }
}
