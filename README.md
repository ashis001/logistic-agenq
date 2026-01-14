# LogiFlow – Supply Chain Operations Platform

LogiFlow is a premium, enterprise-grade logistics application designed for managing complex shipping workflows. Built with Angular 17+ and Tailwind CSS, it features a glassmorphism design language and a robust state-driven operations engine.

## Features

- **Executive Dashboard**: Real-time analytics, KPI cards, and shipment volume trends.
- **Operations Engine**: A strictly typed, 8-stage operational workflow for creating shipments:
  1.  **Intake**: Client & Cargo details with validation.
  2.  **Classification**: Hazard & handling requirements.
  3.  **Planning**: AI-driven route selection.
  4.  **Carrier**: Capacity & cost selection.
  5.  **Documentation**: Customs & commercial invoices.
  6.  **Pricing**: Dynamic cost breakdown engine.
  7.  **Tracking**: Auto-generation of tracking IDs.
  8.  **Dispatch**: Final validation and commit.
- **State Management**: Reactive RxJS-based state service managing the entire shipment lifecycle.
- **Premium UI**: Glassmorphism aesthetic, smooth transitions, and a clean light theme.

## Tech Stack

- **Framework**: Angular 18 (Standalone Components)
- **Styling**: Tailwind CSS
- **State**: RxJS (BehaviorSubject)
- **Routing**: Angular Router
- **Forms**: Reactive Forms

## Setup & Running

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Start Development Server**
    ```bash
    ng serve
    # or
    npm start
    ```

3.  **Open Application**
    Navigate to `http://localhost:4200` in your browser.

## Architecture

- **`core/services/operations-state.service.ts`**: The brain of the operations workflow. Manages the state of the shipment wizard across all 8 steps.
- **`features/operations/steps/*`**: Isolated components for each stage of the shipment process.
- **`features/dashboard`**: Analytical overview with mock data visualization.
- **`styles.css`**: Global Tailwind directives and glassmorphism utility classes.

## Design Notes

The application uses a strict "Light Mode" aesthetic with semi-transparent panels (`glass-panel`, `glass-card`) and a cohesive color palette (Slate, Indigo, Emerald, Amber).
# logistic-agenq
