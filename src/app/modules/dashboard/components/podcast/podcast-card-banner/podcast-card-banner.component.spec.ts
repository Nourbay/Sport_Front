import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { PodcastCardBannerComponent } from './podcast-card-banner.component';
=======
import { PodcastCardBannerComponent } from './podcast-card-banner.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';
>>>>>>> matchFront

describe('PodcastCardBannerComponent', () => {
  let component: PodcastCardBannerComponent;
  let fixture: ComponentFixture<PodcastCardBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
    imports: [PodcastCardBannerComponent]
})
    .compileComponents();
=======
      imports: [
        PodcastCardBannerComponent,
        AngularSvgIconModule.forRoot(),  // Fournit SvgIconRegistryService
        HttpClientTestingModule           // Fournit HttpClient pour SvgIconRegistryService
      ]
    }).compileComponents();
>>>>>>> matchFront

    fixture = TestBed.createComponent(PodcastCardBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
