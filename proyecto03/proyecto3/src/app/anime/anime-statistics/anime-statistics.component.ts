import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime-statistics',
  templateUrl: './anime-statistics.component.html',
  styleUrls: ['./anime-statistics.component.css'],
})
export class AnimeStatisticsComponent implements OnInit {
  id: number;
  anime;
  animeStats;
  total;
  completed;
  dropped;
  on_hold;
  plan_to_watch;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private animeService: AnimeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.getAnime(this.id);
      this.getAnimeStatistics(this.id);
    });
  }

  getAnime(id) {
    this.animeService.getAnimeById(id).subscribe((response) => {
      this.anime = response.data;
      console.log(this.anime);
    });
  }

  getAnimeStatistics(id) {
    this.animeService.getAnimeStatistics(id).subscribe((response) => {
      this.animeStats = response.data;
      console.log(this.animeStats);
      this.total =
        this.animeStats.completed +
        this.animeStats.dropped +
        this.animeStats.on_hold +
        this.animeStats.plan_to_watch;

      this.completed = (this.animeStats.completed / this.total) * 100 + '%';
      this.dropped = (this.animeStats.dropped / this.total) * 100 + '%';
      this.on_hold = (this.animeStats.on_hold / this.total) * 100 + '%';
      this.plan_to_watch =
        (this.animeStats.plan_to_watch / this.total) * 100 + '%';
    });
  }
}
