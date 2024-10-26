import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomgeneratorComponent } from './randomgenerator.component';

describe('RandomgeneratorComponent', () => {
  let component: RandomgeneratorComponent;
  let fixture: ComponentFixture<RandomgeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomgeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomgeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
