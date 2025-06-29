import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { NewPasswordComponent } from './new-password.component';
=======
import { NewPasswordComponent } from './new-password.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅ ajouté
>>>>>>> matchFront

describe('NewPasswordComponent', () => {
  let component: NewPasswordComponent;
  let fixture: ComponentFixture<NewPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
    imports: [NewPasswordComponent],
}).compileComponents();
=======
      imports: [
        NewPasswordComponent,
        AngularSvgIconModule.forRoot(),
        HttpClientTestingModule  // ✅ indispensable pour HttpClient
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}), 
            snapshot: { paramMap: { get: (key: string) => 'dummy-token' } },
          },
        },
      ],
    }).compileComponents();
>>>>>>> matchFront

    fixture = TestBed.createComponent(NewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
