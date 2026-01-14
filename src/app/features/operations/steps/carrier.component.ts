import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { OperationsStateService } from '../../../core/services/operations-state.service';

interface Carrier {
  id: string;
  name: string;
  price: number;
  time: string;
  rating: number;
  logo: string;
}

@Component({
  selector: 'app-carrier-selection',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div>
      <!-- Header -->
      <div class="flex items-center gap-4 mb-8">
        <div class="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 shadow-sm">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
        </div>
        <div>
          <h2 class="text-xl font-bold text-slate-900">Carrier Selection</h2>
          <p class="text-slate-500 text-sm">Choose a carrier for your shipment</p>
        </div>
      </div>

       <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-6">
        
        <div *ngIf="loading" class="flex flex-col items-center justify-center h-64">
           <div class="w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin mb-4"></div>
           <p class="text-slate-500 font-medium">Fetching available carriers...</p>
        </div>

        <div *ngIf="!loading" class="grid grid-cols-1 gap-4">
           
           <div *ngFor="let carrier of carriers" 
                (click)="selectCarrier(carrier.id)"
                [class.border-blue-500]="form.value.selectedCarrierId === carrier.id"
                [class.bg-blue-50]="form.value.selectedCarrierId === carrier.id"
                [class.bg-white]="form.value.selectedCarrierId !== carrier.id"
                class="relative border-2 border-slate-100 rounded-2xl p-6 cursor-pointer hover:border-blue-300 transition-all flex items-center justify-between group">
             
             <div class="flex items-center gap-6">
                <!-- Placeholder Logo -->
               <div class="w-16 h-16 bg-white rounded-lg border border-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">
                 {{carrier.name.substring(0,2).toUpperCase()}}
               </div>
               
               <div>
                  <h3 class="font-bold text-slate-900 text-lg">{{carrier.name}}</h3>
                  <div class="flex items-center gap-4 text-sm text-slate-500 mt-1">
                     <span class="flex items-center gap-1">
                       <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                       {{carrier.time}}
                     </span>
                     <span class="flex items-center gap-1 text-amber-500 font-medium">
                       <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                       {{carrier.rating}}
                     </span>
                  </div>
               </div>
             </div>

             <div class="text-right">
                <p class="text-lg font-bold text-slate-900">\${{carrier.price}}</p>
                
                <div class="mt-2" [ngSwitch]="form.value.selectedCarrierId === carrier.id">
                   <span *ngSwitchCase="true" class="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full inline-flex items-center gap-1">
                     <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Selected
                   </span>
                   <span *ngSwitchDefault class="text-blue-600 font-medium text-sm group-hover:underline">Select</span>
                </div>
             </div>

           </div>

        </div>

        <div class="flex justify-end pt-6 border-t border-slate-100">
          <button type="submit" [disabled]="form.invalid" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed">
            Continue to Documentation
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>

      </form>
    </div>
  `
})
export class CarrierSelectionComponent implements OnInit {
  form: FormGroup;
  loading = true;
  carriers: Carrier[] = [];

  constructor(private fb: FormBuilder, private opsService: OperationsStateService) {
    this.form = this.fb.group({
      selectedCarrierId: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.opsService.getState().subscribe(state => {
      if (state.carrier && this.form.pristine) {
        this.form.patchValue(state.carrier);
      }
    });

    // Direct data assignment without simulated delay
    this.carriers = [
      { id: 'c1', name: 'Maersk Line', price: 1250, time: '20 Days', rating: 4.8, logo: '' },
      { id: 'c2', name: 'DHL Global Forwarding', price: 1400, time: '18 Days', rating: 4.9, logo: '' },
      { id: 'c3', name: 'MSC Shipping', price: 1100, time: '24 Days', rating: 4.5, logo: '' },
    ];
    this.loading = false;
  }

  selectCarrier(id: string) {
    this.form.patchValue({ selectedCarrierId: id });
  }

  onSubmit() {
    if (this.form.valid) {
      this.opsService.updateCarrier(this.form.value);
    }
  }
}
