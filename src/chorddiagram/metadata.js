import icon from './chorddiagram.svg'
import thumbnail from './chorddiagram_thumb.svg'

/*
Copied and adapted from:
https://github.com/rawgraphs/rawgraphs-charts/blob/master/docs/add-a-new-chart.md
*/

export const metadata = {
  name: '和弦图',
  id: 'rawgraphs.chorddiagram',
  thumbnail,
  icon,
  categories: ['网络'],
  description:
    '它显示节点之间的关系。节点大小表示传入和传出链接的总和。关系绘制为圆弧，其宽度表示其值。', //TODO
  code:
    'https://github.com/rawgraphs/rawgraphs-charts/tree/master/src/chorddiagram',
  tutorial: 'www.rawgraphs.io/learning/how-to-make-a-chord-diagram',
}
