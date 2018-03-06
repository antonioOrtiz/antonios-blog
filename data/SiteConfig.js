module.exports = {
  blogPostDir: 'sample-posts', // The name of directory that contains your posts.
  blogAuthorDir: 'sample-authors', // The name of directory that contains your authors.
  blogAuthorId: 'antonio', // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "Ahoy! I'm Antonio Pavicevac-Ortiz!", // Site title.
  siteTitleAlt: 'GatsbyJS Casper Theme Starter', // Alternative site title for SEO.
  siteLogo: '/logos/logo.png', // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: 'https://www.antonio-p-ortiz.com', // Domain of your website without pathPrefix.
  pathPrefix: '/gatsby-starter-casper', // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription: "Let's get out of the desert together!", // Website description used for RSS feeds/meta description tag.
  siteCover: 'https://haysclark.github.io/gatsby-starter-casper/images/blog-cover.jpg', // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: '/rss.xml', // Path to the RSS file.
  siteRssAuthor: 'Antonio', // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: 'UA-111982167-1', // GA tracking ID.
  siteSocialUrls: [
    'https://github.com/antonioOrtiz/',
    'https://linkedin.com/in/antonio-pavicevac-ortiz-1267752/',
    'mailto:17antonio.ortiz@gmail.com',
  ],
  disqusShortname: 'antonios-blog', // Disqus shortname.
  postDefaultCategoryID: 'Tech', // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/antonioOrtiz/',
      iconClassName: 'fa fa-github', // Disabled, see Navigation.jsx
    },
    {
      label: 'Linkedin',
      url: 'https://www.linkedin.com/in/antonio-pavicevac-ortiz-1267752/',
      iconClassName: 'fa fa-linkedin', // Disabled, see Navigation.jsx
    },
    {
      label: 'Email',
      url: 'mailto:17antonio.ortiz@gmail.com',
      iconClassName: 'fa fa-envelope', // Disabled, see Navigation.jsx
    },
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: 'Antonio Pavicevac-Ortiz', // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
  promoteGatsby: true, // Enables the GatsbyJS promotion information in footer.
};
