import ITimezoneResponse from './ITimezoneResponse';

export default interface ITimezoneAPI {
  getTimezone(cityName: string): Promise<ITimezoneResponse>;
}
