import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { OperationsStateService } from '../../../core/services/operations-state.service';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div>
      <!-- Header -->
      <div class="flex items-center gap-4 mb-8">
        <div class="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        </div>
        <div>
          <h2 class="text-xl font-bold text-slate-900">Documentation</h2>
          <p class="text-slate-500 text-sm">Upload required shipping documents</p>
        </div>
      </div>

       <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-6">
        
        <div class="space-y-4">
            
            <!-- Commercial Invoice -->
            <div class="p-5 border border-slate-200 rounded-xl bg-white hover:border-blue-300 transition-colors">
                <div class="flex items-center justify-between mb-2">
                    <label class="font-bold text-slate-800 text-sm">Commercial Invoice <span class="text-red-500">*</span></label>
                    <span class="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded">Required</span>
                </div>
                <div class="relative">
                   <div class="flex items-center justify-center w-full">
                        <label class="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 border-dashed rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100 hover:border-blue-400 transition-all">
                            <div *ngIf="!form.value.commercialInvoice" class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-400 mb-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                                <p class="mb-2 text-sm text-slate-500"><span class="font-semibold text-blue-600">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-slate-400">PDF, JPG up to 10MB</p>
                            </div>
                            <div *ngIf="form.value.commercialInvoice" class="flex flex-col items-center justify-center pt-5 pb-6">
                                <div class="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                </div>
                                <p class="text-sm font-medium text-slate-900">commercial_invoice.pdf</p>
                                <p class="text-xs text-slate-500">2.4 MB</p>
                            </div>
                            <input type="file" class="hidden" (change)="onFileSelected($event, 'commercialInvoice')" />
                        </label>
                    </div> 
                </div>
            </div>

            <!-- Packing List -->
             <div class="p-5 border border-slate-200 rounded-xl bg-white hover:border-blue-300 transition-colors">
                <div class="flex items-center justify-between mb-2">
                    <label class="font-bold text-slate-800 text-sm">Packing List <span class="text-red-500">*</span></label>
                    <span class="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded">Required</span>
                </div>
                <div class="relative">
                   <div class="flex items-center justify-center w-full">
                        <label class="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 border-dashed rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100 hover:border-blue-400 transition-all">
                             <div *ngIf="!form.value.packingList" class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-400 mb-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                                <p class="mb-2 text-sm text-slate-500"><span class="font-semibold text-blue-600">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-slate-400">PDF, JPG up to 10MB</p>
                            </div>
                            <div *ngIf="form.value.packingList" class="flex flex-col items-center justify-center pt-5 pb-6">
                                <div class="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                </div>
                                <p class="text-sm font-medium text-slate-900">packing_list_v2.pdf</p>
                                <p class="text-xs text-slate-500">1.8 MB</p>
                            </div>
                            <input type="file" class="hidden" (change)="onFileSelected($event, 'packingList')" />
                        </label>
                    </div> 
                </div>
            </div>

            <div class="mt-4 flex items-start gap-3 p-4 bg-blue-50 text-blue-800 rounded-lg text-sm">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
               <p>Please ensure all documents are signed and stamped before uploading. Automated validation typically takes 2-4 hours.</p>
            </div>

        </div>

        <div class="flex justify-end pt-6 border-t border-slate-100">
          <button type="submit" [disabled]="form.invalid" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed">
            Continue to Pricing
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>

      </form>
    </div>
  `
})
export class DocumentationComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private opsService: OperationsStateService) {
    this.form = this.fb.group({
      commercialInvoice: [false, Validators.requiredTrue],
      packingList: [false, Validators.requiredTrue],
      exportDeclaration: [false]
    });
  }

  ngOnInit() {
    this.opsService.getState().subscribe(state => {
      if (state.documentation && this.form.pristine) {
        // Simple boolean mapping for MVP simulation
        this.form.patchValue(state.documentation);
      }
    });
  }

  onFileSelected(event: any, fieldName: string) {
    // Mock file upload
    if (event.target.files.length > 0) {
      this.form.get(fieldName)?.setValue(true);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.opsService.updateDocumentation(this.form.value);
    }
  }

}
