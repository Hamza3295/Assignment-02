import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SportslistPage } from './sportslist.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SportslistPage', () => {
  let component: SportslistPage;
  let fixture: ComponentFixture<SportslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportslistPage ],
      imports: [IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(SportslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
