import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPlantComponent } from './register-plant.component';

describe('RegisterPlantComponent', () => {
  let component: RegisterPlantComponent;
  let fixture: ComponentFixture<RegisterPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPlantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
