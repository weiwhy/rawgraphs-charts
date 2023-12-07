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
    default: 10,
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

  seed: {
    type: 'number',
    label: 'Seed for random computations',
    default: 0,
    // step: 0.1,
    // min: 0,
    // max: 1,
    group: '图表',
  },

  padding: {
    type: 'number',
    label: '间距',
    default: 2,
    group: '图表',
  },

  clipToPolygon: {
    type: 'boolean',
    label: 'Clip to polygon',
    default: true,
    group: '图表',
  },

  edges: {
    type: 'number',
    label: 'Polygon edges',
    default: 3,
    min: 3,
    group: '图表',
    disabled: {
      clipToPolygon: false,
    },
  },

  rotation: {
    type: 'number',
    label: 'Polygon rotation',
    default: 0,
    min: 0,
    max: 360,
    group: '图表',
    disabled: {
      clipToPolygon: false,
    },
  },

  isRegular: {
    type: 'boolean',
    label: 'Regular polygon',
    default: true,
    disabled: {
      clipToPolygon: false,
    },
    group: '图表',
  },

  colorScale: {
    type: 'colorScale',
    label: '色标',
    dimension: 'color',
    default: {
      scaleType: 'ordinal',
      interpolator: 'interpolateSpectral',
    },
    group: 'colors',
  },

  labelStyles: {
    type: 'text',
    label: 'Label',
    group: 'labels',
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
    label: 'Show outline',
    default: false,
    group: 'labels',
  },

  // showHierarchyLabels: {
  //   type: 'boolean',
  //   label: 'Show hierarchy labels',
  //   default: false,
  //   group: 'labels',
  // },
}
