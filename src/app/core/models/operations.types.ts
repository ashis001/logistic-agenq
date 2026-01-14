export type ShipmentStage =
    | 'intake'
    | 'classification'
    | 'planning'
    | 'carrier'
    | 'documentation'
    | 'pricing'
    | 'tracking'
    | 'dispatch';

export interface ShipmentIntake {
    clientName: string;
    cargoType: string;
    weight: number;
    volume: number;
    pickupLocation: string;
    destination: string;
}

export interface CargoClassification {
    hazardType: 'none' | 'chemical' | 'biological' | 'radioactive';
    isFragile: boolean;
    isPerishable: boolean;
    handlingRequirements: string[];
}

export interface RouteOption {
    selectedRoute: 'air' | 'sea' | 'land' | 'rail';
    estimatedDuration: number;
    estimatedCost: number;
}

export interface CarrierOption {
    selectedCarrierId: string;
}

export interface Documentation {
    commercialInvoice: boolean;
    packingList: boolean;
    exportDeclaration: boolean;
}

export interface PricingBreakdown {
    total: number;
    currency: string;
    breakdown: any;
    baseTransport?: number;
    fuelSurcharge?: number;
    insurance?: number;
    tax?: number;
}

export interface TrackingSetup {
    trackingId: string;
    isLive: boolean;
}

export interface DispatchStatus {
    dispatched: boolean;
    timestamp: any;
}

export interface OperationState {
    currentStage: ShipmentStage;
    completedStages: ShipmentStage[];

    intake: ShipmentIntake | null;
    classification: CargoClassification | null;
    route: RouteOption | null;
    carrier: CarrierOption | null;
    documentation: Documentation | null; // Renamed from 'docs' to match component usage
    pricing: PricingBreakdown | null;
    tracking: TrackingSetup | null;
    dispatch: DispatchStatus | null;
}
