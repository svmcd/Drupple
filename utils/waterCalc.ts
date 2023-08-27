export const WATER_PER_KG = 0.035;
export const activityMultipliers = {
  Sedentary: 1.0,
  "Lightly active": 1.114,
  "Moderately active": 1.241,
  Active: 1.357,
  "Very Active": 1.429,
};

export const calculateWaterIntake = (weight, selectedOption) => {
  return (
    Math.round(
      parseInt(weight) *
        WATER_PER_KG *
        activityMultipliers[selectedOption] *
        100
    ) / 100
  );
};
