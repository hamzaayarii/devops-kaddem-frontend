import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantCreateComponent } from './etudiant-create.component';

describe('EtudiantCreateComponent', () => {
  let component: EtudiantCreateComponent;
  let fixture: ComponentFixture<EtudiantCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudiantCreateComponent]
    });
    fixture = TestBed.createComponent(EtudiantCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
