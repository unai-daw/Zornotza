import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Word} from '../interfaces/word'
@Injectable({
  providedIn: 'root'
})
export class WordService {
  private url = 'http://localhost:8000/api/words';
  constructor(private http: HttpClient) { }

  getTextos(): Observable<Word[]>{
    return this.http.get<Word[]>(this.url);
  }
}
