import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { OperationsStateService } from '../../../core/services/operations-state.service';

@Component({
  selector: 'app-shipment-intake',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div>
      <!-- Header -->
      <div class="flex items-center gap-4 mb-8">
        <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-blue-200">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/><line x1="3.27 6.96" x2="12" y2="12.01"/><line x1="20.73 6.96" x2="12" y2="12.01"/></svg>
        </div>
        <div>
          <h2 class="text-xl font-bold text-slate-900">Shipment Intake</h2>
          <p class="text-slate-500 text-sm">Enter shipment details and locations</p>
        </div>
      </div>

      <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-6">
        
        <!-- Row 1: Client Name & Cargo Type -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-bold text-slate-700 mb-2">Client Name <span class="text-slate-400">*</span></label>
            <input formControlName="clientName" type="text" 
                   class="w-full bg-white border border-slate-300 shadow-sm rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400 text-slate-700 font-medium" 
                   placeholder="e.g. Acme Corporation">
          </div>

          <div>
            <label class="block text-sm font-bold text-slate-700 mb-2">Cargo Type <span class="text-slate-400">*</span></label>
            <div class="relative">
              <select formControlName="cargoType" 
                    class="w-full bg-white border border-slate-300 shadow-sm rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 text-slate-700 font-medium appearance-none cursor-pointer">
                <option value="" disabled selected>Select type</option>
                <option value="general">General Merchandise</option>
                <option value="electronics">Electronics</option>
                <option value="perishable">Perishable Goods</option>
                <option value="raw_materials">Raw Materials</option>
              </select>
              <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Row 2: Weight & Volume -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div>
            <label class="block text-sm font-bold text-slate-700 mb-2">Weight <span class="text-slate-400">*</span></label>
            <div class="flex gap-2">
              <input formControlName="weight" type="number" 
                     class="flex-1 bg-white border border-slate-300 shadow-sm rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400 text-slate-700 font-medium" 
                     placeholder="0">
              <div class="w-24 bg-slate-50 border border-slate-300 shadow-sm rounded-lg flex items-center px-3 relative">
                 <span class="text-sm font-medium text-slate-700">kg</span>
                 <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                 </div>
              </div>
            </div>
          </div>

          <div>
            <label class="block text-sm font-bold text-slate-700 mb-2">Volume <span class="text-slate-400">*</span></label>
            <div class="flex gap-2">
              <input formControlName="volume" type="number" 
                     class="flex-1 bg-white border border-slate-300 shadow-sm rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400 text-slate-700 font-medium" 
                     placeholder="0">
              <div class="w-24 bg-slate-50 border border-slate-300 shadow-sm rounded-lg flex items-center px-3 relative">
                 <span class="text-sm font-medium text-slate-700">CBM</span>
                 <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                 </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Origin Location -->
        <div class="bg-[#F8FAFC] p-6 rounded-xl border border-slate-100">
          <div class="flex items-center gap-2 mb-4">
             <div class="w-2 h-2 rounded-full bg-blue-500 ring-4 ring-blue-100"></div>
             <h3 class="text-sm font-bold text-slate-900">Origin Location</h3>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="md:col-span-2">
              <input formControlName="pickupLocation" type="text" class="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 text-sm" placeholder="Street address">
            </div>
            <div>
              <input type="text" class="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 text-sm" placeholder="City">
            </div>
            <div>
              <input type="text" class="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 text-sm" placeholder="Country">
            </div>
          </div>
        </div>

        <!-- Destination Location -->
        <div class="bg-[#F8FAFC] p-6 rounded-xl border border-slate-100">
          <div class="flex items-center gap-2 mb-4">
             <div class="w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-100"></div>
             <h3 class="text-sm font-bold text-slate-900">Destination Location</h3>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="md:col-span-2">
              <input formControlName="destination" type="text" class="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 text-sm" placeholder="Street address">
            </div>
            <div>
              <input type="text" class="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 text-sm" placeholder="City">
            </div>
             <div>
              <input type="text" class="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 text-sm" placeholder="Country">
            </div>
          </div>
        </div>
        
        <!-- Row 3: Date & Notes -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div>
             <label class="block text-sm font-bold text-slate-700 mb-2">Preferred Pickup Date <span class="text-slate-400">*</span></label>
             <input type="date" class="w-full bg-white border border-slate-300 shadow-sm rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 text-slate-700 font-medium">
           </div>
           <div>
             <label class="block text-sm font-bold text-slate-700 mb-2">Additional Notes</label>
             <input type="text" class="w-full bg-white border border-slate-300 shadow-sm rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400 text-slate-700 font-medium" placeholder="Special instructions...">
           </div>
        </div>

        <div class="flex justify-end pt-6">
          <button type="submit" [disabled]="form.invalid" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed">
            Continue to Classification 
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>

      </form>
    </div>
  `
})
export class ShipmentIntakeComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private opsService: OperationsStateService) {
    this.form = this.fb.group({
      clientName: ['', Validators.required],
      cargoType: ['', Validators.required],
      weight: [null, [Validators.required, Validators.min(0.1)]],
      volume: [null, [Validators.required, Validators.min(0.1)]],
      pickupLocation: ['', Validators.required],
      destination: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.opsService.getState().subscribe(state => {
      if (state.intake && this.form.pristine) {
        this.form.patchValue(state.intake);
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.opsService.updateIntake(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
