import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackExternelComponent } from './pack-externel.component';

describe('PackExternelComponent', () => {
  let component: PackExternelComponent;
  let fixture: ComponentFixture<PackExternelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackExternelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackExternelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
