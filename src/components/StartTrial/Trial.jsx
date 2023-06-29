import { useReducer } from "react";
import PriceSlider from "./PriceSlider";
import { abbreviateNumber } from "../../utility";
import { CONSTANT_VALUES } from "../../store/trial/utility";
import { initialState, trailReducer } from "../../store/trial/trial-reducer";
import IOSSwitch from "../ui/IOSSwitch";
import CheckItem from "./CheckItem";

const Trial = () => {
  const [state, dispatch] = useReducer(trailReducer, initialState);
  const { sliderValue, price, periodOfPlan } = { ...state };

  const handleSliderChange = (newValue) => {
    dispatch({
      type: CONSTANT_VALUES.ACION.CHANGE_SLIDER_VALUE,
      payload: newValue,
    });
  };

  const handleBillingPeriod = (newValue) => {
    dispatch({
      type: CONSTANT_VALUES.ACION.CHANGE_BILLING_PERIOD,
      payload: newValue
        ? CONSTANT_VALUES.BILLING_PERIOD.YEARLY
        : CONSTANT_VALUES.BILLING_PERIOD.MONTHLY,
    });
  };

  return (
    <section className="mt-60 font-Manrope bg-pattern-circle bg-no-repeat bg-top sm:mt-68">
      <h1 className="text-center font-extrabold text-dark-desaturated-blue text-20 pt-28 sm:pt-34 sm:text-28">
        Simple, traffic-based pricing
      </h1>
      <p className="text-grayish-blue text-center mr-auto ml-auto text-14 leading-22 -tracking-1 mt-7 max-w-[12rem] sm:max-w-none sm:text-16 sm:mt-9">
        Sign-up for our 30-day trial. No credit card required.
      </p>
      <div className="bg-white mx-24 rounded-lg mt-65 py-34 sm:mt-90 sm:mr-auto sm:ml-auto sm:max-w-[34rem]">
        <div className="sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-y-20">
          <p className="uppercase text-grayish-blue text-center text-12 tracking-22 sm:row-start-1 sm:row-end-2 sm:col-start-1 sm:col-end-2 sm:text-14 sm:tracking-20 sm:pt-25 sm:font-semibold sm:ml-46 sm:text-left">
            {abbreviateNumber(sliderValue * 10000, 0)}
            &nbsp; pageviews
          </p>
          <div className="mx-24 mt-20 sm:row-start-2 sm:row-end-3 sm:col-span-full sm:mt-0 sm:mx-50">
            <PriceSlider handleSliderChange={handleSliderChange} />
          </div>
          <div className="mt-12 flex justify-center items-center gap-x-8 sm:row-start-1 sm:row-end-2 sm:col-start-2 sm:col-end-3 sm:mt-0 sm:mr-50 sm:pt-6 sm:justify-end">
            <span className="text-30 font-extrabold text-dark-desaturated-blue sm:text-38">
              ${price.toFixed(2)}
            </span>
            <span className="text-14 text-grayish-blue sm:text-16 sm:font-semibold">
              /{" "}
              {periodOfPlan === CONSTANT_VALUES.BILLING_PERIOD.MONTHLY
                ? "month"
                : "year"}
            </span>
          </div>
        </div>

        <div className="flex justify-center gap-x-12 mt-34 -mr-20 sm:mt-20 sm:ml-94 sm:mr-0 sm:gap-x-18">
          <button
            onClick={() =>
              handleBillingPeriod(CONSTANT_VALUES.BILLING_PERIOD.MONTHLY)
            }
            aria-label="select monthly billing plan"
            className="text-12 tracking-3 capitalize text-grayish-blue"
          >
            monthly billing
          </button>
          <IOSSwitch
            inputProps={{ "aria-label": "click to change billing plan" }}
            checked={periodOfPlan === CONSTANT_VALUES.BILLING_PERIOD.YEARLY}
            onChange={(e) => handleBillingPeriod(e.target.checked)}
          />
          <div className="flex gap-x-8">
            <button
              onClick={() =>
                handleBillingPeriod(CONSTANT_VALUES.BILLING_PERIOD.YEARLY)
              }
              aria-label="select yearly billing plan"
              className="text-12 tracking-3 capitalize text-grayish-blue"
            >
              yearly billing
            </button>
            <div className="text-10 text-light-red bg-light-grayish-red rounded-lg self-start mt-2 py-2 px-8 font-semibold">
              <span className="sm:hidden">-25%</span>
              <span className="hidden sm:inline-block">25% discount</span>
            </div>
          </div>
        </div>

        <div className="mt-38 pt-24 border-t border-b-light-grayish-blue-2 sm:mt-40 sm:pt-32 sm:flex sm:justify-between sm:px-50">
          <div className="flex flex-col items-center sm:items-start gap-y-9">
            <CheckItem text="Unlimited websites" />
            <CheckItem text="100% data ownership" />
            <CheckItem text="Email reports" />
          </div>
          <div className="mt-30 flex justify-center sm:mt-0 sm:self-center">
            <button className="bg-dark-desaturated-blue text-pale-blue px-40 py-10 text-14 rounded-3xl sm:px-42">
              Start my trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trial;
