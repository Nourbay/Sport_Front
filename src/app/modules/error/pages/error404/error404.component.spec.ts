import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { Error404Component } from './error404.component';
=======
import { Error404Component } from './error404.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // <-- IMPORTANT
>>>>>>> matchFront

describe('Error404Component', () => {
  let component: Error404Component;
  let fixture: ComponentFixture<Error404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [Error404Component]
    })
    .compileComponents();
    
=======
      imports: [
        Error404Component,
        AngularSvgIconModule.forRoot(),
        HttpClientTestingModule   // <-- Ajout indispensable ici
      ],
    }).compileComponents();

>>>>>>> matchFront
    fixture = TestBed.createComponent(Error404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
