import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { NftChartCardComponent } from './nft-chart-card.component';
=======
import { NftChartCardComponent } from './nft-chart-card.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // ✅ Import pour HttpClient mock
>>>>>>> matchFront

describe('NftChartCardComponent', () => {
  let component: NftChartCardComponent;
  let fixture: ComponentFixture<NftChartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
    imports: [NftChartCardComponent],
}).compileComponents();
=======
      imports: [
        NftChartCardComponent,                 // ✅ standalone component
        AngularSvgIconModule.forRoot(),        // ✅ svg-icon service
        HttpClientTestingModule                // ✅ MOCK HttpClient provider
      ],
    }).compileComponents();
>>>>>>> matchFront
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
