import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accident } from './accident/accident.entity';
import { Location } from './location/location.entity';
import { AccidentModule } from './accident/accident.module';
import { LocationModule } from './location/location.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'traffic',
      username: 'root',
      password: 'root',
      entities: [__dirname + '/**/*.entity{.ts,.js}',Accident,Location],
      synchronize: true,
    }),
  AccidentModule,
  LocationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



