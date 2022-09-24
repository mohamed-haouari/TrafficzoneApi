import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateAccidentDto  } from './dto/create-accident.dto';
import { UpdateAccidentDto  } from './dto/upload-accident.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Accident } from './accident.entity';

@Injectable()
export class AccidentService {
    constructor(
        @InjectRepository(Accident)
        private AccidentRepository: Repository<Accident>, 
      ) {}

      async create(Accident: CreateAccidentDto): Promise<Accident> {
        return await this.AccidentRepository.save(Accident);
      }
    
      findAll(): Promise<Accident[]> {
        return this.AccidentRepository.find();
      }
    
      findOne(id: number): Promise<Accident> {
        return this.AccidentRepository.findOneBy({id}); 
      }
    
      async remove(id: number): Promise<void> {
        await this.AccidentRepository.delete(id);
      }
  
      updateAccident(id: number, updateAccidentDetails: UpdateAccidentDto) {
        return this.AccidentRepository.update({ id }, { ...updateAccidentDetails });
      }

}
