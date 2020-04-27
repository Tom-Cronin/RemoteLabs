import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinedPageHeaderComponent } from './joined-page-header.component';

describe('JoinedPageHeaderComponent', () => {
  let component: JoinedPageHeaderComponent;
  let fixture: ComponentFixture<JoinedPageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinedPageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinedPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
