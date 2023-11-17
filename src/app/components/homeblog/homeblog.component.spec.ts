import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeblogComponent } from './homeblog.component';

describe('HomeblogComponent', () => {
  let component: HomeblogComponent;
  let fixture: ComponentFixture<HomeblogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeblogComponent]
    });
    fixture = TestBed.createComponent(HomeblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
