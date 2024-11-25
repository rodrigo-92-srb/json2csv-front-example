import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Json2csvComponent } from './json2csv.component';

describe('Json2csvComponent', () => {
  let component: Json2csvComponent;
  let fixture: ComponentFixture<Json2csvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Json2csvComponent]
    });
    fixture = TestBed.createComponent(Json2csvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
