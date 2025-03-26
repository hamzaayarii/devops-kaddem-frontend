import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UniversiteCreateComponent } from './universite-create.component';

describe('UniversiteCreateComponent', () => {
  let component: UniversiteCreateComponent;
  let fixture: ComponentFixture<UniversiteCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule],
      declarations: [UniversiteCreateComponent]
    });
    fixture = TestBed.createComponent(UniversiteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
