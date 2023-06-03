import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Koor Handbook :: Koor Technologies, Inc.",
  titleTemplate: 'Koor Handbook',
  description: "The operating manual for Koor Technologies, Inc., where decisions about how we work are recorded.  This helps us remember our agreements, on-board new team members, and work together.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Company', link: '/company/' },
      { text: 'Employees', link: '/employees/' },
      { text: 'Development', link: '/development/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Directory',
        items: [
          { text: 'Company', link: '/company/' },
          { text: 'Employees', link: '/employees/' },
          { text: 'Development', link: '/development/' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/koor-tech' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/koor-technologies-inc/' },
      { icon: 'twitter', link: 'https://twitter.com/koor_tech' },
    ],
  },
  markdown: {
    xhtmlOut: true,
    breaks: true,
    linkify: true,
    typographer: true
  }
})
