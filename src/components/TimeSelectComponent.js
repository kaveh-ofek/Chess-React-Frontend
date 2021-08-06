import "./SettingsForm.css";
import { FaClock } from "react-icons/fa";

import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";


const PrettoSlider = withStyles({
    root: {
      color: "#52af77",
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      marginTop: -8,
      marginLeft: -12,
      "&:focus, &:hover, &$active": {
        boxShadow: "inherit",
      },
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)",
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

const TimeSelectComponent = () => {
    return (
        <div className="new-settings__control">
          <FaClock color="#2c2c2c" size="1.5rem"></FaClock>
          <div>
            <div>
              <Typography gutterBottom></Typography>
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={1}
                min={1}
                max={10}
              />
            </div>
          </div>
        </div>
    )

}
export default TimeSelectComponent;