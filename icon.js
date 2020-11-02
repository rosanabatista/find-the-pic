class Icon {
  constructor(name, color, css, size, rotation) {
    this.name = name;
    this.color = color;
    this.css = css;
    this.size = size;
    this.rotation = rotation;
  }

  id() {
    return this.name;
  }
}
