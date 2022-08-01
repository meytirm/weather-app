export interface WeatherModel {
  request: RequestModel
  location: LocationModel
  current: CurrentModel
}

interface RequestModel {
  query: string
}

export interface LocationModel {
  timezone_id: string
  localtime: string
  name: string
}

interface CurrentModel {
  temperature: number
  weather_descriptions: string[]
  weather_icons: string[]
  wind_speed: number
  wind_degree: number
  wind_dir: string
  humidity: number
  is_day: boolean
}
