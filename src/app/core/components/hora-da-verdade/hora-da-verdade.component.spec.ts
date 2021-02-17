import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraDaVerdadeComponent } from './hora-da-verdade.component';

describe('HoraDaVerdadeComponent', () => {
  let component: HoraDaVerdadeComponent;
  let fixture: ComponentFixture<HoraDaVerdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoraDaVerdadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoraDaVerdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
