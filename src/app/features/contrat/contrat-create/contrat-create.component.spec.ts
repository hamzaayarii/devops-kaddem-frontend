import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratCreateComponent } from './contrat-create.component';

describe('ContratCreateComponent', () => {
  let component: ContratCreateComponent;
  let fixture: ComponentFixture<ContratCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContratCreateComponent]
    });
    fixture = TestBed.createComponent(ContratCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
