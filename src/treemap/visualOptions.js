export const visualOptions = {
  marginTop: {
    type: 'number',
    label: '边距（顶部）',
    default: 10,
    group: '画板',
  },

  marginRight: {
    type: 'number',
    label: '边距 (右)',
    default: 10,
    group: '画板',
  },

  marginBottom: {
    type: 'number',
    label: '边距（底部）',
    default: 10,
    group: '画板',
  },

  marginLeft: {
    type: 'number',
    label: '边距（左）',
    default: 10,
    group: '画板',
  },

  showLegend: {
    type: 'boolean',
    label: '显示图例',
    default: false,
    group: '画板',
  },

  legendWidth: {
    type: 'number',
    label: '图例宽度',
    default: 200,
    group: '画板',
    disabled: {
      showLegend: false,
    },
    container: 'width',
    containerCondition: {
      showLegend: true,
    },
  },

  tiling: {
    type: 'text',
    label: 'Tiling method',
    group: '图表',
    options: [
      { label: 'Binary', value: 'treemapBinary' },
      { label: 'Dice', value: 'treemapDice' },
      { label: 'Slice', value: 'treemapSlice' },
      { label: 'Slice and dice', value: 'treemapSliceDice' },
      { label: 'Squarify', value: 'treemapSquarify' },
    ],
    default: 'treemapSquarify',
  },

  padding: {
    type: 'number',
    label: '间距',
    default: 2,
    group: '图表',
  },

  colorScale: {
    type: 'colorScale',
    label: '色标',
    dimension: 'color',
    default: {
      scaleType: 'ordinal',
      interpolator: 'interpolateSpectral',
    },
    group: '颜色',
  },

  labelStyles: {
    type: 'text',
    label: 'Label',
    group: '标签',
    options: [
      { label: 'Primary', value: 'labelPrimary' },
      { label: 'Secondary', value: 'labelSecondary' },
      { label: 'Italic', value: 'labelItalic' },
    ],
    default: 'labelPrimary',
    repeatFor: 'label',
    repeatDefault: ['labelPrimary', 'labelSecondary', 'labelItalic'],
  },

  showLabelsOutline: {
    type: 'boolean',
    label: '显示轮廓',
    default: false,
    group: '标签',
  },

  showHierarchyLabels: {
    type: 'boolean',
    label: 'Show hierarchy labels',
    default: false,
    group: '标签',
  },
}
