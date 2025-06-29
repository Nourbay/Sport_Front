import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { PodcastComponent } from './podcast.component';
=======
import { PodcastComponent } from './podcast.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // <- à ajouter
>>>>>>> matchFront

describe('PodcastComponent', () => {
  let component: PodcastComponent;
  let fixture: ComponentFixture<PodcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
    imports: [PodcastComponent]
})
    .compileComponents();
=======
      imports: [
        PodcastComponent,
        AngularSvgIconModule.forRoot(),
        HttpClientTestingModule    // <- module mock HttpClient
      ]
    }).compileComponents();
>>>>>>> matchFront

    fixture = TestBed.createComponent(PodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
