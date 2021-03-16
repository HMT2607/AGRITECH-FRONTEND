import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvestPlantComponent } from './harvest-plant.component';

describe('HarvestPlantComponent', () => {
  let component: HarvestPlantComponent;
  let fixture: ComponentFixture<HarvestPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarvestPlantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HarvestPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
