import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
    OperationState,
    ShipmentStage,
    ShipmentIntake,
    CargoClassification,
    RouteOption,
    CarrierOption,
    Documentation,
    PricingBreakdown,
    TrackingSetup,
    DispatchStatus
} from '../models/operations.types';

const INITIAL_STATE: OperationState = {
    currentStage: 'intake',
    completedStages: [],
    intake: null,
    classification: null,
    route: null,
    carrier: null,
    documentation: null,
    pricing: null,
    tracking: null,
    dispatch: null
};

export const STAGE_ORDER: ShipmentStage[] = [
    'intake',
    'classification',
    'planning',
    'carrier',
    'documentation',
    'pricing',
    'tracking',
    'dispatch'
];

@Injectable({
    providedIn: 'root'
})
export class OperationsStateService {
    private state$ = new BehaviorSubject<OperationState>(INITIAL_STATE);

    constructor() { }

    getState(): Observable<OperationState> {
        return this.state$.asObservable();
    }

    getCurrentStage(): ShipmentStage {
        return this.state$.value.currentStage;
    }

    updateIntake(data: ShipmentIntake) {
        this.updateState({ intake: data });
        this.completeStage('intake');
    }

    updateClassification(data: CargoClassification) {
        this.updateState({ classification: data });
        this.completeStage('classification');
    }

    updateRoute(data: RouteOption) {
        this.updateState({ route: data });
        this.completeStage('planning');
    }

    updateCarrier(data: CarrierOption) {
        this.updateState({ carrier: data });
        this.completeStage('carrier');
    }

    updateDocumentation(data: Documentation) {
        this.updateState({ documentation: data });
        this.completeStage('documentation');
    }

    updatePricing(data: PricingBreakdown) {
        this.updateState({ pricing: data });
        this.completeStage('pricing');
    }

    updateTracking(data: TrackingSetup) {
        this.updateState({ tracking: data });
        this.completeStage('tracking');
    }

    updateDispatch(data: DispatchStatus) {
        this.updateState({ dispatch: data });
        this.completeStage('dispatch');
    }

    private completeStage(stage: ShipmentStage) {
        const currentState = this.state$.value;
        const completed = [...currentState.completedStages];

        if (!completed.includes(stage)) {
            completed.push(stage);
        }

        // Find next stage
        const currentIndex = STAGE_ORDER.indexOf(stage);
        let nextStage = currentState.currentStage;

        if (currentIndex < STAGE_ORDER.length - 1) {
            nextStage = STAGE_ORDER[currentIndex + 1];
        }

        this.updateState({
            completedStages: completed,
            currentStage: nextStage
        });
    }

    private updateState(partial: Partial<OperationState>) {
        this.state$.next({
            ...this.state$.value,
            ...partial
        });
    }

    reset() {
        this.state$.next(INITIAL_STATE);
    }
}
