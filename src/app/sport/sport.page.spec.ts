import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SportPage } from './sport.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SportPage', () => {
  let component: SportPage;
  let fixture: ComponentFixture<SportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportPage ],
      imports: [IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(SportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
