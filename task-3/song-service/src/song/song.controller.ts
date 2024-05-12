import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  NotFoundException,
  Logger,
} from '@nestjs/common';
import { SongService } from './song.service';
import { SongDto } from './dto/song.dto';

@Controller('songs')
export class SongController {
  private readonly logger = new Logger(SongController.name);

  constructor(private readonly songService: SongService) {}

  @Get('status')
  getStatus(): string {
    return 'OK';
  }

  @Get('ready')
  async isReady(): Promise<string> {
    try {
      await this.songService.findAll();
      return 'OK';
    } catch (error) {
      return 'Not Ready'
    }
  }

  @Get('live')
  async isLive(): Promise<string> {
    try {
      await this.songService.findAll();
      return 'OK';
    } catch (error) {
      return 'Not Ready'
    }
  }

  @Post()
  create(@Body() createSongDto: SongDto) {
    return this.songService.create(createSongDto);
  }

  @Get()
  findAll() {
    return this.songService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.songService.findOne(id);
    if (result) {
      return result;
    } else {
      throw new NotFoundException('Song not found');
    }
  }

  @Delete()
  remove(@Query('id') id: string) {
    const ids = id.split(',');
    return this.songService.remove(ids);
  }
}
