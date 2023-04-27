import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaittingComponent } from './waitting.component';

describe('WaittingComponent', () => {
  let component: WaittingComponent;
  let fixture: ComponentFixture<WaittingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaittingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
