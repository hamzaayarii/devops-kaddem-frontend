import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { StatComponent } from './stat.component';

describe('StatComponent', () => {
  let component: StatComponent;
  let fixture: ComponentFixture<StatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [StatComponent]
    });
    fixture = TestBed.createComponent(StatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
