import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Questions } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
    private http: HttpClient
  ) { }

  public getQuestion(): Observable<Questions[]> {
    const uri = `${environment.questoes}`;
    return this.http.get<Questions[]>(uri);
  }
}
