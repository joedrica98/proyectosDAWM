import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeListComponent } from './anime/anime-list/anime-list.component';
import { AnimeDetailComponent } from './anime/anime-detail/anime-detail.component';
import { AnimeStatisticsComponent } from './anime/anime-statistics/anime-statistics.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/anime', pathMatch: 'full' },
  {
    path: 'anime',
    children: [
      {
        path: '',
        component: AnimeListComponent,
      },
      {
        path: ':id',
        component: AnimeDetailComponent,
      },
      {
        path: ':id/statistics',
        component: AnimeStatisticsComponent,
      },
    ],
  },
  { path: 'detail', component: AnimeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
