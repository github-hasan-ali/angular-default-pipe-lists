import { Routes } from '@angular/router';
import { pipe } from 'rxjs';
import { JsonPipeComponent } from '../components/json-pipe/json-pipe.component';
import { CurrencyPipeComponent } from '../components/currency-pipe/currency-pipe.component';
import { UppercasePipeComponent } from '../components/uppercase-pipe/uppercase-pipe.component';
import { LowercasePipeComponent } from '../components/lowercase-pipe/lowercase-pipe.component';

export const routes: Routes = [
    {path:"json-pipe",component:JsonPipeComponent},
    {path:"currency-pipe",component:CurrencyPipeComponent},
    {path: "uppercase-pipe", component: UppercasePipeComponent},
    {path: "lowercase-pipe", component: LowercasePipeComponent}
];
