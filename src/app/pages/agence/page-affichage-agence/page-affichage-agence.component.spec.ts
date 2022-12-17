import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAffichageAgenceComponent } from './page-affichage-agence.component';

describe('PageAffichageAgenceComponent', () => {
  let component: PageAffichageAgenceComponent;
  let fixture: ComponentFixture<PageAffichageAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAffichageAgenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAffichageAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
