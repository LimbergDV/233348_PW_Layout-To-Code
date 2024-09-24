import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarStatsPlayersComponent } from './bar-stats-players.component';

describe('BarStatsPlayersComponent', () => {
  let component: BarStatsPlayersComponent;
  let fixture: ComponentFixture<BarStatsPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarStatsPlayersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarStatsPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
