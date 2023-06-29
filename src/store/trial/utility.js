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
export const getPrice = (sliderValue, billingPeriod) => {
  let price = 0;

  switch (true) {
    // each unit(1) mean 10K view
    // 100000 view
    case sliderValue >= 100:
      // get price monthly or yearly
      price = calculatePriceBasedPeriod(36, billingPeriod);
      break;

    // 500000
    case sliderValue >= 50:
      price = calculatePriceBasedPeriod(24, billingPeriod);
      break;

    case sliderValue >= 10:
      price = calculatePriceBasedPeriod(16, billingPeriod);
      break;

    case sliderValue >= 5:
      price = calculatePriceBasedPeriod(12, billingPeriod);
      break;

    case sliderValue >= 1:
      price = calculatePriceBasedPeriod(8, billingPeriod);
      break;

    default:
      price = calculatePriceBasedPeriod(8, billingPeriod);
      break;
  }

  return price;
};

// calculate price based period with 25% descount
const calculatePriceBasedPeriod = (price, period) => {
  return period === CONSTANT_VALUES.BILLING_PERIOD.MONTHLY ? price : 12 * price * 0.75;
};
