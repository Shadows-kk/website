import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
export default defineConfig({
  theme: {
    colors: {
      // 自定义颜色
      mypurple: '#070014',
      mygray: '#64748b',
      myorange: '#d97706',
      headbg: "#0f0423",
      grayText: '#918EA0'
      // 你可以根据需要添加更多自定义颜色
    },

  },
  rules: [
    // 自定义背景色规则
    [/^bg-(.*)$/, ([, color], { theme }) => {
      if (theme.colors[color]) {
        return { 'background-color': theme.colors[color] }
      }
    }],

  ],
  presets: [
    presetUno()
  ]
})