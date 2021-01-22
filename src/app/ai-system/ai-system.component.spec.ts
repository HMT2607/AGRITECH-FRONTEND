import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSystemComponent } from './ai-system.component';

describe('AiSystemComponent', () => {
  let component: AiSystemComponent;
  let fixture: ComponentFixture<AiSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
