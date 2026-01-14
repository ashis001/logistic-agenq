import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { OperationsStateService } from '../../../core/services/operations-state.service';

@Component({
  selector: 'app-route-planning',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div>
      <!-- Header -->
      <div class="flex items-center gap-4 mb-8">
        <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
        </div>
        <div>
          <h2 class="text-xl font-bold text-slate-900">Route Planning</h2>
          <p class="text-slate-500 text-sm">Select optimal transit route based on constraints</p>
        </div>
      </div>

       <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-6">
        
        <!-- Map View Placeholder -->
        <div class="w-full h-48 bg-slate-100 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300 mb-6 group cursor-pointer hover:bg-slate-50 transition-colors">
            <div class="text-center">
                 <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-400 shadow-sm mx-auto mb-3 group-hover:text-blue-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                 </div>
                 <p class="text-sm font-semibold text-slate-500">Interactive Map Preview</p>
                 <p class="text-xs text-slate-400">Click to expand route visualization</p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Air Freight -->
            <label class="cursor-pointer relative group">
              <input type="radio" value="air" formControlName="selectedRoute" class="peer sr-only">
              <div class="p-6 rounded-2xl border-2 border-slate-100 bg-white peer-checked:border-blue-500 peer-checked:bg-blue-50/30 hover:border-slate-200 transition-all">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                  </div>
                  <span class="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded-md">Fastest</span>
                </div>
                <h3 class="font-bold text-slate-900 mb-1">Air Freight</h3>
                <p class="text-xs text-slate-500 mb-4">Express delivery via cargo aircraft</p>
                <div class="flex justify-between text-sm border-t border-slate-100 pt-3">
                  <span class="text-slate-500">Transit: <span class="font-semibold text-slate-700">1-3 Days</span></span>
                  <span class="font-bold text-slate-900">$2,450</span>
                </div>
              </div>
              <div class="absolute top-4 right-4 text-blue-500 opacity-0 peer-checked:opacity-100 transition-opacity">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </div>
            </label>

            <!-- Sea Freight -->
            <label class="cursor-pointer relative group">
              <input type="radio" value="sea" formControlName="selectedRoute" class="peer sr-only">
              <div class="p-6 rounded-2xl border-2 border-slate-100 bg-white peer-checked:border-blue-500 peer-checked:bg-blue-50/30 hover:border-slate-200 transition-all">
                 <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22h20"/><path d="M2 13h20"/><path d="M4 8h16l-2-6H6z"/><circle cx="8" cy="18" r="2"/><circle cx="16" cy="18" r="2"/></svg>
                  </div>
                  <span class="text-xs font-bold bg-teal-100 text-teal-700 px-2 py-1 rounded-md">Eco-Saver</span>
                </div>
                <h3 class="font-bold text-slate-900 mb-1">Sea Freight</h3>
                <p class="text-xs text-slate-500 mb-4">Cost-effective shipping via ocean</p>
                <div class="flex justify-between text-sm border-t border-slate-100 pt-3">
                  <span class="text-slate-500">Transit: <span class="font-semibold text-slate-700">25-30 Days</span></span>
                  <span class="font-bold text-slate-900">$850</span>
                </div>
              </div>
              <div class="absolute top-4 right-4 text-blue-500 opacity-0 peer-checked:opacity-100 transition-opacity">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </div>
            </label>

            <!-- Land Freight -->
            <label class="cursor-pointer relative group">
              <input type="radio" value="land" formControlName="selectedRoute" class="peer sr-only">
              <div class="p-6 rounded-2xl border-2 border-slate-100 bg-white peer-checked:border-blue-500 peer-checked:bg-blue-50/30 hover:border-slate-200 transition-all">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                  </div>
                </div>
                <h3 class="font-bold text-slate-900 mb-1">Land Freight</h3>
                <p class="text-xs text-slate-500 mb-4">Regional trucking transport</p>
                <div class="flex justify-between text-sm border-t border-slate-100 pt-3">
                  <span class="text-slate-500">Transit: <span class="font-semibold text-slate-700">5-7 Days</span></span>
                  <span class="font-bold text-slate-900">$1,200</span>
                </div>
              </div>
              <div class="absolute top-4 right-4 text-blue-500 opacity-0 peer-checked:opacity-100 transition-opacity">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </div>
            </label>

             <!-- Rail Freight -->
            <label class="cursor-pointer relative group">
              <input type="radio" value="rail" formControlName="selectedRoute" class="peer sr-only">
              <div class="p-6 rounded-2xl border-2 border-slate-100 bg-white peer-checked:border-blue-500 peer-checked:bg-blue-50/30 hover:border-slate-200 transition-all">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="16" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m16 19 2 3"/></svg>
                  </div>
                </div>
                <h3 class="font-bold text-slate-900 mb-1">Rail Freight</h3>
                <p class="text-xs text-slate-500 mb-4">Intermodal rail transport</p>
                <div class="flex justify-between text-sm border-t border-slate-100 pt-3">
                  <span class="text-slate-500">Transit: <span class="font-semibold text-slate-700">10-15 Days</span></span>
                  <span class="font-bold text-slate-900">$1,050</span>
                </div>
              </div>
              <div class="absolute top-4 right-4 text-blue-500 opacity-0 peer-checked:opacity-100 transition-opacity">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </div>
            </label>
        </div>

        <div class="flex justify-end pt-6 border-t border-slate-100">
          <button type="submit" [disabled]="form.invalid" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed">
            Continue to Carrier Selection
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>

      </form>
    </div>
  `
})
export class RoutePlanningComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private opsService: OperationsStateService) {
    this.form = this.fb.group({
      selectedRoute: ['', Validators.required],
      estimatedDuration: [''],
      estimatedCost: ['']
    });
  }

  ngOnInit() {
    this.opsService.getState().subscribe(state => {
      if (state.route && this.form.pristine) {
        this.form.patchValue(state.route);
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      if (!this.form.value.estimatedDuration) {
        // Mock additional data
        if (this.form.value.selectedRoute === 'air') {
          this.form.patchValue({ estimatedDuration: 3, estimatedCost: 2450 });
        } else if (this.form.value.selectedRoute === 'sea') {
          this.form.patchValue({ estimatedDuration: 28, estimatedCost: 850 });
        } else {
          this.form.patchValue({ estimatedDuration: 7, estimatedCost: 1200 });
        }
      }
      this.opsService.updateRoute(this.form.value);
    }
  }
}
