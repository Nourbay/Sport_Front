import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { PodcastPlayerComponent } from './podcast-player.component';
=======
import { PodcastPlayerComponent } from './podcast-player.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';
>>>>>>> matchFront

describe('PodcastPlayerComponent', () => {
  let component: PodcastPlayerComponent;
  let fixture: ComponentFixture<PodcastPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
    imports: [PodcastPlayerComponent]
})
    .compileComponents();
=======
      imports: [
        PodcastPlayerComponent,
        AngularSvgIconModule.forRoot(),  // Fournit SvgIconRegistryService
        HttpClientTestingModule          // Fournit HttpClient mock
      ],
    }).compileComponents();
>>>>>>> matchFront

    fixture = TestBed.createComponent(PodcastPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
