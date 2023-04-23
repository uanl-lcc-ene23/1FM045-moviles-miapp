import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicaActivaComponent } from './musica-activa.component';

describe('MusicaActivaComponent', () => {
  let component: MusicaActivaComponent;
  let fixture: ComponentFixture<MusicaActivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicaActivaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicaActivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
