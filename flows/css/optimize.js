const csso = require('csso')

module.exports = asset => {
    const opts = {
        filename: asset.path,
        comments: false
    }
    const result = csso.minify(asset.data, opts)
    asset.data = result.css
}