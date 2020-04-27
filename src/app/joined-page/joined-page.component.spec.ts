import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinedPageComponent } from './joined-page.component';

describe('JoinedPageComponent', () => {
  let component: JoinedPageComponent;
  let fixture: ComponentFixture<JoinedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
