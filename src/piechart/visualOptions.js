export const visualOptions = {
  // Artboard
  marginTop: {
    type: 'number',
    label: '边距（顶部）',
    default: 10,
    group: '画板',
  },

  marginRight: {
    type: 'number',
    label: '边距 (右)',
    default: 2,
    group: '画板',
  },

  marginBottom: {
    type: 'number',
    label: '边距（底部）',
    default: 2,
    group: '画板',
  },

  marginLeft: {
    type: 'number',
    label: '边距（左）',
    default: 2,
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
  },

  // chart

  drawDonut: {
    type: 'boolean',
    label: '画成甜甜圈',
    default: false,
    group: '图表',
  },

  arcTichkness: {
    type: 'number',
    label: '甜甜圈厚度',
    default: 10,
    group: '图表',
    disabled: {
      drawDonut: false,
    },
  },

  sortArcsBy: {
    type: 'text',
    label: 'Sort arcs by',
    group: '坐标系',
    options: [
      { label: 'Size (descending)', value: 'totalDescending' },
      { label: 'Size (ascending)', value: 'totalAscending' },
      { label: 'Name', value: 'name' },
      { label: 'Original', value: 'original' },
    ],
    default: 'name',
  },

  // colors

  colorScale: {
    type: 'colorScale',
    label: '色标',
    domain: 'colorDomain',
    default: {
      scaleType: 'ordinal',
      interpolator: 'interpolateSpectral',
    },
    group: '颜色',
  },

  // labels

  showSeriesLabels: {
    type: 'boolean',
    label: 'Show pies titles',
    default: true,
    group: '标签',
  },

  showArcValues: {
    type: 'boolean',
    label: 'Show values on arcs',
    default: false,
    group: '标签',
  },

  // series

  sortPiesBy: {
    type: 'text',
    label: 'Sort pies by',
    group: '坐标系',
    options: [
      { label: 'Size (descending)', value: 'totalDescending' },
      { label: 'Size (ascending)', value: 'totalAscending' },
      { label: 'Name', value: 'name' },
      { label: 'Original', value: 'original' },
    ],
    default: 'name',
  },

  columnsNumber: {
    type: 'number',
    label: 'Grid columns',
    default: 0,
    group: '坐标系',
  },

  showGrid: {
    type: 'boolean',
    label: 'Show grid',
    default: false,
    group: '坐标系',
  },
}
