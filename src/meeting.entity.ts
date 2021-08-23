import { Column, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from './employee.entity';

export class Meeting {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  zoomUrl: string;
  @ManyToMany(type => Employee, employee => employee.meetings)
  attendees: Employee[];  
}
