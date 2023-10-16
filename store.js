import { create } from "zustand";

const store = (set) => ({
  photos: [],
  videos: [],
  nextPhotoPage: "",
  nextVideoPage: "",
  addPhotos: (photoList) =>
    set((state) => ({ photos: [...state.photos, ...photoList] })),
  addVideos: (videoList) =>
    set((state) => ({ videos: [...state.videos, ...videoList] })),
  setNextPhotoPage: (url) => set((state) => ({ nextPhotoPage: url })),
  setNextVideoPage: (url) => set((state) => ({ nextVideoPage: url })),
});

export const useStore = create(store);
