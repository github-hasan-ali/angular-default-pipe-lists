import { Routes } from '@angular/router';
import { pipe } from 'rxjs';
import { JsonPipeComponent } from '../components/json-pipe/json-pipe.component';
import { CurrencyPipeComponent } from '../components/currency-pipe/currency-pipe.component';


export const routes: Routes = [
    {path:"json-pipe",component:JsonPipeComponent},
    {path:"currency-pipe",component:CurrencyPipeComponent}
];
