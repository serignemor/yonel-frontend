import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreationClientComponent } from './page-creation-client.component';

describe('PageCreationClientComponent', () => {
  let component: PageCreationClientComponent;
  let fixture: ComponentFixture<PageCreationClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCreationClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCreationClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
