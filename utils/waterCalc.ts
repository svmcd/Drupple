export const WATER_PER_KG = 0.035;
export const activityMultipliers = {
  Sedentary: 1.0,
  "Lightly active": 1.11,
  "Moderately active": 1.24,
  Active: 1.35,
  "Very Active": 1.42,
};

export const calculateWaterIntake = (weight, selectedOption) => {
  return (
    Math.round(
      parseInt(weight) * WATER_PER_KG * activityMultipliers[selectedOption] * 10
    ) / 10
  );
};
