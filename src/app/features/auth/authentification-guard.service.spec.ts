import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AuthentificationGuardService } from './authentification-guard.service';

describe('AuthentificationGuardService', () => {
  let service: AuthentificationGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AuthentificationGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
