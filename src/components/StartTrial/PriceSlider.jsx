import { useState } from "react";
import CustomSlider from "../ui/CustomSlider";
import { SliderThumbComponent } from "../ui/CustomSlider";

const PriceSlider = ({ handleSliderChange }) => {
  function valuetext(value) {
    return value;
  }

  const marks = [
    { value: 1 },
    { value: 5 },
    { value: 10 },
    { value: 50 },
    { value: 100 },
  ];
  return (
    <CustomSlider
      aria-label="select price"
      defaultValue={10}
      onChange={(e) => handleSliderChange(e.target.value)}
      slots={{ thumb: SliderThumbComponent }}
      getAriaValueText={valuetext}
      step={null}
      min={1}
      max={100}
      marks={marks}
    />
  );
};

export default PriceSlider;
