import { create } from 'zustand';

const store = (set) => ({
  photos: [],
  addPhotos: (photos) => set((state) => ({ photos: [...state.photos, ...photos] })),
});

const useStore = create(store);

export default useStore;