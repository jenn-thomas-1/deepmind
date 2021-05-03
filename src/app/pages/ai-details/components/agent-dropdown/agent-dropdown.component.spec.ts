import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentDropdownComponent } from './agent-dropdown.component';

describe('AgentDropdownComponent', () => {
  let component: AgentDropdownComponent;
  let fixture: ComponentFixture<AgentDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
