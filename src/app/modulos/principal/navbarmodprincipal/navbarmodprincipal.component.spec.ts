import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarmodprincipalComponent } from './navbarmodprincipal.component';

describe('NavbarmodprincipalComponent', () => {
  let component: NavbarmodprincipalComponent;
  let fixture: ComponentFixture<NavbarmodprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarmodprincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarmodprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
