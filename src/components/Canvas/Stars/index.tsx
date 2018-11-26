import React, { Component, RefObject } from 'react';
import { randomValue, hexToRgb } from '../../../utils';
import { Star } from './Star';

export default class Stars extends Component {
  private canvasRef: RefObject<HTMLCanvasElement> = React.createRef<HTMLCanvasElement>();
  private canvas!: HTMLCanvasElement;
  private parent!: HTMLElement;
  private canvasContext!: CanvasRenderingContext2D;
  private isClick: boolean = false;
  private colors: string[] = ['#ffd27d', '#ffa371', '#fffa86', 'a6a8ff'];
  private stars: Star[] = [];
  private starsNumber = 1050;
  private opacity: number = 1;
  private w = 5e-4;
  private r = 0;

  constructor(props: any) {
    super(props);
    this.onResize = this.onResize.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  public componentDidMount() {
    this.setup();
    window.addEventListener('resize', this.onResize);
    this.parent.addEventListener('mousedown', this.onMouseDown);
    this.parent.addEventListener('touchstart', this.onMouseDown);
    this.parent.addEventListener('mouseup', this.onMouseUp);
    this.parent.addEventListener('touchend', this.onMouseUp);
    this.animate();
  }

  public onResize() {
    this.setup();
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
    this.parent.removeEventListener('mousedown', this.onMouseDown);
    this.parent.removeEventListener('touchstart', this.onMouseDown);
    this.parent.removeEventListener('mouseup', this.onMouseUp);
    this.parent.removeEventListener('touchend', this.onMouseUp);
  }

  public shouldComponentUpdate() {
    return false;
  }

  public render() {
    return <canvas ref={this.canvasRef}/>;
  }

  private onMouseDown(e: MouseEvent | Event) {
    if (e instanceof MouseEvent && e.button === 0) {
      this.isClick = true;
    } else if (e instanceof TouchEvent) {
      this.isClick = true;
    }
  }

  private  onMouseUp(e: MouseEvent | Event) {
    if (e instanceof MouseEvent && e.button === 0) {
      this.isClick = false;
    } else if (e instanceof TouchEvent) {
      this.isClick = false;
    }
  }

  private setup() {
    this.canvas = this.canvasRef.current as HTMLCanvasElement;
    this.parent = this.canvas.parentElement as HTMLElement;
    this.canvasContext = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.init();
  }

  private init() {
    this.stars = [];
    for (let i = 0; i < this.starsNumber; i++) { // tslint:disable-line no-increment-decrement
      const radius = 2 * Math.random();
      const x = Math.random() * (this.canvas.width + 200) - (this.canvas.width + 200) / 2;
      const y = Math.random() * (this.canvas.width + 200) - (this.canvas.width + 200) / 2;
      this.stars.push(new Star(x, y, radius, randomValue(this.colors), this.canvasContext));
    }
  }

  private animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    if (this.canvasContext && this.canvas) {
      this.canvasContext.save();
      if (this.isClick) {
        this.opacity += 0.03 * (0.01 - this.opacity);
        this.w += 0.01 * (0.02 - this.w);
      } else {
        this.opacity += 0.01 * (1 - this.opacity);
        this.w += 0.01 * (0.001 - this.w);
      }
      const rgb = hexToRgb('#2f365f');
      this.canvasContext.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${this.opacity})`;
      this.r += this.w;
      this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.canvasContext.translate(this.canvas.width / 2, this.canvas.height / 2);
      this.canvasContext.rotate(this.r);

      this.stars.forEach(s => s.update());
      this.canvasContext.restore();
    }
  }
}
