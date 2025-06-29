import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { NavbarMenuComponent } from './navbar-menu.component';
=======
import { NavbarMenuComponent } from './navbar-menu.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // <-- Indispensable
>>>>>>> matchFront

describe('NavbarMenuComponent', () => {
  let component: NavbarMenuComponent;
  let fixture: ComponentFixture<NavbarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
    imports: [NavbarMenuComponent],
}).compileComponents();
=======
      imports: [
        NavbarMenuComponent,
        AngularSvgIconModule.forRoot(),
        HttpClientTestingModule,  // <-- Ajout ici
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            snapshot: { paramMap: { get: (key: string) => null } }
          }
        }
      ]
    }).compileComponents();
>>>>>>> matchFront
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
