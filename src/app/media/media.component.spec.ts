import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MediaComponent } from './media.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('debería calcular la media de los valores y nuevosValores correctamente', () => {
    const mockData = {
      valores: [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503],
      nuevosValores: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    };
    component.ngOnInit();
    const request = httpMock.expectOne('src/app/media/datos.json');
    request.flush(mockData);
    expect(component.media).toBe(550.6); 
    expect(parseFloat(component.mediaNuevosValores.toFixed(2))).toBe(60.32);
  });
  
})  