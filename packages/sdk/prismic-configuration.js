module.exports = {

  apiEndpoint: process.env.PRISMIC_API_ENDPOINT,

  // -- Access token if the Master is not open
  // accessToken: 'xxxxxx',
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,

  // OAuth
  // clientId: 'xxxxxx',
  // clientSecret: 'xxxxxx',
  clientId: process.env.PRISMIC_CLIENT_ID,
  clientSecret: process.env.PRISMIC_CLIENT_SECRET,

  // -- Links resolution rules
  // This function will be used to generate links to Prismic.io documents
  // As your project grows, you should update this function according to your routes
  linkResolver (doc) {
    if (doc.type === 'blog_post') {
      return '/blog/' + doc.uid
    }

    return '/'
  }
}
