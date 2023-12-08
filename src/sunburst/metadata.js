import icon from './sunburst.svg'
import thumbnail from './sunburst_thumb.svg'

export const metadata = {
  name: '旭日图',
  id: 'rawgraphs.sunburst',
  thumbnail,
  icon,
  categories: ['层次结构', '比例'],
  description:
    '它使用同心圆显示分层结构的数据和相关的定量维度。 中心的圆圈代表根节点，层次结构从中心向外移动。 每条弧线的角度对应于定性维度。',
  code:
    'https://github.com/rawgraphs/rawgraphs-charts/tree/master/src/sunburst',
  tutorial: 'https://rawgraphs.io/learning/how-to-make-a-sunburst-diagram/',
}
