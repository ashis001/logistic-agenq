import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GuideCard {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    iconBg: string; // Tailwind class
    iconColor: string; // Tailwind class
    points: string[];
}

@Component({
    selector: 'app-guide',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-6 bg-slate-50 overflow-hidden">
      
      <!-- Main Container -->
      <div class="relative w-full max-w-4xl mx-auto">
        
        <!-- Header -->
        <div class="text-center mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
           <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Project Guide</h1>
           <p class="text-slate-500 text-lg max-w-lg mx-auto">Discover the core features and architecture of the LogiFlow Platform.</p>
        </div>

        <!-- Carousel Area -->
        <div class="relative h-[500px] w-full perspective-1000">
           
           <!-- Previous Button -->
           <button (click)="prev()" [disabled]="currentIndex === 0" 
                   class="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-lg border border-slate-100 text-slate-600 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-110 active:scale-95">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
           </button>

           <!-- Next Button -->
           <button (click)="next()" [disabled]="currentIndex === cards.length - 1" 
                   class="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-lg border border-slate-100 text-slate-600 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-110 active:scale-95">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
           </button>

           <!-- Cards Stack -->
           <div class="relative w-full h-full flex items-center justify-center">
             
             <div *ngFor="let card of cards; let i = index" 
                  class="absolute w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-12 transition-all duration-500 ease-in-out transform origin-bottom"
                  [ngClass]="getCardClasses(i)">
                  
                  <!-- Card Content -->
                  <div class="flex flex-col h-full items-center text-center">
                     
                     <!-- Icon -->
                     <div class="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-sm" [ngClass]="[card.iconBg, card.iconColor]">
                        <ng-container [ngSwitch]="card.id">
                            <!-- Intro -->
                            <svg *ngSwitchCase="1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                            <!-- Operations -->
                            <svg *ngSwitchCase="2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                            <!-- Tech -->
                            <svg *ngSwitchCase="3" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                            <!-- Tracking -->
                            <svg *ngSwitchCase="4" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        </ng-container>
                     </div>

                     <span class="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">{{card.subtitle}}</span>
                     <h2 class="text-3xl font-bold text-slate-900 mb-4">{{card.title}}</h2>
                     <p class="text-slate-500 leading-relaxed mb-8 max-w-lg">{{card.description}}</p>

                     <!-- Points List -->
                     <ul class="text-left space-y-3 w-full max-w-sm bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <li *ngFor="let point of card.points" class="flex items-start gap-3 text-slate-700 font-medium">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                           {{point}}
                        </li>
                     </ul>

                  </div>
             
             </div>

           </div>

           <!-- Pagination Dots -->
           <div class="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
              <button *ngFor="let card of cards; let i = index" 
                      (click)="goTo(i)"
                      class="h-2.5 rounded-full transition-all duration-300"
                      [ngClass]="i === currentIndex ? 'w-8 bg-blue-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'">
              </button>
           </div>
        </div>

      </div>
    </div>
  `,
    styles: [`
    .perspective-1000 {
      perspective: 1000px;
    }
  `]
})
export class GuideComponent {
    currentIndex = 0;

    cards: GuideCard[] = [
        {
            id: 1,
            title: 'Problem: Fragmented Logistics',
            subtitle: 'The Challenge',
            description: 'Traditional supply chain management relies on disconnected tools: emails for orders, spreadsheets for tracking, and phone calls for carrier negotiations. This leads to data silos, human errors, and costly delays.',
            iconBg: 'bg-red-50',
            iconColor: 'text-red-600',
            points: [
                'Lack of real-time visibility',
                'Manual data entry errors',
                'Difficulty comparing carrier rates',
                'Compliance risks with documentation'
            ]
        },
        {
            id: 2,
            title: 'Solution: Unified Orchestration',
            subtitle: 'Why Use LogiFlow?',
            description: 'LogiFlow solves these problems by centralizing the entire shipment lifecycle into one intelligent platform. It connects shippers, carriers, and customs agents in a single, seamless digital workflow.',
            iconBg: 'bg-indigo-50',
            iconColor: 'text-indigo-600',
            points: [
                'End-to-end shipment wizard',
                'Automated compliance checks',
                'Centralized document repository',
                'Unified communication channel'
            ]
        },
        {
            id: 3,
            title: 'Strategic Value',
            subtitle: 'Business Impact',
            description: 'By using LogiFlow, organizations transform logistics from a cost center into a competitive advantage. We enable faster decision-making through data-driven insights and automated route optimization.',
            iconBg: 'bg-emerald-50',
            iconColor: 'text-emerald-600',
            points: [
                'Reduce shipping costs by 15%',
                'Cut processing time by 40%',
                'Improve on-time delivery rates',
                'Scale operations without adding headcount'
            ]
        },
        {
            id: 4,
            title: 'Target Use Cases',
            subtitle: 'Who is it for?',
            description: 'This platform is essential for freight forwarders, manufacturers, and e-commerce giants who handle complex, multi-leg international shipments requiring precision and auditability.',
            iconBg: 'bg-amber-50',
            iconColor: 'text-amber-600',
            points: [
                'Global Freight Forwarding',
                'Enterprise Supply Chain Management',
                'Cross-border E-commerce',
                '3PL (Third Party Logistics) Providers'
            ]
        }
    ];

    next() {
        if (this.currentIndex < this.cards.length - 1) {
            this.currentIndex++;
        }
    }

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        }
    }

    goTo(index: number) {
        this.currentIndex = index;
    }

    getCardClasses(index: number) {
        if (index === this.currentIndex) {
            return 'opacity-100 translate-x-0 scale-100 z-10'; // Active
        } else if (index < this.currentIndex) {
            return 'opacity-0 -translate-x-full scale-95 z-0 pointer-events-none'; // Previous (Left)
        } else {
            return 'opacity-0 translate-x-full scale-95 z-0 pointer-events-none'; // Next (Right)
        }
        // Note: Simple stack effect can be:
        // if (index === this.currentIndex) return 'z-10 bg-white scale-100 opacity-100 translate-y-0';
        // if (index === this.currentIndex + 1) return 'z-0 bg-slate-50 scale-95 opacity-50 translate-y-4';
        // return 'opacity-0 z-[-1]';
    }
}
