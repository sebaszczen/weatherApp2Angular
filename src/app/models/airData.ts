import { AirQuality } from "./airQuality";
import { AirMeasurementLocalization } from "./airMeasurementLocalization";

export interface AirData{
  stCalcDate: Date;
  stIndexAirQuality: AirQuality;
  so2IndexAirQuality: AirQuality;
  no2IndexAirQuality: AirQuality;
  coIndexAirQuality: AirQuality;
  pm10IndexAirQuality: AirQuality;
  pm25IndexAirQuality: AirQuality;
  o3IndexAirQuality: AirQuality;
  c6H6IndexAirQuality: AirQuality;
  airMeasurementLocalization: AirMeasurementLocalization;
  id: number;
}
