import icon from './dendrogram.svg'
import thumbnail from './dendrogram_thumb.svg'

export const metadata = {
  name: '线性树状图',
  id: 'rawgraphs.lineardendrogram',
  thumbnail,
  icon,
  categories: ['hierarchies', 'proportions'],
  description:
    '它以树形结构显示分层结构的数据，其中根节点在左侧，叶子在右侧。 节点的大小可用于用大小编码进一步的定量维度以及用颜色编码定量或分类维度。',
  code:
    'https://github.com/rawgraphs/rawgraphs-charts/tree/master/src/dendrogram',
  tutorial: 'https://rawgraphs.io/learning/how-to-make-a-linear-dendrogram/',
}
