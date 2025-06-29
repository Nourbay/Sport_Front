import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { SignInComponent } from './sign-in.component';

describe('LoginComponent', () => {
=======
import { SignInComponent } from './sign-in.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterTestingModule } from '@angular/router/testing';  // <-- Ajout important

describe('SignInComponent', () => {
>>>>>>> matchFront
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
    imports: [SignInComponent],
}).compileComponents();
=======
      imports: [
        SignInComponent,
        HttpClientTestingModule,
        AngularSvgIconModule.forRoot(),
        RouterTestingModule,   // <-- Fournit ActivatedRoute et Router mockés
      ],
    }).compileComponents();
>>>>>>> matchFront
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
