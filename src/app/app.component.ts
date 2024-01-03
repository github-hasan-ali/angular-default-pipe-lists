import { UppercasePipeComponent } from './../components/uppercase-pipe/uppercase-pipe.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CurrencyPipeComponent } from '../components/currency-pipe/currency-pipe.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, RouterLink, CurrencyPipeComponent, UppercasePipeComponent]
})
export class AppComponent {
  title = 'AngularDefaultPipes';
}

