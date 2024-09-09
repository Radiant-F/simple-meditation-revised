import {
  ImgMedBeach,
  ImgMedRiver,
  ImgMedStars,
  ImgMedTrees,
  ImgMedUnderTree,
  ImgMedWaterfall,
} from "@/assets";
import { AVPlaybackSource } from "expo-av";

export const MeditationAudio: { [key: string]: AVPlaybackSource } = {
  "trees.mp3": require("@/assets/audio/trees.mp3"),
  "river.mp3": require("@/assets/audio/river.mp3"),
  "meditate-under-tree.mp3": require("@/assets/audio/meditate-under-tree.mp3"),
  "beach.mp3": require("@/assets/audio/beach.mp3"),
  "yosemite-stars.mp3": require("@/assets/audio/yosemite-stars.mp3"),
  "waterfall.mp3": require("@/assets/audio/waterfall.mp3"),
};

type MeditationProps = {
  id: number;
  title: string;
  image: string;
  audio: string;
}[];

export const MeditationData: MeditationProps = [
  {
    id: 1,
    title: "Mountains",
    image: ImgMedTrees,
    audio: "trees.mp3",
  },
  {
    id: 2,
    title: "Rivers",
    image: ImgMedRiver,
    audio: "river.mp3",
  },
  {
    id: 3,
    title: "Sunset",
    image: ImgMedUnderTree,
    audio: "meditate-under-tree.mp3",
  },
  {
    id: 4,
    title: "Beaches",
    image: ImgMedBeach,
    audio: "beach.mp3",
  },
  {
    id: 5,
    title: "Starry Night",
    image: ImgMedStars,
    audio: "yosemite-stars.mp3",
  },
  {
    id: 6,
    title: "Waterfall",
    image: ImgMedWaterfall,
    audio: "waterfall.mp3",
  },
];
