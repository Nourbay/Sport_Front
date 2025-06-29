import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { NftComponent } from './nft.component';
=======
import { NftComponent } from './nft.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // <-- À ajouter
>>>>>>> matchFront

describe('NftComponent', () => {
  let component: NftComponent;
  let fixture: ComponentFixture<NftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
    imports: [NftComponent],
}).compileComponents();
  });

  beforeEach(() => {
=======
      imports: [
        NftComponent,                   // Composant standalone
        AngularSvgIconModule.forRoot(), // Pour SvgIconRegistryService
        HttpClientTestingModule          // <--- Fournit HttpClient mock pour test
      ]
    }).compileComponents();

>>>>>>> matchFront
    fixture = TestBed.createComponent(NftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
