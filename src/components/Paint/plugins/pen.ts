import Plugin, { DataProps } from './plugin';

interface PenPluginDataProps extends DataProps {
  x: number;
  y: number;
  state: 'draw-start' | 'drawing' | 'draw-finish';
}

class PenPlugin extends Plugin {
  oldX = -1;

  oldY = -1;

  constructor(initialValues?: { [key: string]: unknown }) {
    super({
      ...initialValues,
      name: 'pen',
    });
  }

  draw(data: PenPluginDataProps): void {
    super.draw(data);
    const context = this.canvas?.getContext('2d');
    if (!context) return;

    const { x, y, state } = data;
    if (this.oldX === -1) this.oldX = x;
    if (this.oldY === -1) this.oldY = y;
    if (state === 'draw-start' || state === 'drawing') {
      // 그리기 시작
      context.beginPath();
      // 라인을 어디서부터 그릴지?
      context.moveTo(this.oldX, this.oldY);
      context.lineTo(x, y);
      context.stroke();
      context.closePath();
      this.oldX = x;
      this.oldY = y;
    } else {
      this.oldX = -1;
      this.oldY = -1;
    }
  }
}

export default PenPlugin;
