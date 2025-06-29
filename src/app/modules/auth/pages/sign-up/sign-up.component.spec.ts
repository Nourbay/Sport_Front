import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { SignUpComponent } from './sign-up.component';
=======
import { SignUpComponent } from './sign-up.component';
import { RouterTestingModule } from '@angular/router/testing';  
import { AngularSvgIconModule } from 'angular-svg-icon';        
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
>>>>>>> matchFront

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
    imports: [SignUpComponent],
}).compileComponents();
=======
      imports: [
        SignUpComponent,
        RouterTestingModule,
        AngularSvgIconModule.forRoot(),
        HttpClientTestingModule,
      ],
    }).compileComponents();
>>>>>>> matchFront
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
