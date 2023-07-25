import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesssagesComponent } from './messsages.component';

describe('MesssagesComponent', () => {
  let component: MesssagesComponent;
  let fixture: ComponentFixture<MesssagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesssagesComponent]
    });
    fixture = TestBed.createComponent(MesssagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
