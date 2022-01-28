require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `Rumi Deb`,
        siteUrl: `https://www.gatsbyjs.com`,
        description: `Blazing fast modern site generator for React`,
    },

    plugins: [
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                implementation: require('sass')
            }
        },
        `gatsby-plugin-sharp`,
        `gatsby-plugin-image`,
        `gatsby-transformer-sharp`, // Needed for dynamic images
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `fros0wppf970`,
                accessToken: process.env.ACCESS_TOKEN,
            },
        },
    ]
}