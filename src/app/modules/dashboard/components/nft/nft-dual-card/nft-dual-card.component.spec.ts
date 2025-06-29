import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { BiddingDualCardComponent } from './nft-dual-card.component';

describe('BiddingDualCardComponent', () => {
  let component: BiddingDualCardComponent;
  let fixture: ComponentFixture<BiddingDualCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [BiddingDualCardComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingDualCardComponent);
=======
import { NftDualCardComponent } from './nft-dual-card.component';

describe('NftDualCardComponent', () => {
  let component: NftDualCardComponent;
  let fixture: ComponentFixture<NftDualCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NftDualCardComponent] // ✅ composant standalone => on l'importe
    }).compileComponents();

    fixture = TestBed.createComponent(NftDualCardComponent);
>>>>>>> matchFront
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
