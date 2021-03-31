# Angular Dayjs

AngularDayjs provider for Angular 11+

# Demo
coming soon...


# Installation
```
npm install --save angular-dayjs dayjs
```

or if you use yarn:

``` typescript
yarn add angular-dayjs dayjs
```

# Usage
Import AngularDayjsModule into your app's modules:
``` typescript
import { AngularDayjsModule } from 'angular-dayjs';
 
@NgModule({
  imports: [
    AngularDayjsModule
  ]
})
```

Import NgxBootstrapConfirmService into your app's components:

``` typescript
import { Component } from '@angular/core';
import { AngularDayjsService } from 'angular-dayjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public angularDayjsService: AngularDayjsService){}
}
```

#app.component.html
Unix time stamp
``` html
TimeAgo - Date
<div>angularDayjsService.timeAgo('2020-12-25T23:48:42-05:00')</div>
<router-outlet></router-outlet>
```


# License
The MIT License (MIT)

srinivas@9lessons.info