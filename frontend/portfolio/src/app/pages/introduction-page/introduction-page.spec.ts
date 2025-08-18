import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionPage } from './introduction-page';

describe('IntroductionPage', () => {
  let component: IntroductionPage;
  let fixture: ComponentFixture<IntroductionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
