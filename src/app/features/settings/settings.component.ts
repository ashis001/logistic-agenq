import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

type SettingsTab = 'profile' | 'notifications' | 'display' | 'billing';

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    template: `
    <div class="space-y-6 animate-in fade-in duration-500">
      
      <!-- Header -->
      <div class="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div>
          <h1 class="text-2xl font-bold text-slate-900">System Settings</h1>
          <p class="text-slate-500 mt-1 text-sm">Manage user preferences and application configuration</p>
        </div>
        <div *ngIf="saved" class="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-sm font-medium animate-in fade-in">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
           Changes Saved Successfully
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Sidebar Navigation -->
        <div class="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 h-fit">
           <nav class="space-y-1">
             <button (click)="activeTab = 'profile'" 
                     [class.bg-blue-50]="activeTab === 'profile'" 
                     [class.text-blue-700]="activeTab === 'profile'"
                     [class.text-slate-600]="activeTab !== 'profile'"
                     class="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors hover:bg-slate-50 text-left">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
               Profile & Account
             </button>
             
             <button (click)="activeTab = 'notifications'" 
                     [class.bg-blue-50]="activeTab === 'notifications'" 
                     [class.text-blue-700]="activeTab === 'notifications'"
                     [class.text-slate-600]="activeTab !== 'notifications'"
                     class="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors hover:bg-slate-50 text-left">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
               Notifications
             </button>
             
             <button (click)="activeTab = 'display'" 
                     [class.bg-blue-50]="activeTab === 'display'" 
                     [class.text-blue-700]="activeTab === 'display'"
                     [class.text-slate-600]="activeTab !== 'display'"
                     class="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors hover:bg-slate-50 text-left">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
               Display & Appearance
             </button>
             
             <button (click)="activeTab = 'billing'" 
                     [class.bg-blue-50]="activeTab === 'billing'" 
                     [class.text-blue-700]="activeTab === 'billing'"
                     [class.text-slate-600]="activeTab !== 'billing'"
                     class="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors hover:bg-slate-50 text-left">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
               Billing & Plan
             </button>
           </nav>
        </div>

        <!-- Main Settings Content Area -->
        <div class="col-span-2">
          
          <form [formGroup]="form" (ngSubmit)="saveSettings()" class="space-y-6">
            
            <!-- PROFILE TAB -->
            <ng-container *ngIf="activeTab === 'profile'">
                <!-- Profile Panel -->
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in">
                    <h2 class="text-lg font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">Profile Information</h2>
                    
                    <div class="flex items-center gap-6 mb-8">
                    <div class="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-4xl overflow-hidden border border-slate-200">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" class="w-full h-full object-cover">
                    </div>
                    <div>
                        <button type="button" class="bg-white border border-slate-200 text-slate-700 font-medium py-2 px-4 rounded-lg hover:bg-slate-50 transition-colors text-sm shadow-sm">Change Avatar</button>
                        <p class="text-xs text-slate-400 mt-2">JPG or PNG. Max 1MB.</p>
                    </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label class="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                        <input formControlName="fullName" type="text" 
                            class="w-full bg-white border border-slate-300 shadow-sm rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 text-slate-700 font-medium">
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                        <input formControlName="email" type="email" 
                            class="w-full bg-slate-50 border border-slate-200 shadow-sm rounded-lg px-4 py-3 text-slate-500 cursor-not-allowed opacity-75" [readonly]="true">
                    </div>
                    </div>
                    <div class="mb-6">
                        <label class="block text-sm font-bold text-slate-700 mb-2">Role</label>
                        <input formControlName="role" type="text" 
                            class="w-full bg-slate-50 border border-slate-200 shadow-sm rounded-lg px-4 py-3 text-slate-500 cursor-not-allowed opacity-75" [readonly]="true">
                    </div>
                </div>

                <!-- Preferences Panel -->
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in">
                    <h2 class="text-lg font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">Regional Preferences</h2>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-bold text-slate-700 mb-2">Language</label>
                        <div class="relative">
                            <select formControlName="language" class="w-full bg-white border border-slate-300 shadow-sm rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 text-slate-700 font-medium appearance-none cursor-pointer">
                                <option value="en-US">English (US)</option>
                                <option value="de-DE">German (DE)</option>
                                <option value="es-ES">Spanish (ES)</option>
                            </select>
                            <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-slate-700 mb-2">Timezone</label>
                        <div class="relative">
                            <select formControlName="timezone" class="w-full bg-white border border-slate-300 shadow-sm rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 text-slate-700 font-medium appearance-none cursor-pointer">
                                <option value="utc-8">UTC-8 (Pacific Time)</option>
                                <option value="utc+1">UTC+1 (Central European Time)</option>
                            </select>
                            <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-slate-700 mb-2">Currency</label>
                        <div class="relative">
                            <select formControlName="currency" class="w-full bg-white border border-slate-300 shadow-sm rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 text-slate-700 font-medium appearance-none cursor-pointer">
                                <option value="USD">USD ($)</option>
                                <option value="EUR">EUR (€)</option>
                            </select>
                            <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </ng-container>


            <!-- NOTIFICATIONS TAB -->
            <ng-container *ngIf="activeTab === 'notifications'">
                 <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in">
                    <h2 class="text-lg font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">Notification Preferences</h2>
                    <div class="space-y-4">
                        <label class="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:bg-slate-50 cursor-pointer">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                                </div>
                                <div>
                                    <span class="block font-bold text-slate-900 text-sm">Shipment Updates</span>
                                    <span class="block text-xs text-slate-500">Receive daily summaries of shipment movements</span>
                                </div>
                            </div>
                            <input formControlName="notifyShipments" type="checkbox" class="w-5 h-5 text-blue-600 rounded focus:ring-blue-500">
                        </label>
                        <label class="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:bg-slate-50 cursor-pointer">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                                </div>
                                <div>
                                    <span class="block font-bold text-slate-900 text-sm">Critical Alerts</span>
                                    <span class="block text-xs text-slate-500">Immediate notification for delays or customs holds</span>
                                </div>
                            </div>
                            <input formControlName="notifyAlerts" type="checkbox" class="w-5 h-5 text-blue-600 rounded focus:ring-blue-500">
                        </label>
                    </div>
                </div>
            </ng-container>

             <!-- DISPLAY TAB -->
            <ng-container *ngIf="activeTab === 'display'">
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in">
                     <h2 class="text-lg font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">Display Settings</h2>
                     <p class="text-slate-500 text-sm">Theme customization coming soon in version 2.5.</p>
                </div>
            </ng-container>

             <!-- BILLING TAB -->
            <ng-container *ngIf="activeTab === 'billing'">
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in">
                     <div class="flex justify-between items-start mb-6 pb-6 border-b border-slate-100">
                        <div>
                            <h2 class="text-lg font-bold text-slate-900">Enterprise Plan</h2>
                            <p class="text-slate-500 text-sm mt-1">Next billing date: Feb 1, 2026</p>
                        </div>
                        <span class="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-xs uppercase">Active</span>
                     </div>
                     <div class="flex items-center gap-4 text-sm text-slate-600 bg-slate-50 p-4 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                        <span>Visa ending in 4242</span>
                        <button type="button" class="ml-auto text-blue-600 font-semibold hover:underline">Update</button>
                     </div>
                </div>
            </ng-container>


            <!-- Save Button Sticky Footer -->
            <div class="flex justify-end pt-8 mt-4 border-t border-slate-100">
                <button type="submit" [disabled]="loading" class="bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 disabled:opacity-70 flex items-center gap-2">
                    <svg *ngIf="loading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Save Changes
                </button>
            </div>

          </form>

        </div>

      </div>
    </div>
  `
})
export class SettingsComponent implements OnInit {
    activeTab: SettingsTab = 'profile';
    form: FormGroup;
    loading = false;
    saved = false;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            fullName: ['Alex Morrison', Validators.required],
            email: ['alex.m@logiflow.corp', [Validators.required, Validators.email]],
            role: ['Senior Logistics Manager'],
            language: ['en-US'],
            timezone: ['utc-8'],
            currency: ['USD'],
            notifyShipments: [true],
            notifyAlerts: [true]
        });
    }

    ngOnInit() { }

    saveSettings() {
        this.loading = true;
        this.saved = false;

        // Simulate API call
        setTimeout(() => {
            this.loading = false;
            this.saved = true;
            console.log('Settings Saved:', this.form.value);

            // Reset success message after 3 seconds
            setTimeout(() => {
                this.saved = false;
            }, 3000);
        }, 1000);
    }
}
