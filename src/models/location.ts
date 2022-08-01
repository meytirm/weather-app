export interface LocationModel {
  features: FeatureModel[]
}

export interface FeatureModel {
  center: number[]
  place_name: string
}

export interface LabelValueModel {
  label: string
  value: string
}
