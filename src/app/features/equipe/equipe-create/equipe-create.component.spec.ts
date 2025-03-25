import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeCreateComponent } from './equipe-create.component';

describe('EquipeCreateComponent', () => {
  let component: EquipeCreateComponent;
  let fixture: ComponentFixture<EquipeCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipeCreateComponent]
    });
    fixture = TestBed.createComponent(EquipeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
