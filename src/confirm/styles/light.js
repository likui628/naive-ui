import create from '../../styles/_utils/create-component-base'

export default create({
  theme: 'light',
  name: 'Confirm',
  getDerivedVariables ({ base, derived }) {
    const {
      textColorPrimary,
      textColorSecondary,
      cardColor,
      closeColor,
      closeHoverColor,
      closeActiveColor,
      infoColor,
      successColor,
      warningColor,
      errorColor
    } = derived
    return {
      titleTextColor: textColorPrimary,
      textColor: textColorSecondary,
      color: cardColor,
      closeColor: closeColor,
      closeColorHover: closeHoverColor,
      closeColorActive: closeActiveColor,
      iconColorInfo: infoColor,
      iconColorSuccess: successColor,
      iconColorWarning: warningColor,
      iconColorError: errorColor,
      borderRadius: base.borderRadius,
      titleFontWeight: base.strongFontWeight
    }
  }
})
