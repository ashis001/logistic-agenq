import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive],
  template: `
    <header class="h-20 bg-white sticky top-0 z-50 px-8 flex items-center justify-between shadow-sm">
      
      <!-- Logo: Blue Circle with Truck -->
      <a routerLink="/" class="flex items-center gap-3 group cursor-pointer hover:opacity-90 transition-opacity">
        <div class="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        </div>
        <div>
          <h1 class="font-bold text-slate-900 tracking-tight leading-none text-xl">LogiFlow</h1>
          <p class="text-[10px] text-slate-400 font-medium tracking-widest uppercase mt-0.5">Supply Chain Platform</p>
        </div>
      </a>

      <!-- Centered Navigation -->
      <nav class="hidden md:flex items-center gap-8">
        
        <a routerLink="/dashboard" routerLinkActive="text-indigo-600 font-semibold" [routerLinkActiveOptions]="{exact: true}" class="relative flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-all text-sm font-medium py-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-0.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          Dashboard
          <!-- Active Line Indicator -->
          <div class="absolute -bottom-[26px] left-0 w-full h-[3px] bg-indigo-600 rounded-t-full opacity-0 transition-opacity" routerLinkActive="opacity-100"></div>
        </a>

        <a routerLink="/operations" routerLinkActive="text-indigo-600 font-semibold" class="relative flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-all text-sm font-medium py-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-0.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          Operations
          <div class="absolute -bottom-[26px] left-0 w-full h-[3px] bg-indigo-600 rounded-t-full opacity-0 transition-opacity" routerLinkActive="opacity-100"></div>
        </a>

        <a routerLink="/about" routerLinkActive="text-indigo-600 font-semibold" class="relative flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-all text-sm font-medium py-2">
           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-0.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          About
          <div class="absolute -bottom-[26px] left-0 w-full h-[3px] bg-indigo-600 rounded-t-full opacity-0 transition-opacity" routerLinkActive="opacity-100"></div>
        </a>

        <a routerLink="/guide" routerLinkActive="text-indigo-600 font-semibold" class="relative flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-all text-sm font-medium py-2">
           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-0.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
           Guide
           <div class="absolute -bottom-[26px] left-0 w-full h-[3px] bg-indigo-600 rounded-t-full opacity-0 transition-opacity" routerLinkActive="opacity-100"></div>
        </a>

        <a routerLink="/settings" routerLinkActive="text-indigo-600 font-semibold" class="relative flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-all text-sm font-medium py-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-0.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          Settings
          <div class="absolute -bottom-[26px] left-0 w-full h-[3px] bg-indigo-600 rounded-t-full opacity-0 transition-opacity" routerLinkActive="opacity-100"></div>
        </a>

      </nav>

      <!-- CTA -->
      <div>
        <button routerLink="/operations" class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-semibold px-6 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-md shadow-blue-500/20 active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
          New Shipment
        </button>
      </div>

    </header>
  `
})
export class HeaderComponent { }
