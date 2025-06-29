import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { NavbarMobileMenuComponent } from './navbar-mobile-menu.component';
=======
import { NavbarMobileMenuComponent } from './navbar-mobile-menu.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
>>>>>>> matchFront

describe('NavbarMobileMenuComponent', () => {
  let component: NavbarMobileMenuComponent;
  let fixture: ComponentFixture<NavbarMobileMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
    imports: [NavbarMobileMenuComponent],
}).compileComponents();
=======
      imports: [
        NavbarMobileMenuComponent,       // Composant standalone
        AngularSvgIconModule.forRoot(),  // Module SVG avec provider
        HttpClientTestingModule          // Mock HttpClient pour tests
      ],
      providers: [
        {
          provide: ActivatedRoute,       // Mock ActivatedRoute
          useValue: {
            params: of({}),              // Observable des params, vide ici
            snapshot: { paramMap: { get: () => null } } // snapshot mocké
          }
        }
      ]
    }).compileComponents();
>>>>>>> matchFront
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
