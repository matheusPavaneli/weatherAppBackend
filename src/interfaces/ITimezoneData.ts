export default interface ITimezoneData {
  status: 'OK';
  message: string;
  countryCode: string;
  countryName: string;
  regionName: string;
  cityName: string;
  zoneName: string;
  abbreviation: string;
  gmtOffset: number;
  dst: string;
  zoneStart: number;
  zoneEnd: number | null;
  nextAbbreviation: string | null;
  timestamp: number;
  formatted: string;
}
