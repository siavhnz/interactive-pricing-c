import { CONSTANT_VALUES, getPrice } from "./utility";

export const initialState = {
  sliderValue: 10,
  price: getPrice(10, CONSTANT_VALUES.BILLING_PERIOD.MONTHLY),
  billingPeriod: CONSTANT_VALUES.BILLING_PERIOD.MONTHLY,
};

export const trailReducer = (state, action) => {
  if (action.type === CONSTANT_VALUES.ACION.CHANGE_SLIDER_VALUE) {
    return {
      ...state,
      sliderValue: action.payload,
      price: getPrice(action.payload, state.billingPeriod),
    };
  }

  if (action.type === CONSTANT_VALUES.ACION.CHANGE_BILLING_PERIOD) {
    return {
      ...state,
      billingPeriod: action.payload,
      price: getPrice(state.sliderValue, action.payload),
    };
  }

  return state;
};
