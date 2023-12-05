import icon from './hexagonalBinning.svg'
import thumbnail from './hexagonalBinning_thumb.svg'

export const metadata = {
  name: '六边形分箱图',
  id: 'rawgraphs.hexagonalbinning',
  thumbnail,
  icon,
  categories: ['correlations', 'distributions'],
  description:
    '六边形分箱是一种解决有太多点开始重叠问题的方法。 六边形分箱绘制的是密度，而不是点。 点被分成网格六边形，并使用六边形的颜色或面积显示分布（每个六边形的点数）。',
  code:
    'https://github.com/rawgraphs/rawgraphs-charts/tree/master/src/hexagonalBinning',
  tutorial: 'https://rawgraphs.io/learning/how-to-make-an-hexagonal-binning/',
}
