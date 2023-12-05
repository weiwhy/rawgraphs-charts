import icon from './alluvialdiagram.svg'
import thumbnail from './alluvialdiagram_thumb.svg'

export const metadata = {
  name: '冲积图',
  id: 'rawgraphs.alluvialdiagram',
  thumbnail,
  icon,
  code:
    'https://github.com/rawgraphs/rawgraphs-charts/tree/master/src/alluvialdiagram',
  tutorial: 'https://rawgraphs.io/learning/how-to-make-an-alluvial-diagram/',
  categories: ['correlations', 'proportions'],
  description:
    '它显示了分类维度之间的相关性，将其表示为流动，直观地将类别与共享项目联系起来。每个矩形代表所选维度中的一个唯一值，其高度与其值成正比。相关性用曲线表示，其宽度与数值成正比。',
}
