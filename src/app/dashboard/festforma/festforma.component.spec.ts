import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestformaComponent } from './festforma.component';

describe('FestformaComponent', () => {
  let component: FestformaComponent;
  let fixture: ComponentFixture<FestformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
