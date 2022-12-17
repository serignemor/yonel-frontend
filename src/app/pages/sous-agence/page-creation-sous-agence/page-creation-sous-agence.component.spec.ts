import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreationSousAgenceComponent } from './page-creation-sous-agence.component';

describe('PageCreationSousAgenceComponent', () => {
  let component: PageCreationSousAgenceComponent;
  let fixture: ComponentFixture<PageCreationSousAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCreationSousAgenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCreationSousAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
