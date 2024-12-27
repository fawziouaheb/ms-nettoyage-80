import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackDepthComponent } from './pack-depth.component';

describe('PackDepthComponent', () => {
  let component: PackDepthComponent;
  let fixture: ComponentFixture<PackDepthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackDepthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackDepthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
