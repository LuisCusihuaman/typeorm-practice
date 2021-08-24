import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Employee } from './employee.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    await this.appService.seed();
    return 'seed complete';
  }
  @Get('/find/:id')
  async getEmployeeByID(@Param() id: number): Promise<Employee> {
    return await this.appService.getEmployeeById(id);
  }
  @Get('/delete/:id')
  async deleteEmployee(@Param() id: number): Promise<string> {
    return await this.appService.deleteEmployee(id);
  }
}
