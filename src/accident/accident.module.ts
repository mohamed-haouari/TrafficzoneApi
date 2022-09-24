import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccidentService } from './accident.service';
import { AccidentController } from './accident.controller';
import { Accident } from './accident.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Accident])],
  providers: [AccidentService],
  controllers: [AccidentController],
})
export class AccidentModule {}