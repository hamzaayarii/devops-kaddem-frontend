import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantUpdateComponent } from './etudiant-update.component';

describe('EtudiantUpdateComponent', () => {
  let component: EtudiantUpdateComponent;
  let fixture: ComponentFixture<EtudiantUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudiantUpdateComponent]
    });
    fixture = TestBed.createComponent(EtudiantUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
