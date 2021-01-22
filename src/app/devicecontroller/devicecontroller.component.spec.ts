import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicecontrollerComponent } from './devicecontroller.component';

describe('DevicecontrollerComponent', () => {
  let component: DevicecontrollerComponent;
  let fixture: ComponentFixture<DevicecontrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicecontrollerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicecontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
