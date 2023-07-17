import "./styles.css";
import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/core";
import Controls from "./components/Controls";
import TroopProgress from "./components/TroopProgress";
import {
  BASE_SIEGE_GROUP_1_RANGE,
  BASE_SIEGE_GROUP_2_RANGE,
  BASE_SIEGE_GROUP_3_RANGE,
  BASE_SIEGE_GROUP_4_RANGE,
  BASE_SIEGE_GROUP_5_RANGE,
  BASE_SIEGE_GROUP_1_SPEED,
  ARCHER_SKILL_BOOK_BONUS,
  BASE_ARCHER_RANGE,
  BASE_ARCHER_SPEED,
  GROUND_SPEED_BOOK_BONUS,
  BASE_GROUND_RANGE,
  BASE_GROUND_SPEED,
  MOUNTED_SPEED_BOOK_BONUS,
  BASE_MOUNTED_RANGE,
  BASE_MOUNTED_SPEED
} from "./constants";
import { useControls } from "./state/useControls";

const useStyles = makeStyles({
  root: {
    padding: "24px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",

    "& .container": {
      width: "1000px"
    }
  }
});

export default function App() {
  const classes = useStyles();
  const {
    hasSiegeRangeSkillBook_defense,
    hasSiegeRangeSkillBook_offense,
    siegeRangeBonus_offense,
    siegeRangeBonus_defense,
    hasArcherRangeSkillBook_offense,
    hasArcherRangeSkillBook_defense,
    hasGroundSpeedSkillBook_offense,
    hasGroundSpeedSkillBook_defense,
    hasMountedSpeedSkillBook_offense,
    hasMountedSpeedSkillBook_defense
  } = useControls();

  const maxRange_offense =
    BASE_SIEGE_GROUP_1_RANGE * (siegeRangeBonus_offense || 1) +
    (hasSiegeRangeSkillBook_offense ? 200 : 0);

  const maxRange_defense =
    BASE_SIEGE_GROUP_1_RANGE * (siegeRangeBonus_defense || 1) +
    (hasSiegeRangeSkillBook_defense ? 200 : 0);

  const maxRange = useMemo(() => Math.max(maxRange_offense, maxRange_defense), [
    maxRange_offense,
    maxRange_defense
  ]);

  return (
    <div className={classes.root}>
      <div className="container">
        <Controls />

        <div className="troop-advance-status">
          <TroopProgress
            label="T15-13 Siege"
            maxRange={maxRange}
            range_offense={maxRange_offense}
            range_defense={maxRange_defense}
            speed_offense={BASE_SIEGE_GROUP_1_SPEED}
            speed_defense={BASE_SIEGE_GROUP_1_SPEED}
          />

          <TroopProgress
            label="T12-11 Siege"
            maxRange={maxRange}
            range_offense={
              BASE_SIEGE_GROUP_2_RANGE * (siegeRangeBonus_offense || 1) +
              (hasSiegeRangeSkillBook_offense ? 200 : 0)
            }
            range_defense={
              BASE_SIEGE_GROUP_2_RANGE * (siegeRangeBonus_defense || 1) +
              (hasSiegeRangeSkillBook_defense ? 200 : 0)
            }
            speed_offense={BASE_SIEGE_GROUP_1_SPEED}
            speed_defense={BASE_SIEGE_GROUP_1_SPEED}
          />

          <TroopProgress
            label="T10-9 Siege"
            maxRange={maxRange}
            range_offense={
              BASE_SIEGE_GROUP_3_RANGE * (siegeRangeBonus_offense || 1) +
              (hasSiegeRangeSkillBook_offense ? 200 : 0)
            }
            range_defense={
              BASE_SIEGE_GROUP_3_RANGE * (siegeRangeBonus_defense || 1) +
              (hasSiegeRangeSkillBook_defense ? 200 : 0)
            }
            speed_offense={BASE_SIEGE_GROUP_1_SPEED}
            speed_defense={BASE_SIEGE_GROUP_1_SPEED}
          />

          <TroopProgress
            label="T8-5 Siege"
            maxRange={maxRange}
            range_offense={
              BASE_SIEGE_GROUP_4_RANGE * (siegeRangeBonus_offense || 1) +
              (hasSiegeRangeSkillBook_offense ? 200 : 0)
            }
            range_defense={
              BASE_SIEGE_GROUP_4_RANGE * (siegeRangeBonus_defense || 1) +
              (hasSiegeRangeSkillBook_defense ? 200 : 0)
            }
            speed_offense={BASE_SIEGE_GROUP_1_SPEED}
            speed_defense={BASE_SIEGE_GROUP_1_SPEED}
          />

          <TroopProgress
            label="T4-1 Siege"
            maxRange={maxRange}
            range_offense={
              BASE_SIEGE_GROUP_5_RANGE * (siegeRangeBonus_offense || 1) +
              (hasSiegeRangeSkillBook_offense ? 200 : 0)
            }
            range_defense={
              BASE_SIEGE_GROUP_5_RANGE * (siegeRangeBonus_defense || 1) +
              (hasSiegeRangeSkillBook_defense ? 200 : 0)
            }
            speed_offense={BASE_SIEGE_GROUP_1_SPEED}
            speed_defense={BASE_SIEGE_GROUP_1_SPEED}
          />

          <TroopProgress
            label="Archers"
            maxRange={maxRange}
            range_offense={
              BASE_ARCHER_RANGE +
              (hasArcherRangeSkillBook_offense ? ARCHER_SKILL_BOOK_BONUS : 0)
            }
            range_defense={
              BASE_ARCHER_RANGE +
              (hasArcherRangeSkillBook_defense ? ARCHER_SKILL_BOOK_BONUS : 0)
            }
            speed_offense={BASE_ARCHER_SPEED}
            speed_defense={BASE_ARCHER_SPEED}
          />

          <TroopProgress
            label="Ground"
            maxRange={maxRange}
            range_offense={BASE_GROUND_RANGE}
            range_defense={BASE_GROUND_RANGE}
            speed_offense={
              BASE_GROUND_SPEED *
              (hasGroundSpeedSkillBook_offense ? GROUND_SPEED_BOOK_BONUS : 1)
            }
            speed_defense={
              BASE_GROUND_SPEED *
              (hasGroundSpeedSkillBook_defense ? GROUND_SPEED_BOOK_BONUS : 1)
            }
          />

          <TroopProgress
            label="Mounted"
            maxRange={maxRange}
            range_offense={BASE_MOUNTED_RANGE}
            range_defense={BASE_MOUNTED_RANGE}
            speed_offense={
              BASE_MOUNTED_SPEED *
              (hasMountedSpeedSkillBook_offense ? MOUNTED_SPEED_BOOK_BONUS : 1)
            }
            speed_defense={
              BASE_MOUNTED_SPEED *
              (hasMountedSpeedSkillBook_defense ? MOUNTED_SPEED_BOOK_BONUS : 1)
            }
          />
        </div>
      </div>
    </div>
  );
}
