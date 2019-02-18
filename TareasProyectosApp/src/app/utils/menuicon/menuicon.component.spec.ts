import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuiconPage } from './menuicon.page';

describe('MenuiconPage', () => {
  let component: MenuiconPage;
  let fixture: ComponentFixture<MenuiconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuiconPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuiconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
