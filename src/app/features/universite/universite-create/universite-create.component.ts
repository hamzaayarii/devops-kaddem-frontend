import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UniversiteService } from 'src/app/core/services/api/universite.service';
import { Universite } from 'src/app/shared/models/universite.model';

@Component({
  selector: 'app-universite-create',
  templateUrl: './universite-create.component.html',
  styleUrls: ['./universite-create.component.css']
})
export class UniversiteCreateComponent implements OnInit {
  universiteForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private universiteService: UniversiteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.universiteForm = this.fb.group({
      nomUniv: ['', [Validators.required, Validators.minLength(3)]],
      //departements: this.fb.array([])
    });
  }

  onSubmit(): void {
    if (this.universiteForm.invalid) {
      this.markFormGroupTouched(this.universiteForm);
      return;
    }

    const universiteData: Universite = {
      idUniv: 0, // Default or generate as needed
      nomUniv: this.universiteForm.get('nomUniv')?.value,
      departements: [] // Initialize with empty array or as needed
    };

    this.universiteService.addUniversite(universiteData).subscribe({
      next: (response) => {
        console.log('Universite added successfully', response);
        this.router.navigate(['/home/universite']);
      },
      error: (error) => {
        console.error('Error adding universite', error);
      }
    });
  }

  // Utility method to mark all controls as touched
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Convenience getters for form validation
  get nomUniv() {
    return this.universiteForm.get('nomUniv');
  }

  // Check if a form control is invalid
  isInvalid(controlName: string): boolean {
    const control = this.universiteForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onReset(): void {
    this.universiteForm.reset();
  }
}
