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
    default: 20,
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
    default: 20,
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

  padding: {
    type: 'number',
    label: '间距',
    default: 2,
    group: '图表',
  },

  sortCirclesBy: {
    type: 'text',
    label: 'Sort circles by',
    group: '图表',
    options: [
      { label: 'Size (descending)', value: 'descending' },
      { label: 'Size (ascending)', value: 'ascending' },
      { label: 'Original', value: 'original' },
    ],
    default: 'descending',
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

  showHierarchyLabels: {
    type: 'boolean',
    label: 'Show hierarchy labels',
    default: false,
    group: '标签',
  },

  hierarchyLabelsStyle: {
    type: 'text',
    label: 'Hierarchy labels position',
    group: '标签',
    options: [
      { label: 'On path', value: 'onPath' },
      { label: 'On point', value: 'onPoint' },
    ],
    default: 'onPoint',
    disabled: {
      showHierarchyLabels: false,
    },
  },

  autoHideLabels: {
    type: 'boolean',
    label: '自动隐藏标签',
    default: false,
    group: '标签',
  },
}
