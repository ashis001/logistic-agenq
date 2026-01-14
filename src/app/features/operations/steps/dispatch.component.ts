import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { OperationsStateService } from '../../../core/services/operations-state.service';

@Component({
  selector: 'app-dispatch',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div *ngIf="!dispatched" class="space-y-8 animate-in fade-in">
      <!-- Header -->
      <div class="flex items-center gap-4 mb-4">
        <div class="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <div>
          <h2 class="text-xl font-bold text-slate-900">Review & Dispatch</h2>
          <p class="text-slate-500 text-sm">Final review before shipment initiation</p>
        </div>
      </div>

      <!-- Summary Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
         
         <!-- Shipment Details Check -->
         <div class="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
            <h3 class="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <div class="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                Shipment Details
            </h3>
            <div class="space-y-3 text-sm">
                <div class="flex justify-between">
                    <span class="text-slate-500">Client</span>
                    <span class="font-medium text-slate-900">{{state.intake?.clientName || 'N/A'}}</span>
                </div>
                 <div class="flex justify-between">
                    <span class="text-slate-500">Route</span>
                    <span class="font-medium text-slate-900">{{getRouteLabel(state.route?.selectedRoute)}}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-slate-500">Carrier</span>
                    <span class="font-medium text-slate-900">{{getCarrierName(state.carrier?.selectedCarrierId)}}</span>
                </div>
            </div>
         </div>

         <!-- Compliance Check -->
         <div class="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
            <h3 class="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <div class="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                Compliance & Docs
            </h3>
            <div class="space-y-3 text-sm">
                <div class="flex justify-between">
                    <span class="text-slate-500">Docs Uploaded</span>
                    <span class="font-medium text-slate-900">2 / 2</span>
                </div>
                 <div class="flex justify-between">
                    <span class="text-slate-500">HazMat Status</span>
                    <span class="font-medium text-slate-900 capitalize">{{state.classification?.hazardType || 'None'}}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-slate-500">Validation</span>
                    <span class="text-green-600 font-bold">Passed</span>
                </div>
            </div>
         </div>

      </div>

      <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-4">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-600 flex-shrink-0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
         <div>
            <h4 class="font-bold text-amber-800 text-sm">Ready for Dispatch</h4>
            <p class="text-xs text-amber-700 mt-1">By clicking "Dispatch Shipment", you confirm all details are accurate. This action will generate the final waybill and notify the carrier.</p>
         </div>
      </div>

      <div class="flex justify-end pt-6 border-t border-slate-100 gap-4">
          <button class="px-6 py-3 text-slate-500 font-medium hover:text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">Save as Draft</button>
          <button (click)="onDispatch()" class="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg flex items-center gap-2 transition-all shadow-lg shadow-green-500/20 active:scale-95">
            Dispatch Shipment 🚀
          </button>
      </div>
    </div>


    <!-- Success State -->
    <div *ngIf="dispatched" class="flex flex-col items-center justify-center min-h-[400px] animate-in fade-in zoom-in duration-500 text-center">
        <div class="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6 shadow-xl shadow-green-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h2 class="text-3xl font-bold text-slate-900 mb-2">Shipment Dispatched!</h2>
        <p class="text-slate-500 max-w-md mx-auto mb-8">Your order has been successfully processed and sent to the carrier. Tracking ID has been activated.</p>
        
        <div class="flex gap-4">
            <button routerLink="/dashboard" class="bg-white border border-slate-200 text-slate-700 font-semibold px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
                Return to Dashboard
            </button>
             <button (click)="resetForm()" class="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                Create Another Shipment
            </button>
        </div>
    </div>
  `
})
export class DispatchComponent implements OnInit {
  state: any = {};
  dispatched = false;

  constructor(private opsService: OperationsStateService, private router: Router) { }

  ngOnInit() {
    this.opsService.getState().subscribe(state => {
      this.state = state;
    });
  }

  getRouteLabel(route: string): string {
    const routes: { [key: string]: string } = { 'air': 'Air Freight', 'sea': 'Sea Freight', 'land': 'Land Transport', 'rail': 'Rail Freight' };
    return routes[route] || 'Not Selected';
  }

  getCarrierName(id: string): string {
    const carriers: { [key: string]: string } = { 'c1': 'Maersk Line', 'c2': 'DHL Global', 'c3': 'MSC Shipping' };
    return carriers[id] || 'Not Selected';
  }

  onDispatch() {
    this.opsService.updateDispatch({ dispatched: true, timestamp: new Date() });

    // Simulate loading
    setTimeout(() => {
      this.dispatched = true;
    }, 500);
  }

  resetForm() {
    // In a real app we would reset the service, here we'll just reload to reset state or navigate
    window.location.reload();
  }
}
