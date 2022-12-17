import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreationAgenceComponent } from './page-creation-agence.component';

describe('PageCreationAgenceComponent', () => {
  let component: PageCreationAgenceComponent;
  let fixture: ComponentFixture<PageCreationAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCreationAgenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCreationAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
