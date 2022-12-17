import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModificationAgenceComponent } from './page-modification-agence.component';

describe('PageModificationAgenceComponent', () => {
  let component: PageModificationAgenceComponent;
  let fixture: ComponentFixture<PageModificationAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModificationAgenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageModificationAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
