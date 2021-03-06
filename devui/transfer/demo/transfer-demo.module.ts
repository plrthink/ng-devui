import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransferModule } from '../transfer.module';
import { TransferDemoBaseComponent } from './basic/transfer-demo-base.component';
import { TransferDemoSearchComponent } from './search/transfer-demo-search.component';
import { TransferDemoCustomComponent } from './custom/transfer-demo-custom.component';
import {TransferDemoSortComponent} from './sort/transfer-demo-sort.component';
import { TransferDemoComponent } from './transfer-demo.component';
import {ToggleModule} from 'ng-devui/toggle';
import {DataTableModule} from 'ng-devui/data-table';

import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DDemoNavModule } from 'src/app/component/d-demo-nav.module';

@NgModule({
  imports: [
    CommonModule,
    TransferModule,
    DataTableModule,
    ToggleModule,
    DevUIApiModule,
    DevUICodeboxModule,
    DDemoNavModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'demo' },
      { path: 'demo', component: TransferDemoComponent },
      { path: 'api', component: DevUIApiComponent, data: {
        api: require('!html-loader!markdown-loader!../doc/api.md')
      }}
    ])
  ],
  exports: [TransferDemoComponent],
  declarations: [
    TransferDemoComponent,
    TransferDemoSearchComponent,
    TransferDemoBaseComponent,
    TransferDemoCustomComponent,
    TransferDemoSortComponent
  ]
})
export class TransferDemoModule { }

