import UVIForecast from './IUVIndexForecast';

export default interface UVIData {
  ok: boolean;
  latitude: number;
  longitude: number;
  now: UVIForecast;
  forecast: UVIForecast[];
}
