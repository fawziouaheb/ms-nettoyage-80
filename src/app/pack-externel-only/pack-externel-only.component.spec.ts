import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackExternelOnlyComponent } from './pack-externel-only.component';

describe('PackExternelOnlyComponent', () => {
  let component: PackExternelOnlyComponent;
  let fixture: ComponentFixture<PackExternelOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackExternelOnlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackExternelOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
