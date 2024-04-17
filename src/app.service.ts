import { Injectable } from '@nestjs/common';

export type FoodTruck = {
  dayorder: string;
  dayofweekstr: string;
  starttime: string;
  endtime: string;
  permit: string;
  location: string;
  locationdesc: string;
  optionaltext: string;
  locationid: string;
  start24: string;
  end24: string;
  cnn: string;
  addr_date_create: string;
  addr_date_modified: string;
  block: string;
  lot: string;
  coldtruck: string;
  applicant: string;
  x: string;
  y: string;
  latitude: string;
  longitude: string;
  location_2: {
    latitude: string;
    longitude: string;
    human_address: string;
  };
};

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async getFoodTrucks(): Promise<FoodTruck[]> {
    const response = await fetch(
      'https://data.sfgov.org/resource/jjew-r69b.json',
    );
    const foodTrucks = await response.json();
    return foodTrucks;
  }
}
