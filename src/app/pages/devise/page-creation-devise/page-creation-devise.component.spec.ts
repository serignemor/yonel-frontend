import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreationDeviseComponent } from './page-creation-devise.component';

describe('PageCreationDeviseComponent', () => {
  let component: PageCreationDeviseComponent;
  let fixture: ComponentFixture<PageCreationDeviseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCreationDeviseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCreationDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
