import { create } from 'zustand'

const store = (set) => ({
  photos: [],
  videos: [],
  addPhotos: (photoList) => set((state) => ({ photos: [...state.photos, ...photoList] })),
  addVideos: (videoList) => set((state) => ({ videos: [...state.videos, ...videoList] })),
});

export const useStore = create(store);
