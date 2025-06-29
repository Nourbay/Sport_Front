import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { BottomNavbarComponent } from './bottom-navbar.component';
=======
import { BottomNavbarComponent } from './bottom-navbar.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';
>>>>>>> matchFront

describe('BottomNavbarComponent', () => {
  let component: BottomNavbarComponent;
  let fixture: ComponentFixture<BottomNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
    imports: [BottomNavbarComponent],
}).compileComponents();
  });

  beforeEach(() => {
=======
      imports: [
        BottomNavbarComponent,              // ✅ composant standalone
        AngularSvgIconModule.forRoot(),     // ✅ pour SvgIconRegistryService
        HttpClientTestingModule             // ✅ pour HttpClient mock
      ]
    }).compileComponents();

>>>>>>> matchFront
    fixture = TestBed.createComponent(BottomNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
