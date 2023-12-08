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

  bands: {
    type: 'number',
    label: 'Number of bands',
    default: 4,
    group: '图表',
  },

  padding: {
    type: 'number',
    label: '间距',
    default: 1,
    group: '图表',
  },

  interpolation: {
    type: 'text',
    label: 'Curve type',
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

  negativeStyle: {
    type: 'text',
    label: 'Show negative values as',
    group: '图表',
    options: [
      { label: 'Mirrored', value: 'mirrored' },
      { label: 'Offset', value: 'top' },
    ],
    default: 'mirrored',
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
