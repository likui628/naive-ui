import create from '../../styles/_utils/create-component-base'
import commonVariables from './_common'

export default create({
  theme: 'dark',
  name: 'Card',
  getDerivedVariables ({ base, derived }) {
    const {
      borderRadius
    } = base
    return {
      ...commonVariables,
      color: derived.cardColor,
      textColor: derived.textColorSecondaryOverlay,
      titleTextColor: derived.textColorPrimaryOverlay,
      borderColor: derived.dividerColorOverlay,
      actionColor: derived.actionColorOverlay,
      titleFontWeight: base.strongFontWeight,
      closeColor: derived.closeOverlayColor,
      closeColorHover: derived.closeHoverOverlayColor,
      closeColorActive: derived.closeActiveOverlayColor,
      borderRadius
    }
  }
})
