import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurbujasComponent } from './burbujas.component';

describe('BurbujasComponent', () => {
  let component: BurbujasComponent;
  let fixture: ComponentFixture<BurbujasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurbujasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurbujasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
