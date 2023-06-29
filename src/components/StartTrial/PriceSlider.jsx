import { useState } from "react";
import CustomSlider from "../ui/CustomSlider";
import { SliderThumbComponent } from "../ui/CustomSlider";

const PriceSlider = ({ handleSliderChange }) => {
  function valuetext(value) {
    return value;
  }

  return (
    <CustomSlider
      aria-label="select price"
      defaultValue={10}
      onChange={(e) => handleSliderChange(e.target.value)}
      slots={{ thumb: SliderThumbComponent }}
      getAriaValueText={valuetext}
      step={1}
      min={1}
    />
  );
};

export default PriceSlider;
