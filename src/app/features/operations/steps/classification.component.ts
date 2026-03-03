import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { OperationsStateService } from '../../../core/services/operations-state.service';

@Component({
  selector: 'app-cargo-classification',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div>
      <!-- Header -->
      <div class="flex items-center gap-4 mb-8">
        <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </div>
        <div>
          <h2 class="text-xl font-bold text-slate-900">Cargo Classification</h2>
          <p class="text-slate-500 text-sm">Define hazard levels and handling requirements</p>
        </div>
      </div>

      <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-8">
        
        <!-- Hazard Type Section -->
        <div>
          <label class="block text-sm font-bold text-slate-700 mb-4">Hazard Classification <span class="text-slate-400">*</span></label>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            <label class="cursor-pointer relative group">
              <input type="radio" value="none" formControlName="hazardType" class="peer sr-only">
              <div class="p-4 rounded-xl border-2 border-slate-100 bg-white peer-checked:border-emerald-500 peer-checked:bg-emerald-50/50 hover:border-slate-200 transition-all flex flex-col items-center gap-3 h-full justify-center">
                <span class="text-3xl filter grayscale peer-checked:grayscale-0 transition-all">📦</span>
                <span class="font-bold text-sm text-slate-700 peer-checked:text-emerald-700">None</span>
              </div>
              <div class="absolute top-2 right-2 opacity-0 peer-checked:opacity-100 text-emerald-500 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </div>
            </label>

            <label class="cursor-pointer relative group">
              <input type="radio" value="chemical" formControlName="hazardType" class="peer sr-only">
              <div class="p-4 rounded-xl border-2 border-slate-100 bg-white peer-checked:border-amber-500 peer-checked:bg-amber-50/50 hover:border-slate-200 transition-all flex flex-col items-center gap-3 h-full justify-center">
                <span class="text-3xl filter grayscale peer-checked:grayscale-0 transition-all">🧪</span>
                <span class="font-bold text-sm text-slate-700 peer-checked:text-amber-700">Chemical</span>
              </div>
               <div class="absolute top-2 right-2 opacity-0 peer-checked:opacity-100 text-amber-500 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </div>
            </label>

            <label class="cursor-pointer relative group">
              <input type="radio" value="biological" formControlName="hazardType" class="peer sr-only">
              <div class="p-4 rounded-xl border-2 border-slate-100 bg-white peer-checked:border-red-500 peer-checked:bg-red-50/50 hover:border-slate-200 transition-all flex flex-col items-center gap-3 h-full justify-center">
                <span class="text-3xl filter grayscale peer-checked:grayscale-0 transition-all">☣️</span>
                <span class="font-bold text-sm text-slate-700 peer-checked:text-red-700">Biological</span>
              </div>
               <div class="absolute top-2 right-2 opacity-0 peer-checked:opacity-100 text-red-500 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </div>
            </label>

            <label class="cursor-pointer relative group">
              <input type="radio" value="radioactive" formControlName="hazardType" class="peer sr-only">
              <div class="p-4 rounded-xl border-2 border-slate-100 bg-white peer-checked:border-purple-500 peer-checked:bg-purple-50/50 hover:border-slate-200 transition-all flex flex-col items-center gap-3 h-full justify-center">
                <span class="text-3xl filter grayscale peer-checked:grayscale-0 transition-all">☢️</span>
                <span class="font-bold text-sm text-slate-700 peer-checked:text-purple-700">Radioactive</span>
              </div>
               <div class="absolute top-2 right-2 opacity-0 peer-checked:opacity-100 text-purple-500 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </div>
            </label>

          </div>
        </div>

        <!-- Handling Conditions -->
        <div>
          <label class="block text-sm font-bold text-slate-700 mb-4">Handling Conditions</label>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label class="flex items-start space-x-3 cursor-pointer p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors bg-white">
              <input type="checkbox" formControlName="isFragile" class="mt-1 w-5 h-5 text-blue-600 rounded border-slate-300 focus:ring-blue-500">
              <div class="flex flex-col">
                <span class="font-bold text-slate-800 text-sm">Fragile Cargo</span>
                <span class="text-xs text-slate-500 mt-0.5">Requires careful handling and shock monitoring</span>
              </div>
            </label>

            <label class="flex items-start space-x-3 cursor-pointer p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors bg-white">
              <input type="checkbox" formControlName="isPerishable" class="mt-1 w-5 h-5 text-blue-600 rounded border-slate-300 focus:ring-blue-500">
              <div class="flex flex-col">
                <span class="font-bold text-slate-800 text-sm">Perishable Goods</span>
                <span class="text-xs text-slate-500 mt-0.5">Requires continuous temperature control</span>
              </div>
            </label>
          </div>
        </div>

        <!-- Multi-select Dropdown for Handling Requirements -->
        <div class="relative dropdown-container">
          <label class="block text-xs font-bold text-slate-700 mb-1.5">Required Certifications & Permits</label>
          <div (click)="toggleDropdown()" 
               class="w-full bg-white border border-slate-300 shadow-sm rounded-lg px-3 py-2 cursor-pointer flex items-center justify-between hover:border-blue-400 transition-all min-h-[40px]">
            <div class="flex flex-wrap gap-1.5">
              <span *ngIf="form.value.handlingRequirements.length === 0" class="text-slate-400 text-xs font-medium">Select documents...</span>
              <div *ngFor="let req of form.value.handlingRequirements" 
                   class="bg-blue-100 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 animate-in zoom-in-95 duration-200">
                {{req}}
                <svg (click)="removeRequirement(req); $event.stopPropagation()" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="hover:text-blue-900"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                 class="text-slate-400 transition-transform duration-200" [class.rotate-180]="isDropdownOpen"><polyline points="6 9 12 15 18 9"/></svg>
          </div>

          <!-- Dropdown Menu -->
          <div *ngIf="isDropdownOpen" 
               class="absolute z-10 w-full mt-1 bg-white border border-slate-200 shadow-xl rounded-lg overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200">
            <!-- Search Input -->
            <div class="p-1.5 border-b border-slate-100 bg-slate-50/50">
              <input type="text" 
                     (click)="$event.stopPropagation()"
                     (input)="onSearch($event)" 
                     class="w-full bg-white border border-slate-200 rounded px-2 py-1.5 text-xs focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none placeholder:text-slate-400"
                     placeholder="Search...">
            </div>
            
            <div class="max-h-40 overflow-y-auto">
              <div *ngFor="let option of filteredRequirements" 
                   (click)="toggleRequirement(option); $event.stopPropagation()"
                   class="px-3 py-2 hover:bg-slate-50 cursor-pointer flex items-center justify-between border-b border-slate-50 last:border-0">
                <span class="text-xs font-medium" [class.text-blue-600]="isSelected(option)">{{option}}</span>
                <svg *ngIf="isSelected(option)" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div *ngIf="filteredRequirements.length === 0" class="px-3 py-4 text-center text-slate-400 text-[10px]">
                No results
              </div>
            </div>
          </div>
        </div>

        <!-- Special Instructions -->
        <div>
          <label class="block text-sm font-bold text-slate-700 mb-2">Special Handling Instructions (Optional)</label>
          <textarea class="w-full bg-white border border-slate-300 shadow-sm rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400 text-slate-700 font-medium min-h-[120px]" placeholder="Enter specific storage or handling requirements..."></textarea>
        </div>

        <div class="flex justify-end pt-6 border-t border-slate-100">
          <button type="submit" [disabled]="form.invalid" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed">
            Continue to Route Planning
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>

      </form>
    </div>
  `
})
export class CargoClassificationComponent implements OnInit {
  form: FormGroup;
  isDropdownOpen = false;
  searchQuery = '';
  availableRequirements = [
    'MSDS (Material Safety Data Sheet)',
    'DG Declaration',
    'Phytosanitary Certificate',
    'Customs Import Permit',
    'Certificate of Origin',
    'Insurance Cover Note',
    'FDA Registry Confirmation'
  ];

  get filteredRequirements() {
    return this.availableRequirements.filter(option =>
      option.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.eRef.nativeElement.querySelector('.dropdown-container')?.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }

  constructor(
    private fb: FormBuilder,
    private opsService: OperationsStateService,
    private eRef: ElementRef
  ) {
    this.form = this.fb.group({
      hazardType: ['none', Validators.required],
      isFragile: [false],
      isPerishable: [false],
      handlingRequirements: [[]]
    });
  }

  ngOnInit() {
    this.opsService.getState().subscribe(state => {
      if (state.classification && this.form.pristine) {
        this.form.patchValue(state.classification);
      }
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    if (this.isDropdownOpen) {
      this.searchQuery = '';
    }
  }

  onSearch(event: any) {
    this.searchQuery = event.target.value;
  }

  toggleRequirement(req: string) {
    const current = this.form.value.handlingRequirements as string[];
    if (current.includes(req)) {
      this.removeRequirement(req);
    } else {
      this.form.patchValue({
        handlingRequirements: [...current, req]
      });
    }
  }

  removeRequirement(req: string) {
    const current = this.form.value.handlingRequirements as string[];
    this.form.patchValue({
      handlingRequirements: current.filter(r => r !== req)
    });
  }

  isSelected(req: string): boolean {
    return this.form.value.handlingRequirements.includes(req);
  }

  onSubmit() {
    if (this.form.valid) {
      this.opsService.updateClassification(this.form.value);
    }
  }
}
