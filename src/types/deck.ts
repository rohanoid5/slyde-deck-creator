export type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'inherit'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'overline';

export type Content = {
  id: string;
  variant: Variant;
  x: number;
  y: number;
  xPercentage: number;
  yPercentage: number;
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
