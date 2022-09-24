import { Entity, Column, PrimaryGeneratedColumn , OneToMany } from 'typeorm';
import { Accident } from 'src/accident/accident.entity';


@Entity()
export class Location {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  status: boolean;

  @OneToMany(() => Accident, (accident) => accident.location)
  accidents: Accident[];
    
}