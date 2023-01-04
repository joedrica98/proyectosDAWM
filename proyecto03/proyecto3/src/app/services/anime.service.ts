import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  constructor(private http: HttpClient) {}

  getAnimes() {
    return this.http.get<any>('https://api.jikan.moe/v4/anime');
  }

  getAnimeById(id) {
    return this.http.get<any>('https://api.jikan.moe/v4/anime/' + id);
  }

  getAnimeStatistics(id) {
    return this.http.get<any>(
      'https://api.jikan.moe/v4/anime/' + id + '/statistics'
    );
  }
}
