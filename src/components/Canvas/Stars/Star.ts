import { hexToRgb } from '../../../utils';

export class Star {
  public x: number;
  public y: number;
  public radius: number;
  public rgb: any;
  public opacity: number = 1;
  public factor: number = 1;
  public increment: number = Math.random() * 0.01;
  public context: any;

  constructor(x: number, y: number, radius: number, color: string, context: any) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.rgb = hexToRgb(color);
    this.context = context;
  }

  public update() {
    if (this.opacity > 1) {
      this.factor = -1;
    } else if (this.opacity <= 0) {
      this.factor = 1;
    }
    this.opacity += this.increment * this.factor;

    this.draw();
  }

  private draw() {
    const c = this.context;
    c.save();
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.shadowColor = `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, ${this.opacity})`;
    c.fillStyle = `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, ${this.opacity})`;
    c.fill();
    c.closePath();
    c.restore();
  }
}
