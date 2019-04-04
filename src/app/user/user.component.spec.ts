import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { LoginService } from './login.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('User Name should be fetched from service', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.debugElement.componentInstance;
    const loginService = fixture.debugElement.injector.get(LoginService);
    fixture.detectChanges();
    expect(app.user).toEqual(loginService.user);
  });

  it('User Name should be displayed if user is logged in', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    const loginService = fixture.debugElement.injector.get(LoginService);
    app.user = 'Rashmith';
    app.isLoggedIn = true;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(compiled.querySelector('.text-success').textContent).toContain(app.user);
    });
  });

  it('User Name should not be displayed if user is not logged in', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('.text-success')).toEqual(undefined || null);
  });

  it('User Name should not be fetched if not called asynchronously', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.debugElement.componentInstance;
    const loginService = fixture.debugElement.injector.get(LoginService);
    const spyon = spyOn(loginService, 'getUser').and.returnValue(Promise.resolve("Testing"));
    fixture.detectChanges();
    expect(app.user).toBe(undefined);
  });

  it('User Name should be fetched if called asynchronously', async(() => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.debugElement.componentInstance;
    const loginService = fixture.debugElement.injector.get(LoginService);
    const spyon = spyOn(loginService, 'getUser').and.returnValue(Promise.resolve("Testing"));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.user).toBe("Testing");
    });
  }));
});
