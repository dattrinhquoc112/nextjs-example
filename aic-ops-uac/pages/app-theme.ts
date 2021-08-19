const BG_TXT_WHITE = `#ffffff`
const BG_GREY = `#f6f6f6`
const BG_MIDDLE_BLUE = `#0068b8`
const BG_LIGHT_BLUE = `#00b3ec`
const TXT_GREY = `#666666`
const TXT_BLACK = `#000000`
const BG_WHITE = '#ffffff'
const BG_RED = '#ff4040'

export const theme = {
  leftBar: {
    background: BG_LIGHT_BLUE,
    textColor: BG_TXT_WHITE,
  },
  rightBar: {
    background: BG_GREY,
  },
  mainPanel: {
    background: BG_GREY,
    sectionBackground: BG_WHITE,
    /** */
    textColor: TXT_BLACK,
    lightTextColor: TXT_GREY,
    headingTextColor: BG_MIDDLE_BLUE,
    /** */
    button: {
      background: BG_MIDDLE_BLUE,
      textColor: BG_TXT_WHITE
    },
    warningButton: {
      background: BG_RED,
      textColor: BG_TXT_WHITE
    }
  },
}

export type ITheme = typeof theme;
export default theme
