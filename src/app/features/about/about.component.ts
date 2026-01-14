import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-6 animate-in fade-in duration-500">
      
      <!-- Header -->
      <div class="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div>
          <h1 class="text-2xl font-bold text-slate-900">About LogiFlow</h1>
          <p class="text-slate-500 mt-1 text-sm">Platform version and system information</p>
        </div>
      </div>

      <div class="bg-white p-12 rounded-2xl shadow-sm border border-slate-100 text-center max-w-4xl mx-auto">
        <div class="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-indigo-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        </div>
        
        <h1 class="text-4xl font-bold text-slate-900 mb-4">LogiFlow Enterprise</h1>
        <p class="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          The world's most advanced supply chain orchestration platform, processing over <span class="text-indigo-600 font-bold">1.2 million</span> shipments daily.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div class="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-colors">
            <h3 class="font-bold text-slate-900 mb-3 text-lg">Global Reach</h3>
            <p class="text-slate-600 leading-relaxed">Connecting logistics hubs across 124 countries with real-time data sync and predictive analytics.</p>
          </div>
          <div class="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-colors">
            <h3 class="font-bold text-slate-900 mb-3 text-lg">Smart Routing</h3>
            <p class="text-slate-600 leading-relaxed">AI-powered route optimization reducing transit times by up to 22% using historical traffic patterns.</p>
          </div>
          <div class="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-colors">
            <h3 class="font-bold text-slate-900 mb-3 text-lg">Secure & Compliant</h3>
            <p class="text-slate-600 leading-relaxed">Automated customs documentation generation ensuring 99.9% regulatory compliance globally.</p>
          </div>
        </div>

        <div class="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center text-sm text-slate-400">
          <p>© 2026 LogiFlow Inc. All rights reserved.</p>
          <p>Version 2.4.0 (Build 8832)</p>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent { }
