class Cubie {
  constructor(name) {
    this.name = name;
    this.colors = {}; // Will store face:color pairs
  }

  getColorOnFace(face) {
    return this.colors[face] || null;
  }
}

class CornerPiece extends Cubie {
  constructor(colors, name) {
    super(name);
    // A corner must have exactly 3 colors
    if (colors.length !== 3) {
      throw new Error("Corner piece must have exactly 3 colors");
    }
    this.type = "corner";
    // Store colors with their faces
    const [color1, color2, color3] = colors;
    this.colors = {
      face1: color1,
      face2: color2,
      face3: color3
    };
  }
}

class EdgePiece extends Cubie {
  constructor(colors, name) {
    super(name);
    // An edge must have exactly 2 colors
    if (colors.length !== 2) {
      throw new Error("Edge piece must have exactly 2 colors");
    }
    this.type = "edge";
    // Store colors with their faces
    const [color1, color2] = colors;
    this.colors = {
      face1: color1,
      face2: color2
    };
  }
}

class CentrePiece extends Cubie {
  constructor(color, name) {
    super(name);
    this.type = "center";
    // A center has only one color
    this.colors = {
      face: color
    };
  }
}

export { CornerPiece, EdgePiece, CentrePiece };
