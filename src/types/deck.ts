enum VARIANT {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  p = 'p',
}

export type Content = {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline';
  positionX: number;
  positionY: number;
  fontWeight: string;
  value: string;
};

interface Color {
  percentage: number;
  color: string;
}

interface Gradient {
  angle: number;
  type: string;
  colors: Array<Color>;
}

export interface BGColor {
  mainColor: string;
  gradient: Gradient;
}

export interface SlideConfig {
  id: string;
  contents: Array<Content>;
  createdAt: Date;
  updatedAt: Date;
  bgColor?: BGColor;
}

export interface DeckConfig {
  id: string;
  name: string;
  slides: Array<SlideConfig>;
  createdAt: Date;
  updatedAt: Date;
  defaultBgColor: BGColor;
}

export interface Dimension {
  width: number;
  height: number;
}

export interface Position {
  x: number;
  y: number;
}

export interface ProcessedSlideConfig extends SlideConfig {
  contents: Array<Content & Position>;
}
