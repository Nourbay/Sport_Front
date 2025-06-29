import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { NftAuctionsTableItemComponent } from './nft-auctions-table-item.component';
=======
import { NftAuctionsTableItemComponent } from './nft-auctions-table-item.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // ← Ajout indispensable
>>>>>>> matchFront

describe('NftAuctionsTableItemComponent', () => {
  let component: NftAuctionsTableItemComponent;
  let fixture: ComponentFixture<NftAuctionsTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
    imports: [NftAuctionsTableItemComponent],
}).compileComponents();
=======
      imports: [
        NftAuctionsTableItemComponent,
        AngularSvgIconModule.forRoot(),   // ← pour SvgIconRegistryService
        HttpClientTestingModule           // ← pour HttpClient (utilisé par angular-svg-icon)
      ],
    }).compileComponents();
>>>>>>> matchFront
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftAuctionsTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
