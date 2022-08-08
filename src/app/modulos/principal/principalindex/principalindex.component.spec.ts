import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalindexComponent } from './principalindex.component';

describe('PrincipalindexComponent', () => {
  let component: PrincipalindexComponent;
  let fixture: ComponentFixture<PrincipalindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalindexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
