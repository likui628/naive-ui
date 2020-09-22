import create from '../../styles/_utils/create-component-base'
import commonVariables from './_common'

export default create({
  theme: 'dark',
  name: 'Descriptions',
  getDerivedVariables ({ base, derived }) {
    const {
      tableHeaderColorOverlay,
      textColorPrimaryOverlay,
      textColorSecondaryOverlay,
      cardColor,
      modalColor,
      dividerColorOverlay
    } = derived
    const {
      borderRadius,
      strongFontWeight
    } = base
    return {
      ...commonVariables,
      headerColor: tableHeaderColorOverlay,
      headerTextColor: textColorPrimaryOverlay,
      headerFontWeight: strongFontWeight,
      contentTextColor: textColorSecondaryOverlay,
      contentColor: cardColor,
      contentColorModal: modalColor,
      borderColor: dividerColorOverlay,
      borderRadius: borderRadius
    }
  }
})
