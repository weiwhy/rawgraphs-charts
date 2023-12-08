import icon from './voronoitreemap.svg'
import thumbnail from './voronoitreemap_thumb.svg'

export const metadata = {
  name: '树形图 (Voronoi)',
  id: 'rawgraphs.voronoitreemap',
  thumbnail,
  icon,
  categories: ['层次结构', '比例'],
  description:
    '它显示分层结构的数据和相关的定量维度。 它由划分为小单元的区域组成，代表树结构的最后一层，使用 Voronoi 曲面细分计算。 细胞的大小取决于数量维度。 尺寸是迭代计算的，因此面积不能完全代表映射值。',
  code: 'https://github.com/rawgraphs/rawgraphs-charts/tree/master/src/treemap',
  tutorial: 'https://rawgraphs.io/learning/how-to-make-a-treemap/',
}
