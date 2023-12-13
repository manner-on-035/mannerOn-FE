const colors = {
  white: '#FFFFFF',
  gray20: '#F6F6F6',
  gray30: '#E3E3E3',
  gray40: '#C7C8C8',
  gray50: '#828382',
  darkgrey: '#212221',
  primary: '#000000',
  secondary: '#FF5624',
  negative: '#FF4545',
  warning: '#FFC82C',
} as const;

interface Font {
  weight: 400 | 500 | 700;
  size: number;
  lineHeight: number;
  notoSans?: boolean;
}

function FONT({ weight, size, lineHeight, notoSans }: Font): string {
  return `
    font-family: ${notoSans ? 'Noto Sans' : 'Pretendard'};
    font-weight: ${weight};
    font-size: ${size}px;
    line-height: ${lineHeight}px;
  `;
}

const fonts = {
  h1: FONT({ weight: 700, size: 30, lineHeight: 42 }),
  h2: FONT({ weight: 700, size: 24, lineHeight: 32}),
  h3: FONT({ weight: 700, size: 20, lineHeight: 28}),
  h4: FONT({ weight: 700, size: 18, lineHeight: 24}),
  body1: FONT({ weight: 400, size: 16, lineHeight: 22}),
  body1_medium: FONT({ weight: 500, size: 16, lineHeight: 22}),
  body2: FONT({ weight: 400, size: 14, lineHeight: 18}),
  body2_medium: FONT({ weight: 500, size: 14, lineHeight: 18 }),
  body2_bold: FONT({ weight: 700, size: 14, lineHeight: 18 }),
  CTA_small: FONT({ weight: 400, size: 12, lineHeight: 12 }),
  CTA_medium: FONT({ weight: 700, size: 16, lineHeight: 22 }),
} as const;

const theme = {
  colors,
  fonts,
} as const;

export default theme;
