export interface DataProps {
  color: string;
  lineWidth: number;
  [extraProps: string]: unknown;
}

class Plugin {
  canvas: HTMLCanvasElement | null = null;

  oldX = -1;

  oldY = -1;

  name: string;

  constructor(initialValues?: { [key: string]: unknown }) {
    this.name = '';
    Object.assign(this, initialValues);
  }

  // plugin을 상속받은 클래스는 draw를 super로 처리한다.
  // 공통적으로 사용하므로 오염되지 않도록 초기화하는 역할
  draw(data: DataProps) {
    // x, y, color, lineWidth
    const context = this.canvas?.getContext('2d');
    if (!context) return;
    context.globalCompositeOperation = 'source-over';
    const { color, lineWidth } = data;

    context.strokeStyle = color;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.shadowColor = '';
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowBlur = 0;
    context.lineWidth = lineWidth;
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.direction = 'ltr';
    context.lineDashOffset = 0;
    context.miterLimit = 0;
    context.globalAlpha = 1;
    context.fillStyle = color;
  }
}

export default Plugin;
