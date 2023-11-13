import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss'

export default defineConfig({
  shortcuts: [
    [
      'custom-btn',
      'b-0 shadow-md shadow-black/20 cursor-pointer bg-green/30 hover-bg-green/15 active-shadow-sm active-bg-green/50'
    ]
  ],
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify({
      prefix: 'uno-'
    })
  ]
})
