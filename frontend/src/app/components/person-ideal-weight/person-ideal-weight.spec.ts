import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonIdealWeight } from './person-ideal-weight';

describe('PersonIdealWeight', () => {
  let component: PersonIdealWeight;
  let fixture: ComponentFixture<PersonIdealWeight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonIdealWeight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonIdealWeight);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
