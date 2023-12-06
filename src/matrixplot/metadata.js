import icon from './matrixplot.svg'
import thumbnail from './heatmap_thumb.svg'

export const metadata = {
  name: '矩阵图',
  id: 'rawgraphs.matrixplot',
  thumbnail,
  icon,
  categories: ['correlations', 'time series', 'proportions'],
  description:
    '它允许比较两个分类维度，将它们放置在水平轴和垂直轴上。 每个字形（正方形或圆形）代表两个维度之间可能的相关性。 相关的定量变量可以用大小和/或颜色来表示。',
  code:
    'https://github.com/rawgraphs/rawgraphs-charts/tree/master/src/matrixplot',
  tutorial: 'https://rawgraphs.io/learning/how-to-make-a-matrix-plot/',
}
