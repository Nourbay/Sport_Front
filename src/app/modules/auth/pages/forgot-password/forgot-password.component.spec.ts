import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { ForgotPasswordComponent } from './forgot-password.component';
=======
import { ForgotPasswordComponent } from './forgot-password.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
>>>>>>> matchFront

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
    imports: [ForgotPasswordComponent],
}).compileComponents();
=======
      imports: [ForgotPasswordComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),  // simule un observable de params vide
            snapshot: { paramMap: { get: (key: string) => null } }
          }
        }
      ]
    }).compileComponents();
>>>>>>> matchFront
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
