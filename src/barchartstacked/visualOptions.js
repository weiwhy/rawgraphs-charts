export const visualOptions = {
  marginTop: {
    type: 'number',
    label: '边距（顶部）',
    default: 20,
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
    default: 20,
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

  stacksPadding: {
    type: 'number',
    label: '间距',
    default: 1,
    group: '图表',
  },

  stacksOrder: {
    type: 'text',
    label: 'Sort stacks by',
    group: '图表',
    options: ['Earliest', 'Ascending', 'Descending', 'None', 'Reverse'],
    default: 'None',
  },

  SortXAxisBy: {
    type: 'text',
    label: 'Sort X axis by',
    group: '图表',
    options: [
      'Total value (descending)',
      'Total value (ascending)',
      'Name',
      'Original',
    ],
    default: 'Name',
  },

  useSameScale: {
    type: 'boolean',
    label: '使用相同比例',
    default: true,
    group: '坐标系',
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
      { label: 'Name', value: 'name' },
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

  repeatAxesLabels: {
    type: 'boolean',
    label: 'Repeat axis labels for each series',
    default: false,
    group: '坐标系',
  },

  showGrid: {
    type: 'boolean',
    label: '显示坐标系网格',
    default: true,
    group: '坐标系',
  },

  colorScale: {
    type: 'colorScale',
    label: '色标',
    dimension: 'bars',
    default: {
      scaleType: 'ordinal',
      interpolator: 'interpolateSpectral',
    },
    group: '颜色',
  },
}
