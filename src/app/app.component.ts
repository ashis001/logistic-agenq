import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './core/components/layout/sidebar.component';
import { HeaderComponent } from './core/components/layout/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.css']
})
export class AppComponent {
    title = 'logiflow';
}
