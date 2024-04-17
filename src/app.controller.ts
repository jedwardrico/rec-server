import { Controller, Get } from '@nestjs/common';
import { AppService, FoodTruck } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/foodtrucks')
  getFoodTrucks(): Promise<FoodTruck[]> {
    return this.appService.getFoodTrucks();
  }
}
