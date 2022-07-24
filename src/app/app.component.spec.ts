import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

@Component({ selector: 'app-navbar', template: '' })
class MockNavbar {}

@Component({ selector: 'app-password-generator', template: '' })
class MockPasswordGenerator {}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, MockNavbar, MockPasswordGenerator],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
