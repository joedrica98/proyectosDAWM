import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';


@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css'],
})
export class AnimeDetailComponent implements OnInit {
  id: number;
  anime;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private animeService: AnimeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.getAnime(this.id);
    });
  }

  getAnime(id) {
    this.animeService.getAnimeById(id).subscribe((response) => {
      this.anime = response.data;
      console.log(this.anime);
    });
  }
}
