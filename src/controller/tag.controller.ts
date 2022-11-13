import { Controller, Get } from '@nestjs/common';
import { TagService } from 'src/service/tag.service';

@Controller("tags")
export class TagController {
  constructor(private readonly tagService: TagService) { }

  @Get()
  findAll() {
    return this.tagService.findAll()
  }
}
