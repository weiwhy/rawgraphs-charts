import icon from './arcdiagram.svg'
import thumbnail from './arcdiagram_thumb.svg'

export const metadata = {
  name: '弧线图',
  id: 'rawgraphs.arcdiagram',
  thumbnail,
  icon,
  categories: ['networks'],
  description:
    '一种特殊的网络图，可查看节点之间的关系。节点显示在横轴上，链接显示为顺时针方向的弧线。节点上方的弧线表示从左边到右边的连接，而下方的弧线表示从右边节点到左边节点的连接.',
  code:
    'https://github.com/rawgraphs/rawgraphs-charts/tree/master/src/arcdiagram',
  tutorial: 'https://rawgraphs.io/learning/how-to-make-an-arc-diagram/',
}
