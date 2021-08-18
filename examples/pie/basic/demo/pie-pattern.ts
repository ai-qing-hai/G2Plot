import { Pie } from '@antv/g2plot';

const data = [
  { type: '分类一', value: 50 },
  { type: '分类二', value: 25 },
  { type: '分类三', value: 20 },
];

const PATTERN_MAP = {
  分类一: 'dot',
  分类二: 'square',
  分类三: 'line',
};

const piePlot = new Pie('container', {
  appendPadding: 10,
  data,
  angleField: 'value',
  colorField: 'type',
  radius: 0.5,
  legend: false,
  label: {
    type: 'outer',
    offset: '30%',
    content: ({ percent, type }) => `${type} ${(percent * 100).toFixed(0)}%`,
    style: {
      fontSize: 12,
    },
  },
  pattern: ({ type }) => ({ type: PATTERN_MAP[type] || 'dot' }),
  interactions: [{ type: 'element-active' }],
});

piePlot.update({
  theme: {
    styleSheet: {
      brandColor: '#5B8FF9',
      paletteQualitative10: [
        '#5B8FF9',
        '#61DDAA',
        '#65789B',
        '#F6BD16',
        '#7262fd',
        '#78D3F8',
        '#9661BC',
        '#F6903D',
        '#008685',
        '#F08BB4',
      ],
      paletteQualitative20: [
        '#5B8FF9',
        '#CDDDFD',
        '#61DDAA',
        '#CDF3E4',
        '#65789B',
        '#CED4DE',
        '#F6BD16',
        '#FCEBB9',
        '#7262fd',
        '#D3CEFD',
        '#78D3F8',
        '#D3EEF9',
        '#9661BC',
        '#DECFEA',
        '#F6903D',
        '#FFE0C7',
        '#008685',
        '#BBDEDE',
        '#F08BB4',
        '#FFE0ED',
      ],
    },
  },
});
piePlot.render();
