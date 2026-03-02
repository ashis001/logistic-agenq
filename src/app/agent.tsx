import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div id="agenq-root"></div><router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
    agentId = "10a6b680-96d2-465b-84bb-5e3dea6aa997";
    url = "https://cdnstaticfiles.blob.core.windows.net/cdn/clientsdk/agenq-client-sdk--dev.js";

    ngOnInit() {
        const script = document.createElement("script");
        script.src = this.url;
        script.async = true;
        script.onload = () => {
            const interval = setInterval(() => {
                if ((window as any).AGENQ?.render) {
                    clearInterval(interval);
                    (window as any).AGENQ.render({
                        agentId: "10a6b680-96d2-465b-84bb-5e3dea6aa997",
                        projectId: "96f356d5-cdce-4de8-bd47-a2d0111ab164",
                        customerCode: "GROUP-BENEFITS",

                    });
                }
            }, 100);
        };
        document.body.appendChild(script);
    }
}
