import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightDevicesComponent } from './light-devices.component';

describe('LightDevicesComponent', () => {
  let component: LightDevicesComponent;
  let fixture: ComponentFixture<LightDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
