export const visualOptions = {
  marginTop: {
    type: 'number',
    label: '边距（顶部）',
    default: 30,
    group: '画板',
  },

  marginRight: {
    type: 'number',
    label: '边距 (右)',
    default: 20,
    group: '画板',
  },

  marginBottom: {
    type: 'number',
    label: '边距（底部）',
    default: 0,
    group: '画板',
  },

  marginLeft: {
    type: 'number',
    label: '边距（左）',
    default: 20,
    group: '画板',
  },

  showDots: {
    type: 'boolean',
    label: 'Show dots on data values',
    default: true,
    group: '图表',
  },

  dotsDiameter: {
    type: 'number',
    label: 'Dots diameter',
    default: 2,
    group: '图表',
    disabled: {
      showDots: false,
    },
  },

  innerDiameter: {
    type: 'number',
    label: 'Inner diameter',
    default: 0,
    group: '图表',
  },

  interpolation: {
    type: 'text',
    label: 'Curve type',
    default: 'Catmull–Rom',
    options: ['Basis', 'Cardinal', 'Catmull–Rom', 'Linear'],
    group: '图表',
  },

  fillOpacity: {
    type: 'number',
    label: 'Fill opacity',
    default: 0.5,
    step: 0.1,
    min: 0,
    max: 1,
    group: '图表',
  },

  labelsPadding: {
    type: 'number',
    label: 'Axis labels padding',
    default: 10,
    group: '标签',
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

  columnsNumber: {
    type: 'number',
    label: '列数',
    default: 0,
    group: '坐标系',
  },

  sortSeriesBy: {
    type: 'text',
    label: 'Sort series by',
    group: '坐标系',
    options: [
      { label: 'Total value (descending)', value: 'valueDescending' },
      { label: 'Total value (ascending)', value: 'valueAscending' },
      { label: 'Name', value: 'nameAscending' },
      { label: 'Original', value: 'none' },
    ],
    default: 'valueDescending',
  },

  showSeriesLabels: {
    type: 'boolean',
    label: '显示坐标系标题',
    default: true,
    group: '坐标系',
  },

  showGrid: {
    type: 'boolean',
    label: '显示坐标系网格',
    default: true,
    group: '坐标系',
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
}
