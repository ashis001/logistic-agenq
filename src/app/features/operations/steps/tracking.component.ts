import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsStateService } from '../../../core/services/operations-state.service';

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <!-- Header -->
      <div class="flex items-center gap-4 mb-8">
        <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <div>
          <h2 class="text-xl font-bold text-slate-900">Tracking Setup</h2>
          <p class="text-slate-500 text-sm">Generate ID and configure notifications</p>
        </div>
      </div>

      <div class="space-y-8">
        
        <!-- Tracking ID Card -->
        <div class="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-center text-white relative overflow-hidden shadow-2xl">
           <div class="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
           
           <h3 class="text-slate-400 font-medium mb-4 text-sm uppercase tracking-widest">Shipment Tracking ID</h3>
           
           <div class="flex items-center justify-center gap-4 mb-8">
              <span class="text-5xl md:text-6xl font-mono font-bold tracking-wider text-white bg-slate-800/50 px-6 py-4 rounded-xl border border-slate-700 shadow-inner">
                {{trackingId || 'GENERATING...'}}
              </span>
              <button (click)="copyId()" class="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 transition-colors" title="Copy ID">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              </button>
           </div>

           <div class="flex items-center justify-center gap-2">
              <span class="flex w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
              <span class="text-emerald-400 font-medium text-sm">Active & Trackable</span>
           </div>
        </div>

        <!-- Notification Settings -->
        <div class="bg-white border border-slate-200 rounded-2xl p-6">
           <h3 class="font-bold text-slate-900 mb-6">Notification Preferences</h3>
           
           <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label class="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:bg-slate-50 cursor-pointer">
                 <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    <div>
                       <span class="block font-bold text-slate-900 text-sm">Email Alerts</span>
                       <span class="block text-xs text-slate-500">Daily status updates</span>
                    </div>
                 </div>
                 <input type="checkbox" checked class="w-5 h-5 text-blue-600 rounded focus:ring-blue-500">
              </label>

               <label class="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:bg-slate-50 cursor-pointer">
                 <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center">
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    </div>
                    <div>
                       <span class="block font-bold text-slate-900 text-sm">SMS Alerts</span>
                       <span class="block text-xs text-slate-500">Critical delays only</span>
                    </div>
                 </div>
                 <input type="checkbox" class="w-5 h-5 text-blue-600 rounded focus:ring-blue-500">
              </label>
           </div>
        </div>

        <div class="flex justify-end pt-6 border-t border-slate-100">
          <button (click)="onComplete()" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20">
            Finalize Tracking
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>

      </div>
    </div>
  `
})
export class TrackingComponent implements OnInit {
  trackingId = '';

  constructor(private opsService: OperationsStateService) { }

  ngOnInit() {
    this.opsService.getState().subscribe(state => {
      if (state.tracking && state.tracking.trackingId) {
        this.trackingId = state.tracking.trackingId;
      } else {
        // Generate a random ID if none exists
        this.trackingId = 'SHP-' + Math.floor(10000000 + Math.random() * 90000000);
      }
    });
  }

  copyId() {
    // Mock copy
    alert('Tracking ID Copied: ' + this.trackingId);
  }

  onComplete() {
    this.opsService.updateTracking({
      trackingId: this.trackingId,
      isLive: true
    });
  }
}
