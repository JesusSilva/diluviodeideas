import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasingleComponent } from './ideasingle.component';

describe('IdeasingleComponent', () => {
  let component: IdeasingleComponent;
  let fixture: ComponentFixture<IdeasingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeasingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
