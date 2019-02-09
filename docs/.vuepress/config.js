module.exports = {
  title: 'Cursuri web dev',
  description: 'Informatii si exemple din web development.',
  themeConfig: {
    docsDir: 'docs',
    repo: 'electronrecord/vuepress-netllify',
    search: true,
    searchMaxSuggestions: 10,
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: [
      {
        title: 'JAVASCRIPT',
        collapsable: true,
        children: [
          ['/js-libraries', 'Libraries'],
          ['/js-examples', 'Examples']
        ]
      },
      {
        title: 'VUE',
        collapsable: true,
        children: [
          ['/vue-functional-components', 'Functional components'],
          ['/vue-renderless-components', 'Renderless components'],
          ['/vue-shared-components', 'Shared components'],
          ['/vue-css', 'CSS']
        ]
      },
      {
        title: 'REGEX',
        collapsable: true,
        children: [
          ['/regex', 'Regex']
        ]
      },
      {
        title: 'MOBILE DEV & TECHS',
        collapsable: true,
        children: [
          ['/mobile-dev', 'Mobile dev']
        ]
      },
      {
        title: 'DESIGN & LOGO & UX & CONTENT',
        collapsable: true,
        children: [
          ['/logo', 'LOGO'],
          ['/design-in-pages', 'Design in pages'],
          ['/design-system', 'Design system'],
          ['/ux', 'UX - User Xperience']
        ]
      },
      {
        title: 'CLOUD',
        collapsable: true,
        children: [
          ['/cloud', 'Cloud computing']
        ]
      },
      {
        title: 'GIT',
        collapsable: true,
        children: [
          ['/git-aliases', 'Aliases']
        ]
      },
      {
        title: 'PROGRAMMING PRINCIPLES',
        collapsable: true,
        children: [
          ['/solid', 'SOLID']
        ]
      },
      {
        title: 'CHEATSHEETS',
        collapsable: true,
        children: [
          ['/cheatsheets', 'Markdown']
        ]
      },
      {
        title: 'BOOKS & DOCS',
        collapsable: true,
        children: [
          ['/books', 'Books']
        ]
      },
      {
        title: 'YOUTUBE TUTORIALS',
        collapsable: true,
        children: [
          ['/youtube', 'Channels'],
          ['/youtube-clips', 'Clips/Tutorials']
        ]
      },
      {
        title: 'RASPBERRY PI',
        collapsable: true,
        children: [
          ['/raspberry', 'Raspberry']
        ]
      },
      {
        title: 'LINUX',
        collapsable: true,
        children: [
          ['/linux', 'Linux']
        ]
      },
      {
        title: 'SEO',
        collapsable: true,
        children: [
          ['/seo', 'Tools'],
          ['/seo-tips', 'Tips']
        ]
      },
      {
        title: 'ACCESIBILITY',
        collapsable: true,
        children: [
          ['/accesibility', 'Accessibility']
        ]
      },
      {
        title: 'JOBS',
        collapsable: true,
        children: [
          ['/jobs', 'Jobs']
        ]
      },
      {
        title: 'PUBLIC FIGURES',
        collapsable: true,
        children: [
          ['/eric-eliot', 'Eric Elliott'],
          ['/andrea-bizzotto', 'Andrea Bizzotto']
        ]
      },
      {
        title: 'ELECTRON',
        collapsable: true,
        children: [
          ['/electron', 'Electron']
        ]
      },
      {
        title: 'NW.JS',
        collapsable: true,
        children: [
          ['/nwjs', 'NW.JS']
        ]
      },
      {
        title: 'ETHICAL & MORALITY',
        collapsable: true,
        children: [
          ['/ethic', 'about daily work']
        ]
      },
      {
        title: 'SERVERLESS',
        collapsable: true,
        children: [
          ['/serverless', 'serverless techs']
        ]
      },
      {
        title: 'MARKETING',
        collapsable: true,
        children: [
          ['/marketing', 'marketing']
        ]
      }
    ]
  }
}
