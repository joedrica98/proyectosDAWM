import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeStatisticsComponent } from './anime-statistics.component';

describe('AnimeStatisticsComponent', () => {
  let component: AnimeStatisticsComponent;
  let fixture: ComponentFixture<AnimeStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
