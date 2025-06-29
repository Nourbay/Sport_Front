import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { NftAuctionsTableComponent } from './nft-auctions-table.component';
=======
import { NftAuctionsTableComponent } from './nft-auctions-table.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';
>>>>>>> matchFront

describe('NftAuctionsTableComponent', () => {
  let component: NftAuctionsTableComponent;
  let fixture: ComponentFixture<NftAuctionsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
    imports: [NftAuctionsTableComponent],
}).compileComponents();
  });

  beforeEach(() => {
=======
      imports: [
        NftAuctionsTableComponent,
        AngularSvgIconModule.forRoot(),
        HttpClientTestingModule
      ],
    }).compileComponents();

>>>>>>> matchFront
    fixture = TestBed.createComponent(NftAuctionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
