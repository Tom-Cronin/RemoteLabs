import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinedPageLectureComponent } from './joined-page-lecture.component';

describe('JoinedPageLectureComponent', () => {
  let component: JoinedPageLectureComponent;
  let fixture: ComponentFixture<JoinedPageLectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinedPageLectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinedPageLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
