// const IN_PRODUCTION = process.env.NODE_ENV === 'production';
// const IN_PUBLIC = process.env.NODE_ENV === 'public';
// const purgecss = require('@fullhuman/postcss-purgecss');

// module.exports = {
//   plugins: [
//     (IN_PRODUCTION || IN_PUBLIC) && purgecss({
//       content: [
//         './public/**/*.html',
//         './src/**/*.html',
//         './src/**/*.vue',
//       ],
//       defaultExtractor(content) {
//         const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
//         return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
//       },
//       whitelistPatterns: [/^v-*/, /^theme-*/, /^application--*/,/(col-).*/,/(row).*/, /(container).*/,/(d-).*/,/(alert).*/,/(text).*/,/(border).*/],
//       whitelistPatternsChildren: [/^v-*/, /^theme-*/, /^application--*/],
//       whitelist: ['spacer', 'primary', 'secondary', 'accent', 'error', 'warning', 'info', 'success']
//     })
//   ]
// }

// module.exports = {
//   plugins: [
//     IN_PRODUCTION && require('@fullhuman/postcss-purgecss')({
//       content: [ `./public/**/*.html`, `./src/**/*.vue` ],
//       defaultExtractor (content) {
//         const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
//         return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
//       },
//       whitelist: ['v-application', 'v-application--wrap'],
//       whitelistPatterns: [ /-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/, /data-v-.*/ ],
//     })
//   ],
// }
