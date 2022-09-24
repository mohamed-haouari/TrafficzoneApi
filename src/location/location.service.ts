import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateLocationtDto  } from './dto/create-location.dto';
import { UpdateLocationDto  } from './dto/upload-location.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './location.entity';

@Injectable()
export class LocationService {
    constructor(
        @InjectRepository(Location)
        private LocationRepository: Repository<Location>,
      ) {}
      async create(Location: CreateLocationtDto): Promise<Location> {
        return await this.LocationRepository.save(Location);
      }
    
      findAll(): Promise<Location[]> {
        return this.LocationRepository.find();
      }
    
      findOne(id: number): Promise<Location> {
        return this.LocationRepository.findOneBy({id});
      }
    
      async remove(id: number): Promise<void> {
        await this.LocationRepository.delete(id);
      }

      updateLocation(id: number, updateLocationDetails: UpdateLocationDto) {
        return this.LocationRepository.update({ id }, { ...updateLocationDetails });
      }

}
