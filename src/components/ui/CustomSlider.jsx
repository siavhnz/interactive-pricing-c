import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { ReactComponent as SliderIcon } from "../../assets/images/icon-slider.svg";
import PropTypes from "prop-types";

const CustomSlider = styled(Slider)(({ theme }) => ({
  color: "#3a8589",
  height: 8,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 40,
    width: 40,
    background: "hsl(174, 86%, 45%)",
    boxShadow: "0px 5px 20px 5px rgba(16, 213, 194, 0.7)",
    transition: "all 0.5s ease",
    "&:hover": {
      background: "hsl(174, 77%, 80%)",
      boxShadow: "0px 5px 20px 5px rgba(16, 213, 194, 0.7)",
    },
    "& .custom-icon": {
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-track": {
    height: 8,
    color: "hsl(174, 77%, 80%)",
  },
  "& .MuiSlider-mark": {
    height: 0,
  },
  "& .MuiSlider-rail": {
    color: "hsl(224, 65%, 95%)",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 8,
  },
}));

export function SliderThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <SliderIcon className="custom-icon" />
    </SliderThumb>
  );
}

SliderThumbComponent.propTypes = {
  children: PropTypes.node,
};

export default CustomSlider;
