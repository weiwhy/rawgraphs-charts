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

  ringWidth: {
    type: 'number',
    label: 'Ring width',
    default: 10,
    group: '图表',
  },

  chordPadding: {
    type: 'number',
    label: 'Groups padding',
    default: 10,
    group: '图表',
  },

  ribbonPadding: {
    type: 'number',
    label: 'Chords padding',
    default: 1,
    group: '图表',
  },

  chordPaddingSource: {
    type: 'number',
    label: 'Source inner padding',
    default: 1,
    group: '图表',
  },

  chordPaddingTarget: {
    type: 'number',
    label: 'Target inner padding',
    default: 5,
    group: '图表',
  },

  sortNodesBy: {
    type: 'text',
    label: 'Sort groups by',
    group: '图表',
    options: [
      { label: 'Size (descending)', value: 'totalDescending' },
      { label: 'Size (ascending)', value: 'totalAscending' },
      { label: 'None', value: 'none' },
    ],
    default: 'none',
  },

  sortRibbonsBy: {
    type: 'text',
    label: 'Sort chords by',
    group: '图表',
    options: [
      { label: 'Size (descending)', value: 'totalDescending' },
      { label: 'Size (ascending)', value: 'totalAscending' },
      { label: 'None', value: 'none' },
    ],
    default: 'none',
  },

  showHeads: {
    type: 'boolean',
    label: 'Show arrow heads',
    default: true,
    group: '图表',
  },

  headRadius: {
    disabled: {
      showHeads: false,
    },
    type: 'number',
    label: 'Arrows heads radius',
    default: 20,
    group: '图表',
  },

  chordColors: {
    type: 'colorScale',
    label: 'Chord Colors',
    dimension: 'source',
    default: {
      scaleType: 'ordinal',
      interpolator: 'interpolateSpectral',
    },
    group: 'colors',
  },

  chordOpacity: {
    type: 'number',
    label: 'Chord opacity',
    default: 0.7,
    min: 0.1,
    max: 1,
    step: 0.05,
    group: 'colors',
  },

  showChordGroupLabels: {
    type: 'boolean',
    label: 'Show Chord Group Labels',
    default: true,
    group: 'labels',
  },

  showValues: {
    type: 'boolean',
    label: 'Show nodes values',
    default: true,
    group: 'labels',
  },
}
