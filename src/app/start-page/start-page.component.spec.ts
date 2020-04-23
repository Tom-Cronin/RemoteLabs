import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPageComponent } from './start-page.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


describe('StartPageComponent', () => {
  let component: StartPageComponent;
  let fixture: ComponentFixture<StartPageComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartPageComponent ], imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the user.hostType to host', () => {
    let compiledComponent = fixture.debugElement;
    let user = component.user
    let hostButton = compiledComponent.query(By.css('#HostButton')).nativeElement;

    expect(user.hostType).toEqual('');
    hostButton.click();
    expect(user.hostType).toEqual('host');
  });

  it('should update the user.hostType to client', () => {
    let compiledComponent = fixture.debugElement;
    let user = component.user
    let hostButton = compiledComponent.query(By.css('#JoinButton')).nativeElement;
    expect(user.hostType).toEqual('');
    hostButton.click();
    expect(user.hostType).toEqual('client');
  });

  it('should update the user.name to Tom', () => {
    let compiledComponent = fixture.debugElement;
    let user = component.user
    let NameInput = compiledComponent.query(By.css('#NameInput')).nativeElement;
    expect(user.name).toEqual('');
    NameInput.value = 'Tom';
    NameInput.dispatchEvent(new Event ('input'))
    fixture.detectChanges();
    expect(user.name).toEqual('Tom');
  });

});
