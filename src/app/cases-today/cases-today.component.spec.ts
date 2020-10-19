import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesTodayComponent } from './cases-today.component';

describe('CasesTodayComponent', () => {
  let component: CasesTodayComponent;
  let fixture: ComponentFixture<CasesTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasesTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
