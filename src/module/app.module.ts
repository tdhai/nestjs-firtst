import { Module } from '@nestjs/common';
import { TagController } from 'src/controller/tag.controller';
import { TagService } from 'src/service/tag.service';
import { AppController } from '@app/controller/app.controller';
import { AppService } from '@app/service/app.service';
import { TagModule } from '@app/module/tag.module';
import { config } from '@app/ormconfig';
import * as a from "@nestjs/typeorm"

@Module({
  imports: [TagModule,  a.],
  controllers: [AppController, TagController],
  providers: [AppService, TagService],
})
export class AppModule { }
