import ICreateIconUrl from '../interfaces/ICreateIconUrl';

const createIconUrl: ICreateIconUrl = (iconCode: string): string => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

export default createIconUrl;
