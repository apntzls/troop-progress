import { create } from "zustand";

export type State = {
  hasSiegeRangeSkillBook_offense: boolean;
  hasSiegeRangeSkillBook_defense: boolean;
  siegeRangeBonus_offense: number;
  siegeRangeBonus_defense: number;
  hasArcherRangeSkillBook_offense: boolean;
  hasArcherRangeSkillBook_defense: boolean;
  hasGroundSpeedSkillBook_offense: boolean;
  hasGroundSpeedSkillBook_defense: boolean;
  hasMountedSpeedSkillBook_offense: boolean;
  hasMountedSpeedSkillBook_defense: boolean;
  turn: number;
  goesFirst_offense: boolean;
  goesFirst_defense: boolean;
};

type Actions = {
  toggleSiegeRangeSkillBook_offense: () => void;
  toggleSiegeRangeSkillBook_defense: () => void;
  setSiegeRangeBonus_offense: (bonus: number) => void;
  setSiegeRangeBonus_defense: (bonus: number) => void;

  toggleArcherRangeSkillBook_offense: () => void;
  toggleArcherRangeSkillBook_defense: () => void;

  toggleGroundSpeedSkillBook_offense: () => void;
  toggleGroundSpeedSkillBook_defense: () => void;

  toggleMountedSpeedSkillBook_offense: () => void;
  toggleMountedSpeedSkillBook_defense: () => void;

  setTurn: (turn: number) => void;
  toggleGoesFirst_offense: () => void;
  toggleGoesFirst_defense: () => void;
  reset: () => void;
};

export const initialState = {
  hasSiegeRangeSkillBook_offense: false,
  hasSiegeRangeSkillBook_defense: false,
  siegeRangeBonus_offense: 0,
  siegeRangeBonus_defense: 0,
  hasArcherRangeSkillBook_offense: false,
  hasArcherRangeSkillBook_defense: false,
  hasGroundSpeedSkillBook_offense: false,
  hasGroundSpeedSkillBook_defense: false,
  hasMountedSpeedSkillBook_offense: false,
  hasMountedSpeedSkillBook_defense: false,
  turn: 0,
  goesFirst_offense: false,
  goesFirst_defense: false
};

export const useControls = create<State & Actions>((set) => ({
  ...initialState,
  toggleSiegeRangeSkillBook_offense: () => {
    set((state) => ({
      hasSiegeRangeSkillBook_offense: !state.hasSiegeRangeSkillBook_offense
    }));
  },
  toggleSiegeRangeSkillBook_defense: () => {
    set((state) => ({
      hasSiegeRangeSkillBook_defense: !state.hasSiegeRangeSkillBook_defense
    }));
  },
  setSiegeRangeBonus_offense: (bonus) => {
    set({ siegeRangeBonus_offense: bonus });
  },
  setSiegeRangeBonus_defense: (bonus) => {
    set({ siegeRangeBonus_defense: bonus });
  },

  toggleArcherRangeSkillBook_offense: () => {
    set((state) => ({
      hasArcherRangeSkillBook_offense: !state.hasArcherRangeSkillBook_offense
    }));
  },
  toggleArcherRangeSkillBook_defense: () => {
    set((state) => ({
      hasArcherRangeSkillBook_defense: !state.hasArcherRangeSkillBook_defense
    }));
  },

  toggleGroundSpeedSkillBook_offense: () => {
    set((state) => ({
      hasGroundSpeedSkillBook_offense: !state.hasGroundSpeedSkillBook_offense
    }));
  },
  toggleGroundSpeedSkillBook_defense: () => {
    set((state) => ({
      hasGroundSpeedSkillBook_defense: !state.hasGroundSpeedSkillBook_defense
    }));
  },

  toggleMountedSpeedSkillBook_offense: () => {
    set((state) => ({
      hasMountedSpeedSkillBook_offense: !state.hasMountedSpeedSkillBook_offense
    }));
  },
  toggleMountedSpeedSkillBook_defense: () => {
    set((state) => ({
      hasMountedSpeedSkillBook_defense: !state.hasMountedSpeedSkillBook_defense
    }));
  },

  setTurn: (turn) => {
    set({ turn });
  },
  toggleGoesFirst_offense: () => {
    set((state) => ({
      goesFirst_offense: !state.goesFirst_offense,
      goesFirst_defense: !state.goesFirst_offense && false
    }));
  },
  toggleGoesFirst_defense: () => {
    set((state) => ({
      goesFirst_offense: !state.goesFirst_defense && false,
      goesFirst_defense: !state.goesFirst_defense
    }));
  },
  reset: () => set(initialState)
}));
