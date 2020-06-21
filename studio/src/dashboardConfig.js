export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eef5b0c5de0e56296686ef2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog1-studio-xav423ue',
                  apiId: '7ec355b9-7ba2-4598-8593-dc702e5b8c69'
                },
                {
                  buildHookId: '5eef5b0c69e70d45aba50151',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog1-web-sw6mr8i3',
                  apiId: '38d836e4-cb4b-4338-a26e-96544e8fbb91'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prahulkumarachar/sanity-gatsby-blog1',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog1-web-sw6mr8i3.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
