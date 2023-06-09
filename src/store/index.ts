import create from "zustand";

const useEditorStore = create((set: any) => ({
  stateFromReactNative: 0,
  setStateFromReactNative: (stateFromReactNative: number) =>
    set({ stateFromReactNative }),
  isGPTError: false,
  setIsGPTError: (isGPTError: boolean) => set({ isGPTError }),
}));

export default useEditorStore;
