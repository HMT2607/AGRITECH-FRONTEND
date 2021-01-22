import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecropComponent } from './managecrop.component';

describe('ManagecropComponent', () => {
  let component: ManagecropComponent;
  let fixture: ComponentFixture<ManagecropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagecropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
