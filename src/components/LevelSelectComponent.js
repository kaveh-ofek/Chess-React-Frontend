import "./SettingsForm.css";
import { FaRobot } from "react-icons/fa";

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

const LevelSelectComponenet = () => {
    return (
        <div className="new-settings__control">
          <FaRobot color="#2c2c2c" size="1.5rem"></FaRobot>
          <div>
            <div>
              <Typography gutterBottom></Typography>
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={1}
                min={1}
                max={5}
              />
            </div>
          </div>
        </div>
    )
}
export default LevelSelectComponenet;