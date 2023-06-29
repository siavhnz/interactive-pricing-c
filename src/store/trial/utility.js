export const CONSTANT_VALUES = {
  BILLING_PERIOD: {
    MONTHLY: "monthly",
    YEARLY: "yearly",
  },
  ACION: {
    CHANGE_SLIDER_VALUE: "CHANGE_SLIDER_VALUE",
    CHANGE_BILLING_PERIOD: "CHANGE_BILLING_PERIOD",
  },
};

//get price based slider value and period
export const getPrice = (sliderValue, periodOfPlan) => {
  let price = 0;

  switch (true) {
    // each unit(1) mean 10K view
    // 100000 view
    case sliderValue >= 100:
      // get price monthly or yearly
      price = calculatePriceBasedPeriod(36, periodOfPlan);
      break;

    // 500000
    case sliderValue >= 50:
      price = calculatePriceBasedPeriod(24, periodOfPlan);
      break;

    case sliderValue >= 10:
      price = calculatePriceBasedPeriod(16, periodOfPlan);
      break;

    case sliderValue >= 5:
      price = calculatePriceBasedPeriod(12, periodOfPlan);
      break;

    case sliderValue >= 1:
      price = calculatePriceBasedPeriod(8, periodOfPlan);
      break;

    default:
      price = calculatePriceBasedPeriod(8, periodOfPlan);
      break;
  }

  return price;
};

// calculate price based period with 25% descount
const calculatePriceBasedPeriod = (price, period) => {
  return period === CONSTANT_VALUES.BILLING_PERIOD.MONTHLY ? price : 12 * price * 0.75;
};
