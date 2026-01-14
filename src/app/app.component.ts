import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/layout/header.component';
import { AgenqWidgetComponent } from './core/components/agenq-widget.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        HeaderComponent,
        AgenqWidgetComponent
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.css']
})
export class AppComponent {
    title = 'logiflow';
}
