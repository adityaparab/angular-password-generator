import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordGeneratorComponent } from './password-generator.component';

describe('PasswordGeneratorComponent', () => {
  let component: PasswordGeneratorComponent;
  let fixture: ComponentFixture<PasswordGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should keep the generate button disabled when only length is entered', () => {
    const fixture = TestBed.createComponent(PasswordGeneratorComponent);

    const app = fixture.componentInstance;
    app.passwordLength = 10;

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.disabled).toBe(true);
  });

  it('should enable to button when length and one of the checkboxes is selected', () => {
    const fixture = TestBed.createComponent(PasswordGeneratorComponent);

    const app = fixture.componentInstance;
    app.passwordLength = 10;
    app.letters = true;

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.disabled).toBe(false);
  });

  it('should keep the button disablen when one of the checkboxes is selected and length < 8', () => {
    const fixture = TestBed.createComponent(PasswordGeneratorComponent);

    const app = fixture.componentInstance;
    app.passwordLength = 7;
    app.letters = true;

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.disabled).toBe(true);
  });

  it('should hide generated password output when password is not generated', () => {
    const fixture = TestBed.createComponent(PasswordGeneratorComponent);

    const app = fixture.componentInstance;
    app.password = '';

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.output')).not.toBeTruthy();
  });

  it('should show generated password output when password is generated', () => {
    const fixture = TestBed.createComponent(PasswordGeneratorComponent);

    const app = fixture.componentInstance;
    app.password = 'asd123';

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.output')).toBeTruthy();
  });
});
