import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeUpdateComponent } from './equipe-update.component';

describe('EquipeUpdateComponent', () => {
  let component: EquipeUpdateComponent;
  let fixture: ComponentFixture<EquipeUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipeUpdateComponent]
    });
    fixture = TestBed.createComponent(EquipeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
