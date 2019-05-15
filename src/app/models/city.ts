import { AirData } from './airData';
import { SynopticData } from './synopticData';
export interface City {
  name: string;
  synopticDataDtoList: Array<SynopticData>;
  airDataDtoList: Array<AirData>;
}
