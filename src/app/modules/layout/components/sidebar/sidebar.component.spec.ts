import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { SidebarComponent } from './sidebar.component';
=======
import { SidebarComponent } from './sidebar.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';  // <-- Ajout ici
>>>>>>> matchFront

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
    imports: [SidebarComponent],
}).compileComponents();
=======
      imports: [
        SidebarComponent,
        AngularSvgIconModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule   // <-- Fournit ActivatedRoute et autres services du routeur
      ],
    }).compileComponents();
>>>>>>> matchFront
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
