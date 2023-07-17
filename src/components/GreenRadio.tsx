import { withStyles, RadioProps, Radio } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const GreenRadio = withStyles({
  root: {
    "&$checked": {
      color: green[600]
    }
  },
  checked: {}
})((props: RadioProps) => <Radio color="default" {...props} />);

export default GreenRadio;
