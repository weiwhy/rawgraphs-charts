export const visualOptions = {
  // Artboard
  marginTop: {
    type: 'number',
    label: '边距（顶部）',
    default: 0,
    group: '画板',
  },

  marginRight: {
    type: 'number',
    label: '边距 (右)',
    default: 0,
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
    default: 0,
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

  // series

  columnsNumber: {
    type: 'number',
    label: 'Grid columns',
    default: 0,
    group: '坐标系',
  },

  showSeriesLabels: {
    type: 'boolean',
    label: 'Show pies titles',
    default: true,
    group: '坐标系',
  },

  showGrid: {
    type: 'boolean',
    label: 'Show grid',
    default: false,
    group: '坐标系',
  },
}
