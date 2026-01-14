import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsStateService } from '../../core/services/operations-state.service';
import { ShipmentStage } from '../../core/models/operations.types';

import { ShipmentIntakeComponent } from './steps/intake.component';
import { CargoClassificationComponent } from './steps/classification.component';
import { RoutePlanningComponent } from './steps/planning.component';
import { CarrierSelectionComponent } from './steps/carrier.component';
import { DocumentationComponent } from './steps/documentation.component';
import { PricingComponent } from './steps/pricing.component';
import { TrackingComponent } from './steps/tracking.component';
import { DispatchComponent } from './steps/dispatch.component';

@Component({
  selector: 'app-operations',
  standalone: true,
  imports: [
    CommonModule,
    ShipmentIntakeComponent,
    CargoClassificationComponent,
    RoutePlanningComponent,
    CarrierSelectionComponent,
    DocumentationComponent,
    PricingComponent,
    TrackingComponent,
    DispatchComponent
  ],
  template: `
    <div class="space-y-6">
      <!-- Title Section -->
      <div>
        <h1 class="text-2xl font-bold text-slate-900">Create Shipment</h1>
        <p class="text-slate-500 mt-1 text-sm">Complete all stages to dispatch your shipment</p>
      </div>

      <div class="flex flex-col lg:flex-row gap-8 items-start">
        
        <!-- Sidebar Navigation -->
        <div class="w-full lg:w-72 flex-shrink-0 bg-white rounded-2xl p-4 shadow-sm border border-slate-100 min-h-[500px]">
            <h2 class="text-xs font-bold text-slate-900 mb-4 px-2">Shipment Progress</h2>
            
            <div class="space-y-1">
               <div *ngFor="let step of steps; let i = index" 
                    (click)="goToStep(step.id)"
                    class="flex items-center justify-between px-3 py-3 rounded-lg transition-all cursor-pointer text-sm font-medium"
                    [ngClass]="{
                      'bg-blue-50 text-blue-600': currentStage === step.id,
                      'text-slate-500 hover:bg-slate-50': currentStage !== step.id,
                      'opacity-50 pointer-events-none': !isStepAccessible(step.id) && currentStage !== step.id
                    }">
                 
                 <div class="flex items-center gap-3">
                   <!-- Icon based on logic -->
                   <div [ngSwitch]="true">
                     <!-- Completed Check -->
                     <div *ngSwitchCase="isStepCompleted(step.id) && currentStage !== step.id" class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                     </div>
                     
                     <!-- Active Icon (Generic for now, or specific per step) -->
                     <div *ngSwitchDefault class="w-5 h-5 flex items-center justify-center">
                        <!-- Custom Icons per step could go here, for now using generic shapes or mappings -->
                        <svg *ngIf="step.id === 'intake'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/><line x1="3.27 6.96" x2="12" y2="12.01"/><line x1="20.73 6.96" x2="12" y2="12.01"/></svg>
                        <svg *ngIf="step.id === 'classification'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                        <svg *ngIf="step.id === 'planning'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                        <svg *ngIf="step.id === 'carrier'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                        <svg *ngIf="step.id === 'documentation'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                        <svg *ngIf="step.id === 'pricing'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                        <svg *ngIf="step.id === 'tracking'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h5"/><path d="M22 12h-5"/><path d="M12 2v5"/><path d="M12 22v-5"/><path d="M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5z"/></svg>
                        <svg *ngIf="step.id === 'dispatch'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                     </div>
                   </div>

                   <span>{{step.label}}</span>
                 </div>

                 <!-- Chevron for active -->
                 <svg *ngIf="currentStage === step.id" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>

               </div>
            </div>
        </div>

        <!-- Main Content Area -->
        <div class="flex-1 w-full bg-white rounded-2xl shadow-sm border border-slate-100 p-8 min-h-[600px] animate-in slide-in-from-right-2 duration-300">
            <ng-container [ngSwitch]="currentStage">
              <app-shipment-intake *ngSwitchCase="'intake'"></app-shipment-intake>
              <app-cargo-classification *ngSwitchCase="'classification'"></app-cargo-classification>
              <app-route-planning *ngSwitchCase="'planning'"></app-route-planning>
              <app-carrier-selection *ngSwitchCase="'carrier'"></app-carrier-selection>
              <app-documentation *ngSwitchCase="'documentation'"></app-documentation>
              <app-pricing *ngSwitchCase="'pricing'"></app-pricing>
              <app-tracking *ngSwitchCase="'tracking'"></app-tracking>
              <app-dispatch *ngSwitchCase="'dispatch'"></app-dispatch>
            </ng-container>
        </div>

      </div>
    </div>
  `
})
export class OperationsComponent implements OnInit {
  currentStage: ShipmentStage = 'intake';
  completedStages: ShipmentStage[] = [];

  steps: { id: ShipmentStage, label: string }[] = [
    { id: 'intake', label: 'Shipment Intake' },
    { id: 'classification', label: 'Cargo Classification' },
    { id: 'planning', label: 'Route Planning' },
    { id: 'carrier', label: 'Carrier Selection' },
    { id: 'documentation', label: 'Documentation' },
    { id: 'pricing', label: 'Pricing Engine' },
    { id: 'tracking', label: 'Tracking Setup' },
    { id: 'dispatch', label: 'Dispatch' }
  ];

  constructor(private opsService: OperationsStateService) { }

  ngOnInit() {
    this.opsService.getState().subscribe(state => {
      this.currentStage = state.currentStage;
      this.completedStages = state.completedStages;
    });
  }

  isStepCompleted(stage: ShipmentStage): boolean {
    return this.completedStages.includes(stage);
  }

  isStepAccessible(stage: ShipmentStage): boolean {
    return this.isStepCompleted(stage) || this.currentStage === stage;
  }

  goToStep(stage: ShipmentStage) {
    if (this.isStepAccessible(stage)) {
      console.log('User clicked step', stage);
    }
  }
}
