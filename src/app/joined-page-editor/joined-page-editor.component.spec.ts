import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinedPageEditorComponent } from './joined-page-editor.component';

describe('JoinedPageEditorComponent', () => {
  let component: JoinedPageEditorComponent;
  let fixture: ComponentFixture<JoinedPageEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinedPageEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinedPageEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
