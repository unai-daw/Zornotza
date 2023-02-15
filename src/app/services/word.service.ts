import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Word} from '../interfaces/word'
import { ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private url = 'http://localhost:8000/api/words';
  constructor(private apiService: ApiService) {}

  getWords(forceRefresh: boolean): Observable<Word[]>{
    return this.apiService.getData(this.url, forceRefresh);
  }
}
