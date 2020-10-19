import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesPerMillionComponent } from './cases-per-million.component';

describe('CasesPerMillionComponent', () => {
  let component: CasesPerMillionComponent;
  let fixture: ComponentFixture<CasesPerMillionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasesPerMillionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesPerMillionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
