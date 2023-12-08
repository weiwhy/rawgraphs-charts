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
    default: 30,
    group: '画板',
  },

  marginLeft: {
    type: 'number',
    label: '边距（左）',
    default: 50,
    group: '画板',
  },

  barsWidth: {
    type: 'number',
    label: 'Bars width',
    default: 20,
    group: '图表',
  },

  iqrMultiplier: {
    type: 'number',
    label: 'Interquartile range multiplier',
    default: 1.5,
    group: '图表',
  },

  dotsDiameter: {
    type: 'number',
    label: 'Dots diameter',
    default: 2,
    group: '图表',
  },

  yOrigin: {
    type: 'boolean',
    label: 'Set Y origin to 0',
    default: false,
    group: '图表',
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

  colorScale: {
    type: 'colorScale',
    label: '色标',
    dimension: 'color',
    default: {
      scaleType: 'ordinal',
      interpolator: 'schemeCategory10',
    },
    group: '颜色',
  },

  showValues: {
    type: 'boolean',
    label: 'Show boxpot values',
    default: true,
    group: '标签',
  },
}
