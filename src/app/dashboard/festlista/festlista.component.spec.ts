import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestlistaComponent } from './festlista.component';

describe('FestlistaComponent', () => {
  let component: FestlistaComponent;
  let fixture: ComponentFixture<FestlistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestlistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
