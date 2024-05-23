import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangcodeComponent } from './langcode.component';

describe('LangcodeComponent', () => {
  let component: LangcodeComponent;
  let fixture: ComponentFixture<LangcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangcodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LangcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
