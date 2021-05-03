import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryScoreComponent } from './category-score.component';

describe('CategoryScoreComponent', () => {
  let component: CategoryScoreComponent;
  let fixture: ComponentFixture<CategoryScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
