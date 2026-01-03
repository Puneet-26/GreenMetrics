export type ActivityData = {
  driveDistance: number; // in km
  publicTransportDistance: number; // in km
  electricityUsage: number; // in kWh
  naturalGasUsage: number; // in kWh
  wasteAmount: number; // in kg
  diet: 'meat-heavy' | 'balanced' | 'vegetarian' | 'vegan';
};

export type EmissionData = {
  transport: number;
  electricity: number;
  heating: number;
  waste: number;
  food: number;
  total: number;
};

export type FootprintRecord = {
  id: string; // Used as a key
  date: string; // ISO string
  activity: ActivityData;
  emissions: EmissionData;
  tips: string[];
};
