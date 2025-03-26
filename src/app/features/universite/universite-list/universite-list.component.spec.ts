import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UniversiteListComponent } from './universite-list.component';
import { StatComponent } from '../stat/stat.component';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('UniversiteListComponent', () => {
  let component: UniversiteListComponent;
  let fixture: ComponentFixture<UniversiteListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
      declarations: [UniversiteListComponent, StatComponent, FilterPipe]
    });
    fixture = TestBed.createComponent(UniversiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
