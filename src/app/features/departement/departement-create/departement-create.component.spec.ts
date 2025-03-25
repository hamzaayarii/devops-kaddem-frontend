import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementCreateComponent } from './departement-create.component';

describe('DepartementCreateComponent', () => {
  let component: DepartementCreateComponent;
  let fixture: ComponentFixture<DepartementCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartementCreateComponent]
    });
    fixture = TestBed.createComponent(DepartementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
