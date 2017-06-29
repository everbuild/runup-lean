const babel = require('babel-core')

module.exports = (asset, engine) => {
    const opts = Object.assign({
        filename: asset.path,
        ast: false,
        babelrc: false,
        compact: false,
        sourceMaps: false,
        presets: ['es2015']
    }, engine.model.babel)

    asset.data = babel.transform(asset.data, opts).code
}
