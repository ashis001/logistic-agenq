import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agenq-widget',
  standalone: true,
  imports: [CommonModule],
  template: `<div id="agenq-root"></div>`,
})
export class AgenqWidgetComponent implements OnInit {

  private agentId = '03ddfc37-f3a4-4fa6-8aea-363027cc8a76';
  private url = 'https://cdnstaticfiles.blob.core.windows.net/cdn/clientsdk/agenq-client-sdk.js';

  ngOnInit(): void {
    // prevent duplicate script load
    if (document.getElementById('agenq-sdk')) {
      return;
    }

    const script = document.createElement('script');
    script.id = 'agenq-sdk';
    script.src = this.url;
    script.async = true;

    script.onload = () => {
      const interval = setInterval(() => {
        if ((window as any).AGENQ?.render) {
          clearInterval(interval);
          (window as any).AGENQ.render({
            agentId: this.agentId,
          });
        }
      }, 100);
    };

    document.body.appendChild(script);
  }
}
