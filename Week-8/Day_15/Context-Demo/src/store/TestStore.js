import { create } from "zustand";

//create store
export const useTest = create((set) => ({
  //state
  x: 10,
  y: 20,
  // function to modify state
  incrementX: () => set((state) => ({ x: state.x + 1 })),
  decrementX: () => set((state) => ({ x: state.x - 1 })),
  incrementY: () => set((state) => ({ y: state.y + 1 })),
  decrementY: () => set((state) => ({ y: state.y - 1 })),
  incrementYByValueV: (value) => set((state) => ({ y: state.y + value })),
}));
