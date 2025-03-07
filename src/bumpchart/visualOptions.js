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

  interpolation: {
    type: 'text',
    label: 'Curves type',
    default: 'curveBumpX',
    options: [
      { label: 'Basis', value: 'curveBasis' },
      { label: 'Bump', value: 'curveBumpX' },
      { label: 'Cardinal', value: 'curveCardinal' },
      { label: 'Catmull–Rom', value: 'curveCatmullRom' },
      { label: 'Linear', value: 'curveLinear' },
      { label: 'Monotone X', value: 'curveMonotoneX' },
      { label: 'Natural', value: 'curveNatural' },
      { label: 'Step', value: 'curveStep' },
      { label: 'Step After', value: 'curveStepAfter' },
      { label: 'Step Before', value: 'curveStepBefore' },
    ],
    group: '图表',
  },

  streamsOffset: {
    type: 'text',
    label: 'Streams vertical alignment',
    group: '图表',
    options: [
      { label: 'Expand', value: 'stackOffsetExpand' },
      { label: 'Silhouette', value: 'stackOffsetSilhouette' },
      { label: 'None', value: 'stackOffsetNone' },
    ],
    default: 'stackOffsetNone',
  },

  streamsPadding: {
    type: 'number',
    label: '间距',
    default: 1,
    group: '图表',
  },

  showYAxis: {
    type: 'boolean',
    label: 'Show Y axis',
    default: false,
    group: '图表',
    disabled: {
      streamsOffset: 'stackOffsetSilhouette',
    },
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
      { label: 'Total value (descending)', value: 'totalAscending' },
      { label: 'Total value (ascending)', value: 'totalDescending' },
      { label: 'Name', value: 'name' },
      { label: 'Original', value: 'original' },
    ],
    default: 'totalDescending',
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
    default: false,
    group: '坐标系',
  },

  colorScale: {
    type: 'colorScale',
    label: '色标',
    dimension: 'streams',
    default: {
      scaleType: 'ordinal',
      interpolator: 'interpolateSpectral',
    },
    group: '颜色',
  },

  showLabels: {
    type: 'boolean',
    label: 'Show streams labels',
    default: true,
    group: '标签',
  },

  labelsType: {
    type: 'text',
    label: 'Labels position',
    group: '标签',
    options: ['On path', 'On point'],
    default: 'On point',
    disabled: {
      showLabels: false,
    },
  },

  showLabelsOutline: {
    type: 'boolean',
    label: '显示轮廓',
    default: false,
    group: '标签',
    disabled: {
      showLabels: false,
    },
  },
}
