import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticleDetailPageRoutingModule } from './article-detail-routing.module';

import { ArticleDetailPage } from './article-detail.page';
import { ComponentsModule } from '../article-comment/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ArticleDetailPage]
})
export class ArticleDetailPageModule {}
