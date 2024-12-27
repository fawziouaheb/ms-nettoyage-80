import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationMsComponent } from './presentation-ms.component';

describe('PresentationMsComponent', () => {
  let component: PresentationMsComponent;
  let fixture: ComponentFixture<PresentationMsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationMsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationMsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
