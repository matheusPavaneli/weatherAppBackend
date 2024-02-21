type IGetIconAndDescription = (weatherCode: string) => {
  iconUrl: string;
  description: string;
};

export default IGetIconAndDescription;
