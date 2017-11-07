import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideboardingComponent } from './sideboarding.component';

describe('SideboardingComponent', () => {
  let component: SideboardingComponent;
  let fixture: ComponentFixture<SideboardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideboardingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
