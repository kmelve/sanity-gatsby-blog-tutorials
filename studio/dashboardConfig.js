export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5cd684e50f75d22d19810927',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-tutorials-studio',
                  apiId: '8e23af3c-e303-4ae2-b588-ee654a721b3f'
                },
                {
                  buildHookId: '5cd684e5b5084c483d000f14',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-tutorials',
                  apiId: '3a7d5357-6424-4f0f-a0a3-db40de29d17c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kmelve/sanity-gatsby-blog-tutorials',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-tutorials.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
