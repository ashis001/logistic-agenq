import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExceptionResolutionComponent } from './exception-resolution.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, ExceptionResolutionComponent],
  template: `
    <div class="space-y-8 animate-in mt-2 relative">
      
      <!-- Exception Modal -->
      <app-exception-resolution 
         *ngIf="showResolution" 
         (close)="showResolution = false"
         (resolved)="onResolved($event)">
      </app-exception-resolution>

      <!-- Dashboard Header -->
      <div class="flex justify-between items-end">
        <div>
          <h1 class="text-[28px] font-bold text-slate-900 tracking-tight">Operations Dashboard</h1>
          <p class="text-slate-500 mt-1 font-medium">Real-time overview of your global supply chain operations</p>
        </div>
        <button routerLink="/operations" class="bg-[#3b82f6] hover:bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg flex items-center gap-2 transition-colors shadow-lg shadow-blue-500/20 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          Create New Shipment →
        </button>
      </div>

      <!-- Critical Alert Banner -->
      <div *ngIf="hasAlert" class="bg-red-50 border border-red-100 rounded-xl p-4 flex items-center justify-between animate-in slide-in-from-top-2 shadow-sm">
         <div class="flex items-center gap-4">
            <div class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 animate-pulse">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            <div>
               <h3 class="font-bold text-slate-900">Critical Exception: Shipment #SHP-2024-8819</h3>
               <p class="text-slate-600 text-sm">Customs Clearance Hold • Requires Immediate Action</p>
            </div>
         </div>
         <button (click)="showResolution = true" class="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors shadow-lg shadow-red-500/20">
            Resolve Issue
         </button>
      </div>

       <!-- Success Toast -->
      <div *ngIf="resolutionMessage" class="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-center gap-4 animate-in slide-in-from-top-2 shadow-sm">
         <div class="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
         </div>
         <div>
            <h3 class="font-bold text-slate-900">Issue Resolved</h3>
            <p class="text-emerald-700 text-sm">{{resolutionMessage}}</p>
         </div>
      </div>

      <!-- KPI Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Active Shipments -->
        <div class="premium-card relative group hover:-translate-y-1">
          <div class="flex justify-between items-start mb-6">
            <div class="icon-box bg-blue-50 text-blue-600">
               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            </div>
            <span class="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">+12%</span>
          </div>
          <div>
            <p class="text-slate-500 text-sm font-medium mb-1">Active Shipments</p>
            <h3 class="text-4xl font-bold text-slate-900 tracking-tight">847</h3>
          </div>
        </div>

        <!-- Delayed Routes -->
         <div class="premium-card relative group hover:-translate-y-1">
          <div class="flex justify-between items-start mb-6">
            <div class="icon-box bg-orange-50 text-orange-600">
               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            <span class="bg-red-100 text-red-700 text-xs font-bold px-2.5 py-1 rounded-full">-8%</span>
          </div>
          <div>
            <p class="text-slate-500 text-sm font-medium mb-1">Delayed Routes</p>
            <h3 class="text-4xl font-bold text-slate-900 tracking-tight">23</h3>
          </div>
        </div>

        <!-- Monthly Volume -->
         <div class="premium-card relative group hover:-translate-y-1">
          <div class="flex justify-between items-start mb-6">
            <div class="icon-box bg-emerald-50 text-emerald-600">
               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <span class="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">+18%</span>
          </div>
          <div>
            <p class="text-slate-500 text-sm font-medium mb-1">Monthly Volume</p>
            <h3 class="text-4xl font-bold text-slate-900 tracking-tight">12.4K</h3>
          </div>
        </div>

        <!-- Revenue -->
         <div class="premium-card relative group hover:-translate-y-1">
          <div class="flex justify-between items-start mb-6">
            <div class="icon-box bg-purple-50 text-purple-600">
               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <span class="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">+24%</span>
          </div>
          <div>
            <p class="text-slate-500 text-sm font-medium mb-1">Revenue (MTD)</p>
            <h3 class="text-4xl font-bold text-slate-900 tracking-tight">$2.8M</h3>
          </div>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- Shipment Volume -->
        <div class="premium-card lg:col-span-2 flex flex-col justify-between min-h-[400px]">
          <div class="flex justify-between items-center mb-6">
            <div>
              <h2 class="text-lg font-bold text-slate-900">Shipment Volume</h2>
              <p class="text-slate-400 text-sm mt-0.5">Monthly trends and revenue correlation</p>
            </div>
            <div class="flex items-center gap-6 text-sm font-medium">
               <div class="flex items-center gap-2">
                 <span class="w-3 h-3 rounded-full bg-blue-500"></span>
                 <span class="text-slate-600">Shipments</span>
               </div>
               <div class="flex items-center gap-2">
                 <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                 <span class="text-slate-600">Revenue ($M)</span>
               </div>
            </div>
          </div>
          
          <!-- Mock Chart SVG -->
          <div class="flex-1 w-full relative pl-2 pb-2">
            <svg viewBox="0 0 800 350" preserveAspectRatio="none" class="w-full h-full text-slate-200">
               <!-- Grid Lines -->
               <line x1="0" y1="70" x2="800" y2="70" stroke="#f1f5f9" stroke-width="1.5" stroke-dasharray="0" />
               <line x1="0" y1="140" x2="800" y2="140" stroke="#f1f5f9" stroke-width="1.5" stroke-dasharray="4" />
               <line x1="0" y1="210" x2="800" y2="210" stroke="#f1f5f9" stroke-width="1.5" stroke-dasharray="4" />
               <line x1="0" y1="280" x2="800" y2="280" stroke="#f1f5f9" stroke-width="1.5" stroke-dasharray="4" />
               
               <!-- Y Axis Labels -->
               <text x="0" y="70" class="text-[11px] fill-slate-300">10000</text>
               <text x="0" y="140" class="text-[11px] fill-slate-300">7500</text>
               <text x="0" y="210" class="text-[11px] fill-slate-300">5000</text>
               <text x="0" y="280" class="text-[11px] fill-slate-300">2500</text>
               <text x="0" y="345" class="text-[11px] fill-slate-300">0</text>
               
               <!-- Smooth Curve Mock - Exact shape from image -->
               <path d="M0,280 C100,260 200,270 300,220 C400,190 500,210 600,190 C700,160 800,140 V350 H0 Z" fill="url(#gradientBlue)" opacity="0.15" />
               <path d="M0,280 C100,260 200,270 300,220 C400,190 500,210 600,190 C700,160 800,140" stroke="#3b82f6" fill="none" stroke-width="3" stroke-linecap="round" />
               
               <defs>
                 <linearGradient id="gradientBlue" x1="0%" y1="0%" x2="0%" y2="100%">
                   <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
                   <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:0" />
                 </linearGradient>
               </defs>
            </svg>
            <div class="flex justify-between mt-4 text-xs text-slate-400 font-medium px-4">
               <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
            </div>
          </div>
        </div>

        <!-- Route Distribution -->
        <div class="premium-card flex flex-col">
          <h2 class="text-lg font-bold text-slate-900">Route Distribution</h2>
          <p class="text-slate-400 text-sm mt-0.5 mb-10">By geographic region</p>

          <div class="flex-1 flex flex-col items-center">
             <!-- Pure CSS Donut Chart -->
             <div class="relative w-56 h-56 rounded-full mb-10" 
                  style="background: conic-gradient(
                    #3b82f6 0% 35%, 
                    #6366f1 35% 63%, 
                    #14b8a6 63% 85%, 
                    #f59e0b 85% 95%, 
                    #94a3b8 95% 100%
                  );">
                <div class="absolute inset-8 bg-white rounded-full flex items-center justify-center">
                   <!-- Center hole -->
                </div>
             </div>

             <div class="w-full space-y-4 px-2">
               <div class="flex justify-between items-center text-sm">
                 <div class="flex items-center gap-3"><span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span> <span class="text-slate-600 font-medium">Asia-Pacific</span></div>
                 <span class="font-bold text-slate-900">35%</span>
               </div>
               <div class="flex justify-between items-center text-sm">
                 <div class="flex items-center gap-3"><span class="w-2.5 h-2.5 rounded-full bg-indigo-500"></span> <span class="text-slate-600 font-medium">Europe</span></div>
                 <span class="font-bold text-slate-900">28%</span>
               </div>
               <div class="flex justify-between items-center text-sm">
                 <div class="flex items-center gap-3"><span class="w-2.5 h-2.5 rounded-full bg-teal-500"></span> <span class="text-slate-600 font-medium">North America</span></div>
                 <span class="font-bold text-slate-900">22%</span>
               </div>
               <div class="flex justify-between items-center text-sm">
                 <div class="flex items-center gap-3"><span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span> <span class="text-slate-600 font-medium">Middle East</span></div>
                 <span class="font-bold text-slate-900">10%</span>
               </div>
                <div class="flex justify-between items-center text-sm">
                 <div class="flex items-center gap-3"><span class="w-2.5 h-2.5 rounded-full bg-slate-400"></span> <span class="text-slate-600 font-medium">Other</span></div>
                 <span class="font-bold text-slate-900">5%</span>
               </div>
             </div>
          </div>
        </div>

      </div>

      <!-- Bottom Row -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <!-- Carrier Performance -->
        <div class="premium-card">
           <div class="flex justify-between items-center mb-8">
            <div>
              <h2 class="text-lg font-bold text-slate-900">Carrier Performance</h2>
              <p class="text-slate-400 text-sm mt-0.5">On-time delivery rate</p>
            </div>
            <div class="text-slate-400 p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
            </div>
          </div>

          <div class="space-y-6">
             <div *ngFor="let carrier of ['MaerskLine', 'DHL Global', 'FedEx Freight', 'DB Schenker', 'Kuehne+Nagel']" class="flex items-center gap-6 group">
               <span class="text-xs text-slate-500 w-24 text-right font-medium group-hover:text-slate-800 transition-colors">{{carrier}}</span>
               <div class="flex-1 h-9 bg-[#f0f9fa] rounded-r-lg overflow-hidden relative">
                  <div class="absolute top-0 left-0 h-full bg-[#14b8a6] rounded-r-lg transition-all duration-1000 group-hover:bg-[#0d9488]" [style.width.%]="carrier === 'MaerskLine' ? 98 : carrier === 'DHL Global' ? 95 : 92"></div>
               </div>
             </div>
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="premium-card">
           <div class="flex justify-between items-center mb-8">
            <div>
              <h2 class="text-lg font-bold text-slate-900">Recent Activity</h2>
              <p class="text-slate-400 text-sm mt-0.5">Latest shipment updates</p>
            </div>
            <div class="text-slate-400 p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
          </div>

          <div class="space-y-4">
             
             <div class="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer border border-transparent hover:border-slate-100">
               <div class="flex items-center gap-4">
                 <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                 </div>
                 <div>
                   <h4 class="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">SHP-2024-8847</h4>
                   <p class="text-xs text-slate-500 mt-0.5">Shanghai → Rotterdam</p>
                 </div>
               </div>
               <div class="text-right">
                 <span class="inline-block px-2.5 py-1 rounded-md bg-blue-50 text-blue-600 text-[11px] font-bold tracking-wide mb-1">Dispatched</span>
                 <p class="text-[11px] text-slate-400 font-medium">2 min ago</p>
               </div>
             </div>

             <div class="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer border border-transparent hover:border-slate-100">
               <div class="flex items-center gap-4">
                 <div class="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                 </div>
                 <div>
                   <h4 class="font-bold text-slate-900 text-sm">SHP-2024-8832</h4>
                   <p class="text-xs text-slate-500 mt-0.5">Los Angeles → Hamburg</p>
                 </div>
               </div>
               <div class="text-right">
                 <span class="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[11px] font-bold tracking-wide mb-1">In Transit</span>
                 <p class="text-[11px] text-slate-400 font-medium">15 min ago</p>
               </div>
             </div>

             <div class="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer border border-transparent hover:border-slate-100">
               <div class="flex items-center gap-4">
                 <div class="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                 </div>
                 <div>
                   <h4 class="font-bold text-slate-900 text-sm">SHP-2024-8819</h4>
                   <p class="text-xs text-slate-500 mt-0.5">Customs Clearance</p>
                 </div>
               </div>
               <div class="text-right">
                 <span class="inline-block px-2.5 py-1 rounded-md bg-orange-50 text-orange-700 text-[11px] font-bold tracking-wide mb-1">Delayed</span>
                 <p class="text-[11px] text-slate-400 font-medium">1 hr ago</p>
               </div>
             </div>

           </div>
        </div>

      </div>

    </div>
  `
})
export class DashboardComponent {
  showResolution = false;
  hasAlert = true;
  resolutionMessage: string | null = null;

  onResolved(strategy: string) {
    this.showResolution = false;
    this.hasAlert = false;

    if (strategy === 'expedite') {
      this.resolutionMessage = 'Shipment rerouted via Air Freight. Updated ETA: +24 hrs.';
    } else {
      this.resolutionMessage = 'Standard protocol initiated. Supplier notified for doc resubmission.';
    }

    // Hide success message after 5s
    setTimeout(() => {
      this.resolutionMessage = null;
    }, 5000);
  }
}
