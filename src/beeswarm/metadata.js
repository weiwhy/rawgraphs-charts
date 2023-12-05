import icon from './beeswarm.svg'
import thumbnail from './beeswarm_thumb.svg'

export const metadata = {
  name: '蜂群图',
  id: 'rawgraphs.beeswarm',
  thumbnail,
  icon,
  categories: ['distributions', 'time series', 'proportions'],
  description:
    '它显示项目在连续维度上的分布。每条（线）都用放置在水平轴上的一个点表示。垂直尺寸用于避免圆圈之间的重叠，显示它们的分布。点的面积可用于编码进一步的定量维度和带有颜色的定量或分类维度。',
  code:
    'https://github.com/rawgraphs/rawgraphs-charts/tree/master/src/beeswarm',
  tutorial: 'https://rawgraphs.io/learning/how-to-make-a-beeswarm-plot/',
}
