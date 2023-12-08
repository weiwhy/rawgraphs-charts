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

  minDiameter: {
    type: 'number',
    label: '最小直径',
    default: 1,
    group: '图表',
  },

  maxDiameter: {
    type: 'number',
    label: '最大直径',
    default: 20,
    group: '图表',
  },

  nodePadding: {
    type: 'number',
    label: '间距',
    default: 1,
    group: '图表',
  },

  sortSeriesBy: {
    type: 'text',
    label: 'Sort groups by',
    group: '坐标系',
    options: [
      'Total value (descending)',
      'Total value (ascending)',
      'Name',
      'Original',
    ],
    default: 'Original',
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

// showLegend,
// legendWidth,
