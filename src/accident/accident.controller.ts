import {
  Controller,
  Get,
  Post,
  Put,
  ParseIntPipe,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { AccidentService } from './accident.service';
import { CreateAccidentDto  } from './dto/create-accident.dto';
import { UpdateAccidentDto  } from './dto/upload-accident.dto';

@Controller('accident')
export class AccidentController {
    constructor(
        private accidentService: AccidentService,
      ) {}

      @Get()
      findAll() {
        return this.accidentService.findAll();
      }
    
      @Get(':id')
      findOne(@Param('id') id: string) {
        return this.accidentService.findOne(+id);
      }
    
      @Post()
         create(@Body() CreateAccidentDto: CreateAccidentDto) {
        return this.accidentService.create(CreateAccidentDto);
  }

      @Put(':id')
      async updateAccidentDtoById(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateAccidentDto: UpdateAccidentDto,
      ) {
        await this.accidentService.updateAccident(id, updateAccidentDto);
      }
    
      @Delete(':id')
      remove(@Param('id') id: string) {
        return this.accidentService.remove(+id);
      }

    }