import { withStyles, Checkbox, CheckboxProps } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const GreenCheckbox = withStyles({
  root: {
    "&$checked": {
      color: green[400]
    }
  },
  checked: {}
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

export default GreenCheckbox;
