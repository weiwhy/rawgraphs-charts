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

  sortGroupsBy: {
    type: 'text',
    label: 'Sort groups by',
    group: '图表',
    options: [
      { label: 'Original', value: '' },
      { label: 'Start date (ascending)', value: 'ascending' },
      { label: 'Start date (descending)', value: 'descending' },
      { label: 'Name', value: 'group' },
    ],
    default: '',
  },

  barPadding: {
    type: 'number',
    label: 'Padding (%)',
    default: 0,
    group: '图表',
    step: 0.1,
    min: 0,
    max: 1,
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

  alignLabels: {
    type: 'boolean',
    label: 'Labels position',
    default: false,
    group: '标签',
  },
}
