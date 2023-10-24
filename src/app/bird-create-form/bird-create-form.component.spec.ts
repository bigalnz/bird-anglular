import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdCreateFormComponent } from './bird-create-form.component';

describe('BirdCreateFormComponent', () => {
  let component: BirdCreateFormComponent;
  let fixture: ComponentFixture<BirdCreateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BirdCreateFormComponent]
    });
    fixture = TestBed.createComponent(BirdCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
