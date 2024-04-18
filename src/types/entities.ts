export type VehicleTransmission = "automatic" | "mechanic";
export type VehicleForm = "alcove" | "van" | "fullyIntegrated";
export type VehicleEngine = "petrol" | "gas";

export type VehicleDetails = {
  airConditioner?: number;
  bathroom?: number;
  kitchen?: number;
  beds: number;
  TV?: number;
  CD?: number;
  radio?: number;
  shower?: number;
  toilet?: number;
  freezer?: number;
  hob?: number;
  microwave?: number;
  gas: string;
  water: string;
};

export type VehicleReview = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

export type Vehicle = {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  adults?: number;
  children?: number;
  engine?: VehicleEngine;
  transmission: VehicleTransmission;
  form: VehicleForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  description: string;
  details: VehicleDetails;
  gallery: string[];
  reviews: VehicleReview[];
};
