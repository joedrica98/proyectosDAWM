import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css'],
})
export class AnimeListComponent implements OnInit {
  constructor(private animeService: AnimeService, private router: Router) {}
  animes = [];

  ngOnInit(): void {
    this.animeService.getAnimes().subscribe((response) => {
      this.animes = response.data;
      console.log(this.animes);
    });
  }

  navigateToDetail(id) {
    this.router.navigate(['/anime/' + id]);
  }
}
