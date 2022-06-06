import React, { useRef, useEffect, useCallback, useState } from 'react';
import Plugin from './plugins/plugin';

/**
 * NOTE: 그림판에는 여러 Tool이 있을 수 있다
 * 그래서 언제든지 확장 가능해야 한다.
 */

// 어떤 plugin을 사용할 지
interface PaintProps {
  command?: 'pen';
  color?: string;
  lineWidth?: number;
  width?: number;
  height?: number;
  style?: { [key: string]: unknown };
  className?: string;
  plugins: Plugin[];
}

// ANCHOR: canvas 맨 왼쪽 꼭지점이 0, 0이 될 수 있도록 좌표를 구한다
const calculateCoord = (e: MouseEvent, canvas: HTMLCanvasElement) => {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.pageX - rect.left - window.scrollX,
    y: e.pageY - rect.top - window.scrollY,
  };
};

// TODO: mouseup, mousedown, mouseleave 등 필요
const Paint: React.FC<PaintProps> = ({
  command = 'pen',
  color = '#000000',
  lineWidth = 2,
  width = 800,
  height = 600,
  style,
  className,
  plugins,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentCommand, setCurrentCommand] = useState(command);
  const [currentLineWidth, setCurrentLineWidth] = useState(lineWidth);
  const [currentColor, setCurrentColor] = useState(color);
  const [currentPlugins, setCurrentPlugins] = useState<{
    [key: string]: Plugin;
  }>({});
  const [drawing, setDrawing] = useState(false);
  // window 해상도 스케일을 적용한다.
  const scale = typeof window === 'undefined' ? 1 : window.devicePixelRatio;
  // useEffect를 통해 sideEffect 설정
  const canvasDefaultStyle = {
    userSelect: 'none',
    WebkitUserSelect: 'none',
  } as const;

  // scale에 의해 크기가 변경되므로 맞춰주기 위해 사용한다
  const canvasSizeStyle = {
    width,
    height,
  };

  useEffect(() => {
    plugins.forEach((plugin) => {
      Object.assign(plugin, { canvas: canvasRef.current });
    });

    setCurrentPlugins(
      Object.assign(
        {},
        ...plugins.map((plugin) => ({ [plugin.name]: plugin })),
      ),
    );
  }, [plugins]);

  useEffect(() => {
    if (!canvasRef.current) return;

    canvasRef.current.width = width * scale;
    canvasRef.current.height = height * scale;

    canvasRef.current.getContext('2d')?.scale(scale, scale);
  }, [height, scale, width]);

  const handleDrowStart = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      e.preventDefault();
      if (!canvasRef.current) return;
      const { x, y } = calculateCoord(e.nativeEvent, canvasRef.current);
      // plugin에 대한 데이터 처리
      currentPlugins[currentCommand].draw({
        x,
        y,
        state: 'draw-start',
        width,
        height,
        lineWidth: currentLineWidth,
        color: currentColor,
        scale,
      });
      setDrawing(true);
    },
    [
      currentPlugins,
      currentCommand,
      width,
      height,
      currentLineWidth,
      currentColor,
      scale,
    ],
  );
  const handleDrowing = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      e.preventDefault();
      if (!canvasRef.current) return;
      if (!drawing) return;

      const { x, y } = calculateCoord(e.nativeEvent, canvasRef.current);
      // plugin에 대한 데이터 처리
      currentPlugins[currentCommand].draw({
        x,
        y,
        state: 'drawing',
        width,
        height,
        lineWidth: currentLineWidth,
        color: currentColor,
        scale,
      });
    },
    [
      drawing,
      currentPlugins,
      currentCommand,
      width,
      height,
      currentLineWidth,
      currentColor,
      scale,
    ],
  );
  const handleDrawFinish = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      e.preventDefault();
      if (!canvasRef.current) return;
      if (!drawing) return;

      const { x, y } = calculateCoord(e.nativeEvent, canvasRef.current);
      // plugin에 대한 데이터 처리
      currentPlugins[currentCommand].draw({
        x,
        y,
        state: 'draw-finish',
        width,
        height,
        lineWidth: currentLineWidth,
        color: currentColor,
        scale,
      });

      setDrawing(false);
    },
    [
      drawing,
      currentPlugins,
      currentCommand,
      width,
      height,
      currentLineWidth,
      currentColor,
      scale,
    ],
  );

  return (
    <canvas
      ref={canvasRef}
      style={{ ...canvasDefaultStyle, ...canvasSizeStyle, ...style }}
      className={className}
      onMouseDown={handleDrowStart}
      onMouseMove={handleDrowing}
      onMouseUp={handleDrawFinish}
    />
  );
};

export default Paint;
