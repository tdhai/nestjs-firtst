import { Module } from '@nestjs/common';
import { TagController } from 'src/controller/tag.controller';
import { TagService } from 'src/service/tag.service';

@Module({
  imports: [],
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule { }
