import { create } from "zustand";

export const useCubeInfoStore = create((set) => ({
  pieces: [
    // Corners
    {
      type: "corner",
      position: "ftl",
      colors: ["white", "green", "orange"],
      colourByFace: { f: "white", t: "green", l: "orange" }
    },
    {
      type: "corner",
      position: "ftr",
      colors: ["white", "green", "red"],
      colourByFace: { f: "white", t: "green", r: "red" }
    },
    {
      type: "corner",
      position: "fbl",
      colors: ["white", "blue", "orange"],
      colourByFace: { f: "white", b: "blue", l: "orange" }
    },
    {
      type: "corner",
      position: "fbr",
      colors: ["white", "blue", "red"],
      colourByFace: { f: "white", b: "blue", r: "red" }
    },
    {
      type: "corner",
      position: "btl",
      colors: ["yellow", "green", "orange"],
      colourByFace: { b: "yellow", t: "green", l: "orange" }
    },
    {
      type: "corner",
      position: "btr",
      colors: ["yellow", "green", "red"],
      colourByFace: { b: "yellow", t: "green", r: "red" }
    },
    {
      type: "corner",
      position: "bbl",
      colors: ["yellow", "blue", "orange"],
      colourByFace: { b: "yellow", b: "blue", l: "orange" }
    },
    {
      type: "corner",
      position: "bbr",
      colors: ["yellow", "blue", "red"],
      colourByFace: { b: "yellow", b: "blue", r: "red" }
    },
    // Edges
    {
      type: "edge",
      position: "ft",
      colors: ["white", "green"],
      colourByFace: { f: "white", t: "green" }
    },
    {
      type: "edge",
      position: "fr",
      colors: ["white", "red"],
      colourByFace: { f: "white", r: "red" }
    },
    {
      type: "edge",
      position: "fb",
      colors: ["white", "blue"],
      colourByFace: { f: "white", b: "blue" }
    },
    {
      type: "edge",
      position: "fl",
      colors: ["white", "orange"],
      colourByFace: { f: "white", l: "orange" }
    },
    {
      type: "edge",
      position: "bt",
      colors: ["yellow", "green"],
      colourByFace: { b: "yellow", t: "green" }
    },
    {
      type: "edge",
      position: "br",
      colors: ["yellow", "red"],
      colourByFace: { b: "yellow", r: "red" }
    },
    {
      type: "edge",
      position: "bb",
      colors: ["yellow", "blue"],
      colourByFace: { b: "yellow", b: "blue" }
    },
    {
      type: "edge",
      position: "bl",
      colors: ["yellow", "orange"],
      colourByFace: { b: "yellow", l: "orange" }
    },
    {
      type: "edge",
      position: "tr",
      colors: ["green", "red"],
      colourByFace: { t: "green", r: "red" }
    },
    {
      type: "edge",
      position: "tl",
      colors: ["green", "orange"],
      colourByFace: { t: "green", l: "orange" }
    },
    {
      type: "edge",
      position: "br",
      colors: ["blue", "red"],
      colourByFace: { b: "blue", r: "red" }
    },
    {
      type: "edge",
      position: "bl",
      colors: ["blue", "orange"],
      colourByFace: { b: "blue", l: "orange" }
    },
    // Centers
    {
      type: "center",
      position: "f",
      colors: ["white"]
    },
    {
      type: "center",
      position: "b",
      colors: ["yellow"]
    },
    {
      type: "center",
      position: "t",
      colors: ["green"]
    },
    {
      type: "center",
      position: "b",
      colors: ["blue"]
    },
    {
      type: "center",
      position: "r",
      colors: ["red"]
    },
    {
      type: "center",
      position: "l",
      colors: ["orange"]
    }
  ],
  colours: {
    top: [
      ["white", "white", "white"],
      ["white", "white", "white"],
      ["white", "white", "white"]
    ],
    front: [
      ["green", "green", "green"],
      ["green", "green", "green"],
      ["green", "green", "green"]
    ],
    left: [
      ["orange", "orange", "orange"],
      ["orange", "orange", "orange"],
      ["orange", "orange", "orange"]
    ],
    right: [
      ["red", "red", "red"],
      ["red", "red", "red"],
      ["red", "red", "red"]
    ],
    back: [
      ["blue", "blue", "blue"],
      ["blue", "blue", "blue"],
      ["blue", "blue", "blue"]
    ],
    bottom: [
      ["yellow", "yellow", "yellow"],
      ["yellow", "yellow", "yellow"],
      ["yellow", "yellow", "yellow"]
    ]
  }
}));
