import icon from './circulardendrogram.svg'
import thumbnail from './circulardendrogram_thumb.svg'

export const metadata = {
  name: '圆形树状图',
  id: 'rawgraphs.circulardendrogram',
  thumbnail,
  icon,
  categories: ['层次结构', '比例'],
  description:
    '它以放射状树结构显示分层结构的数据，其中根节点位于中心，层次结构向外移动。 节点的面积可用于编码进一步的定量维度和带有颜色的定量或分类维度。',
  code:
    'https://github.com/rawgraphs/rawgraphs-charts/tree/master/src/circularDendrogram',
  tutorial: 'https://rawgraphs.io/learning/how-to-make-a-circular-dendrogram/',
}
