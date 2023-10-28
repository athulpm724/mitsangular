import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerhomeComponent } from './trackerhome.component';

describe('TrackerhomeComponent', () => {
  let component: TrackerhomeComponent;
  let fixture: ComponentFixture<TrackerhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackerhomeComponent]
    });
    fixture = TestBed.createComponent(TrackerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
