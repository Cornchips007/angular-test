import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCompComponent } from './web-comp.component';

describe('WebCompComponent', () => {
  let component: WebCompComponent;
  let fixture: ComponentFixture<WebCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
