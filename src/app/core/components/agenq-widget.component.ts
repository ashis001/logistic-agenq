import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-agenq-widget',
  template: `<div id="agenq-root"></div>`,
})
export class AgenqWidgetComponent implements AfterViewInit, OnDestroy {
  // private agentId = '893f73d0-528e-4775-ad53-048e3aea6522';
  // private projectId = 'c46de725-ef4d-4605-9bbe-c8af36f2badb';
  // private customerCode = 'AGENQ-INDIA';

  private agentId = '10a6b680-96d2-465b-84bb-5e3dea6aa997';
  private projectId = '96f356d5-cdce-4de8-bd47-a2d0111ab164';
  private customerCode = 'GROUP-BENEFITS';

  private sdkUrl =
    'https://cdnstaticfiles.blob.core.windows.net/cdn/clientsdk/agenq-client-sdk--dev.js';
  // '/agenq-client-cdn.js';

  private renderInterval?: number;

  ngAfterViewInit(): void {
    // Prevent duplicate SDK loading
    if (document.getElementById('agenq-sdk')) {
      this.renderWidget();
      return;
    }

    const script = document.createElement('script');
    script.id = 'agenq-sdk';
    script.src = this.sdkUrl;
    script.async = true;

    script.onload = () => this.renderWidget();

    document.body.appendChild(script);
  }

  private renderWidget(): void {
    this.renderInterval = window.setInterval(() => {
      const agenq = (window as any).AGENQ;

      if (agenq?.render) {
        clearInterval(this.renderInterval);

        agenq.render({
          agentId: this.agentId,
          projectId: this.projectId,
          customerCode: this.customerCode,
        });
      }
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.renderInterval) {
      clearInterval(this.renderInterval);
    }
  }
}
