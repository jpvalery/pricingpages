module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'BestPricingPages', // Navigation and Site Title
  titleAlt: 'BestPricingPages', // Title for JSONLD
  description: 'A repository of the best pricing pages by the best companies. Curated by @jpvalery',
  url: 'https://bestpricingpages.com', // Domain of your site. No trailing slash!
  siteUrl: 'https://bestpricingpages.com', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'BPP', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Jp Valery', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
  twitter: '@jpvalery', // Twitter Username
};
