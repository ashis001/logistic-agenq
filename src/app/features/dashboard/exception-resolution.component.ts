import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-exception-resolution',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      
      <!-- Modal Content -->
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden animate-in zoom-in-95 duration-300">
        
        <!-- Header -->
        <div class="bg-red-50 p-6 border-b border-red-100 flex justify-between items-start">
           <div>
              <div class="flex items-center gap-3 mb-2">
                 <span class="bg-red-100 text-red-700 font-bold text-xs uppercase px-2.5 py-1 rounded-full border border-red-200">Critical Exception</span>
                 <span class="text-slate-500 text-sm font-medium">Alert ID: E-9928</span>
              </div>
              <h2 class="text-2xl font-bold text-slate-900">Customs Clearance Hold</h2>
              <p class="text-slate-600 mt-1">Shipment #SHP-2024-8819 • Shanghai Port Authority</p>
           </div>
           <button (click)="close.emit()" class="text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-white/50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
           </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3">
           
           <!-- Context Panel -->
           <div class="p-8 bg-slate-50 border-r border-slate-100">
              <h3 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Impact Analysis</h3>
              
              <div class="space-y-6">
                 <div>
                    <span class="text-xs font-semibold text-slate-500 uppercase block mb-1">Root Cause</span>
                    <p class="text-slate-900 font-medium">Missing Commercial Invoice signature from origin supplier.</p>
                 </div>
                 
                 <div>
                    <span class="text-xs font-semibold text-slate-500 uppercase block mb-1">Operational Impact</span>
                    <ul class="space-y-2 mt-2">
                       <li class="flex items-center gap-2 text-red-600 text-sm font-medium">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                          +3 Days Delay Forecast
                       </li>
                       <li class="flex items-center gap-2 text-red-600 text-sm font-medium">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                          $450 Demurrage Risk
                       </li>
                    </ul>
                 </div>
              </div>

              <!-- AI Insight -->
              <div class="mt-8 bg-indigo-50 p-4 rounded-xl border border-indigo-100 relative overflow-hidden">
                 <div class="absolute -right-4 -top-4 w-16 h-16 bg-indigo-100 rounded-full blur-xl"></div>
                 <div class="flex items-start gap-3 relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600 flex-shrink-0 mt-0.5"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 11.5v.01"/></svg>
                    <div>
                       <h4 class="text-indigo-900 font-bold text-xs uppercase tracking-wide">AI Recommendation</h4>
                       <p class="text-indigo-800 text-sm mt-1 leading-snug">Based on historical data, expediting via air freight recovers the timeline but increases cost by 18%.</p>
                    </div>
                 </div>
              </div>
           </div>

           <!-- Resolution Options -->
           <div class="lg:col-span-2 p-8">
              <h3 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Select Resolution Strategy</h3>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                 
                 <!-- Option A -->
                 <div (click)="selectedOption = 'standard'" 
                      [class.ring-2]="selectedOption === 'standard'"
                      [class.ring-blue-600]="selectedOption === 'standard'"
                      class="border border-slate-200 rounded-xl p-5 cursor-pointer hover:bg-slate-50 transition-all relative group h-full flex flex-col">
                    <div class="flex justify-between items-start mb-4">
                       <span class="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded">Standard Fix</span>
                       <div *ngIf="selectedOption === 'standard'" class="text-blue-600">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                       </div>
                    </div>
                    <div>
                       <h4 class="font-bold text-slate-900">Wait & Resubmit</h4>
                       <p class="text-slate-500 text-sm mt-1 mb-4">Contact supplier for new docs and resubmit to customs tomorrow.</p>
                    </div>
                    <div class="mt-auto border-t border-slate-100 pt-4 space-y-2">
                       <div class="flex justify-between text-sm">
                          <span class="text-slate-500">Timeline Impact</span>
                          <span class="font-medium text-red-600">+3 Days</span>
                       </div>
                        <div class="flex justify-between text-sm">
                          <span class="text-slate-500">Cost Impact</span>
                          <span class="font-medium text-green-600">$0.00</span>
                       </div>
                    </div>
                 </div>

                 <!-- Option B -->
                 <div (click)="selectedOption = 'expedite'"
                      [class.ring-2]="selectedOption === 'expedite'"
                      [class.ring-blue-600]="selectedOption === 'expedite'"
                      class="border border-slate-200 rounded-xl p-5 cursor-pointer hover:bg-slate-50 transition-all relative group h-full flex flex-col">
                    <div class="flex justify-between items-start mb-4">
                       <span class="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                          Expedited
                       </span>
                       <div *ngIf="selectedOption === 'expedite'" class="text-blue-600">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                       </div>
                    </div>
                    <div>
                       <h4 class="font-bold text-slate-900">Digital Affidavit & Air Freight</h4>
                       <p class="text-slate-500 text-sm mt-1 mb-4">Generate digital indemnity bond and reroute via air cargo to meet SLA.</p>
                    </div>
                     <div class="mt-auto border-t border-slate-100 pt-4 space-y-2">
                       <div class="flex justify-between text-sm">
                          <span class="text-slate-500">Timeline Impact</span>
                          <span class="font-medium text-green-600">Recovered</span>
                       </div>
                        <div class="flex justify-between text-sm">
                          <span class="text-slate-500">Cost Impact</span>
                          <span class="font-medium text-red-600">+$1,250.00</span>
                       </div>
                    </div>
                 </div>

              </div>

              <!-- Action Bar -->
              <div class="mt-8 pt-8 border-t border-slate-100 flex justify-end gap-3">
                 <button (click)="close.emit()" class="px-5 py-2.5 text-slate-500 font-medium hover:text-slate-800 transition-colors">Cancel Analysis</button>
                 <button (click)="executeResolution()" 
                         [disabled]="!selectedOption"
                         [class.opacity-50]="!selectedOption"
                         class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                    Confirm & Execute Strategy
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                 </button>
              </div>

           </div>
        </div>
      </div>
    </div>
  `
})
export class ExceptionResolutionComponent {
    @Output() close = new EventEmitter<void>();
    @Output() resolved = new EventEmitter<string>();

    selectedOption: 'standard' | 'expedite' | null = null;

    executeResolution() {
        if (this.selectedOption) {
            // Simulate API processing
            setTimeout(() => {
                this.resolved.emit(this.selectedOption!);
            }, 500);
        }
    }
}
