import { create } from 'zustand'

const store = (set) => ({
  photos: [],
  addPhotos: (photoList) => set((state) => ({ photos: [...state.photos, ...photoList] })),
});

export const useStore = create(store);
