import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Supavit's Playground",
  description: "Welcome to my data analysis portfolio! Dive in to see how I transform raw data into valuable insights through visualization and modeling.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Visualization', link: '/dashboard' },
      { text: 'SQL', link: '/sql' },
      { text: 'Python', link: '/python' },
    ],

    sidebar: [
      {
        text: 'Portfolio',
        items: [
          { text: 'Visualization Showcase', link: '/dashboard' },
          { text: 'SQL Projects', link: '/sql' },
          { text: 'Python Projects', link: '/python'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/supavitkodchakorn/' },
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  base: '/portfolio/',
})
