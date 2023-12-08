export const visualOptions = {
  // Artboard
  marginTop: {
    type: 'number',
    label: '边距（顶部）',
    default: 40,
    group: '画板',
  },

  marginRight: {
    type: 'number',
    label: '边距 (右)',
    default: 40,
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
    default: 40,
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

  // chart
  nonOverlap: {
    type: 'number',
    label: 'Label repelling force',
    default: 5,
    group: '图表',
  },

  showDots: {
    type: 'boolean',
    label: 'Show dots',
    default: true,
    group: '图表',
  },

  dotsDiameter: {
    type: 'number',
    label: 'Dots diameter',
    default: 5,
    group: '图表',
    disabled: {
      showDots: false,
    },
  },

  // series

  columnsNumber: {
    type: 'number',
    label: 'Grid columns',
    default: 0,
    group: '坐标系',
  },

  showSeriesLabels: {
    type: 'boolean',
    label: '显示坐标系标题',
    default: true,
    group: '坐标系',
  },

  showGrid: {
    type: 'boolean',
    label: 'Show grid',
    default: false,
    group: '坐标系',
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
}
