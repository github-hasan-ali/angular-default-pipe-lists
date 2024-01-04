import { Routes } from '@angular/router';
import { pipe } from 'rxjs';
import { JsonPipeComponent } from '../components/json-pipe/json-pipe.component';
import { CurrencyPipeComponent } from '../components/currency-pipe/currency-pipe.component';
import { UppercasePipeComponent } from '../components/uppercase-pipe/uppercase-pipe.component';
import { LowercasePipeComponent } from '../components/lowercase-pipe/lowercase-pipe.component';
import { TitlecasePipeComponent } from '../components/titlecase-pipe/titlecase-pipe.component';
import { SlicePipeComponent } from '../components/slice-pipe/slice-pipe.component';
import { PercentPipeComponent } from '../components/percent-pipe/percent-pipe.component';
import { KeyvaluePipeComponent } from '../components/keyvalue-pipe/keyvalue-pipe.component';
import { DatePipeComponent } from '../components/date-pipe/date-pipe.component';
import path from 'path';
import { DecimalPipeComponent } from '../components/decimal-pipe/decimal-pipe.component';
import { AsyncPipeComponent } from '../components/async-pipe/async-pipe.component';
import { CustomPipeComponent } from '../components/custom-pipe/custom-pipe.component';

export const routes: Routes = [
    {path:"json-pipe",component:JsonPipeComponent},
    {path:"currency-pipe",component:CurrencyPipeComponent},
    {path: "uppercase-pipe", component: UppercasePipeComponent},
    {path: "lowercase-pipe", component: LowercasePipeComponent},
    {path: "titlecase-pipe", component:TitlecasePipeComponent},
    {path:"slice-pipe", component:SlicePipeComponent},
    {path:"percent-pipe", component:PercentPipeComponent},
    {path:"keyvalue-pipe", component:KeyvaluePipeComponent},
    {path:"date-pipe",component:DatePipeComponent},
    {path:"decimal-pipe",component:DecimalPipeComponent},
    {path:"async-pipe",component:AsyncPipeComponent},
    {path:"custom-pipe",component:CustomPipeComponent}
];
