// class css, color, name, id

class Icon {
  constructor(name, color, css, size) {
    this.name = name;
    this.color = color;
    this.css = css;
    this.size = size;
  }

  id() {
    return this.name;
  }
}
