import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsStateService } from '../../../core/services/operations-state.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <!-- Header -->
      <div class="flex items-center gap-4 mb-8">
        <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <div>
          <h2 class="text-xl font-bold text-slate-900">Cost & Pricing</h2>
          <p class="text-slate-500 text-sm">Review shipment cost breakdown</p>
        </div>
      </div>

      <div class="space-y-6">

        <!-- Main Cost Summary Card -->
        <div class="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
           <div class="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
           
           <h3 class="text-slate-400 font-medium mb-1 text-sm uppercase tracking-wide">Total Estimated Cost</h3>
           <div class="flex items-baseline gap-2 mb-6">
             <span class="text-5xl font-bold tracking-tight">\${{totalCost | number:'1.2-2'}}</span>
             <span class="text-slate-400 font-medium">USD</span>
           </div>

           <div class="border-t border-slate-700/50 pt-6 grid grid-cols-3 gap-8">
              <div>
                <span class="block text-slate-400 text-xs mb-1">Base Freight</span>
                <span class="font-bold text-lg">\${{baseFreight | number:'1.2-2'}}</span>
              </div>
              <div>
                <span class="block text-slate-400 text-xs mb-1">Taxes & Duties</span>
                <span class="font-bold text-lg">\${{tax | number:'1.2-2'}}</span>
              </div>
               <div>
                <span class="block text-slate-400 text-xs mb-1">Insurance</span>
                <span class="font-bold text-lg">\${{insurance | number:'1.2-2'}}</span>
              </div>
           </div>
        </div>

        <!-- Detailed Breakdown -->
        <div class="bg-white border border-slate-200 rounded-2xl p-6">
           <h3 class="font-bold text-slate-900 mb-4 flex items-center gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-400"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
             Itemized Breakdown
           </h3>

           <div class="space-y-3">
              <div class="flex justify-between items-center text-sm p-2 hover:bg-slate-50 rounded-lg transition-colors">
                 <span class="text-slate-600">Freight Charges (Volume Based)</span>
                 <span class="font-bold text-slate-900">\${{baseFreight}}</span>
              </div>
              <div class="flex justify-between items-center text-sm p-2 hover:bg-slate-50 rounded-lg transition-colors">
                 <span class="text-slate-600">Fuel Surcharge (12%)</span>
                 <span class="font-bold text-slate-900">\${{fuelSurcharge}}</span>
              </div>
              <div class="flex justify-between items-center text-sm p-2 hover:bg-slate-50 rounded-lg transition-colors">
                 <span class="text-slate-600">Customs Handling Fee</span>
                 <span class="font-bold text-slate-900">$150.00</span>
              </div>
              <div class="flex justify-between items-center text-sm p-2 hover:bg-slate-50 rounded-lg transition-colors border-t border-slate-100 mt-2 pt-3">
                 <span class="text-slate-800 font-bold">Subtotal</span>
                 <span class="font-bold text-slate-900">\${{subtotal}}</span>
              </div>
           </div>
        </div>

        <div class="flex justify-end pt-6 border-t border-slate-100">
          <button (click)="onConfirm()" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20">
            Confirm Pricing & Continue
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>

      </div>
    </div>
  `
})
export class PricingComponent implements OnInit {
  baseFreight = 1200;
  fuelSurcharge = 144;
  tax = 180;
  insurance = 250;

  get subtotal() { return this.baseFreight + this.fuelSurcharge + 150; }
  get totalCost() { return this.subtotal + this.tax + this.insurance; }

  constructor(private opsService: OperationsStateService) { }

  ngOnInit() {
    // In a real app, calculate based on previous steps data
    this.opsService.getState().subscribe(state => {
      if (state.route && state.route.estimatedCost) {
        this.baseFreight = state.route.estimatedCost;
        this.fuelSurcharge = this.baseFreight * 0.12;
      }
    });
  }

  onConfirm() {
    this.opsService.updatePricing({
      currency: 'USD',
      total: this.totalCost,
      breakdown: {}
    });
  }
}
