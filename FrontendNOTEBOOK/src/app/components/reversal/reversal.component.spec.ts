import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversalComponent } from './reversal.component';

describe('ReversalComponent', () => {
  let component: ReversalComponent;
  let fixture: ComponentFixture<ReversalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReversalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
