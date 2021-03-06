import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ConfigService } from '../services/config.service';
import { SkeletonUserComponent } from './skeleton-user/skeleton-user.component';
import { UserComponent } from './user/user.component';
import { SkeletonHistoryComponent } from './skeleton-history/skeleton-history.component';
import { HistoryItemsComponent } from './history-items/history-items.component';
import { UsermodalComponent } from './usermodal/usermodal.component';
import { SearchPipe } from '../pipes/search.pipe';
 

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
   HeaderComponent,
   SkeletonUserComponent,
   UserComponent,
   SkeletonHistoryComponent,
   HistoryItemsComponent,
   UsermodalComponent,
   SearchPipe
  ],
  exports:[
    HeaderComponent,
    ConfigService,
    SkeletonUserComponent,
    UserComponent,
    SkeletonHistoryComponent,
    HistoryItemsComponent,
    UsermodalComponent,
    SearchPipe
  ],
  providers:[
    ConfigService
  ]
})
export class ComponentsModule {}
