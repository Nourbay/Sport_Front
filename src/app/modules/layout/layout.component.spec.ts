import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { LayoutComponent } from './layout.component';
=======
import { LayoutComponent } from './layout.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // <-- Import animations
>>>>>>> matchFront

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
    imports: [LayoutComponent],
}).compileComponents();
=======
      imports: [
        LayoutComponent,
        AngularSvgIconModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule  // <-- Ajout indispensable pour animations
      ],
    }).compileComponents();
>>>>>>> matchFront
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
