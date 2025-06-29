import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSubmenuComponent } from './navbar-submenu.component';

describe('NavbarSubmenuComponent', () => {
  let component: NavbarSubmenuComponent;
  let fixture: ComponentFixture<NavbarSubmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
    imports: [NavbarSubmenuComponent],
}).compileComponents();
=======
      imports: [NavbarSubmenuComponent],
    }).compileComponents();
>>>>>>> matchFront
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSubmenuComponent);
    component = fixture.componentInstance;
<<<<<<< HEAD
=======

    // Ici on initialise submenu avec un tableau vide pour éviter l'erreur NG02200
    component.submenu = [];

>>>>>>> matchFront
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
