import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementUpdateComponent } from './departement-update.component';

describe('DepartementUpdateComponent', () => {
  let component: DepartementUpdateComponent;
  let fixture: ComponentFixture<DepartementUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartementUpdateComponent]
    });
    fixture = TestBed.createComponent(DepartementUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
