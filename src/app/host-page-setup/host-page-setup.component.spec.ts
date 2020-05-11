import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostPageSetupComponent } from './host-page-setup.component';

describe('HostPageSetupComponent', () => {
  let component: HostPageSetupComponent;
  let fixture: ComponentFixture<HostPageSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostPageSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostPageSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
