import ILocalNames from './ILocalNames';

export default interface IGeoResponse {
  name: string;
  local_names: ILocalNames;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}
