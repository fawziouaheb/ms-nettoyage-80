import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackInternelComponent } from './pack-internel.component';

describe('PackInternelComponent', () => {
  let component: PackInternelComponent;
  let fixture: ComponentFixture<PackInternelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackInternelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackInternelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
