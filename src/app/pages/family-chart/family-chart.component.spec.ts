import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyChartComponent } from './family-chart.component';

describe('FamilyChartComponent', () => {
  let component: FamilyChartComponent;
  let fixture: ComponentFixture<FamilyChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
