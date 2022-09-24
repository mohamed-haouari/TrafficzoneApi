import { Entity, Column, PrimaryGeneratedColumn , ManyToOne } from 'typeorm';
import { Location } from '../location/location.entity';

@Entity()
export class Accident {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  roadavailability: boolean;

  @ManyToOne(() => Location, (location) => location.accidents)
  location: Location;

}