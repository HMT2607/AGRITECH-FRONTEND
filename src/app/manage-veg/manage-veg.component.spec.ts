import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVegComponent } from './manage-veg.component';

describe('ManageVegComponent', () => {
  let component: ManageVegComponent;
  let fixture: ComponentFixture<ManageVegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageVegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
