import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModifTransactionComponent } from './page-modif-transaction.component';

describe('PageModifTransactionComponent', () => {
  let component: PageModifTransactionComponent;
  let fixture: ComponentFixture<PageModifTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModifTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageModifTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
