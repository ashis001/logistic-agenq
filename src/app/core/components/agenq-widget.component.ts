import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-agenq-widget',
  template: `<div id="agenq-root"></div>`,
})
export class AgenqWidgetComponent implements AfterViewInit, OnDestroy {
  private agentId = "4c29ccf9-03af-4231-8d46-3989bd489783";
  private projectId = "db70ffb4-365f-4ae0-9525-39a71ab40dbb";
  private customerCode = "GROUP-BENEFITS";

    
             
             
  // private agentId = 'ff492dd4-226b-4aac-a03f-46acf2cf93f6';
  // private projectId = '368ce476-f19f-47df-9f03-a5524dcc7293';
  // private customerCode = 'HIMANSHU-TEST';

  private sdkUrl = '/agenq-client-cdn.js';

  // 'https://cdn.aws.agenq.com/agenq-client-sdk.js';
  // 'https://cdnstaticfiles.blob.core.windows.net/cdn/clientsdk/agenq-client-sdk.js';

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
