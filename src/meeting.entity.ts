import { Column, Entity, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from './employee.entity';

@Entity()
export class Meeting {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  zoomUrl: string;
  @ManyToMany(type => Employee, employee => employee.meetings)
  attendees: Employee[];  
}
