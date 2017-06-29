const uglify = require('uglify-js')

module.exports = (asset, engine) => {
    const opts = Object.assign({
        warnings: true,
        toplevel: true
    }, engine.model.uglify)

    const res = uglify.minify({[asset.path]: asset.data}, opts)

    asset.addError(res.error)
    asset.addWarning(res.warnings)
    asset.data = res.code
}
