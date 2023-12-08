export const visualOptions = {
  marginTop: {
    type: 'number',
    label: '边距（顶部）',
    default: 50,
    group: '画板',
  },

  marginRight: {
    type: 'number',
    label: '边距 (右)',
    default: 50,
    group: '画板',
  },

  marginBottom: {
    type: 'number',
    label: '边距（底部）',
    default: 50,
    group: '画板',
  },

  marginLeft: {
    type: 'number',
    label: '边距（左）',
    default: 50,
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

  xOrigin: {
    type: 'boolean',
    label: 'Set X origin to 0',
    default: false,
    group: '图表',
    requiredDimensions: ['x', 'y'],
  },

  yOrigin: {
    type: 'boolean',
    label: 'Set Y origin to 0',
    default: false,
    group: '图表',
    requiredDimensions: ['x', 'y'],
  },

  showStroke: {
    type: 'boolean',
    label: 'Show stroke',
    default: false,
    group: '图表',
    requiredDimensions: ['x', 'y'],
  },

  showPoints: {
    type: 'boolean',
    label: 'Show dots on data values',
    default: false,
    group: '图表',
    requiredDimensions: ['x', 'y'],
  },

  dotsDiameter: {
    type: 'number',
    label: 'Dots diameter',
    default: 2,
    group: '图表',
    disabled: {
      showPoints: false,
    },
    requiredDimensions: ['x', 'y'],
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

  autoHideLabels: {
    type: 'boolean',
    label: '自动隐藏标签',
    default: false,
    group: '标签',
  },
}
