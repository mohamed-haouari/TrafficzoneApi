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
  import { LocationService } from './location.service';
  import { CreateLocationtDto  } from './dto/create-location.dto';
  import { UpdateLocationDto  } from './dto/upload-location.dto';

@Controller('location')
export class LocationController {

    constructor(
        private locationService: LocationService,
      ) {}

      @Get()
      findAll() {
        return this.locationService.findAll();
      }
    
      @Get(':id')
      findOne(@Param('id') id: string) {
        return this.locationService.findOne(+id);
      }
    
      @Post()
         create(@Body() CreateLocationtDto: CreateLocationtDto) {
        return this.locationService.create(CreateLocationtDto);
  }

      @Put(':id')
      async updateAccidentDtoById(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateLocationDto: UpdateLocationDto,
      ) {
        await this.locationService.updateLocation(id, updateLocationDto);
      }

      @Delete(':id')
      remove(@Param('id') id: string) {
        return this.locationService.remove(+id);
      }

}
