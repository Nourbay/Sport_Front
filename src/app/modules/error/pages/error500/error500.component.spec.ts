import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { Error500Component } from './error500.component';
=======
import { Error500Component } from './error500.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';
>>>>>>> matchFront

describe('Error500Component', () => {
  let component: Error500Component;
  let fixture: ComponentFixture<Error500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [Error500Component]
    })
    .compileComponents();
    
=======
      imports: [
        Error500Component,          // Composant standalone
        AngularSvgIconModule.forRoot(), // Pour SvgIconRegistryService
        HttpClientTestingModule          // Pour HttpClient utilisé par angular-svg-icon
      ]
    }).compileComponents();

>>>>>>> matchFront
    fixture = TestBed.createComponent(Error500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
