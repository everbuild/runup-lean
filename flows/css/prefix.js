const postcss = require('postcss')
const prefix = require('autoprefixer')

const processor = postcss([prefix])

module.exports = (asset, engine) => {
    const opts = Object.assign({
        from: asset.path,
        to: asset.path,
        map: {inline: true, sourcesContent: true}
    }, engine.model.postcss)

    return processor.process(asset.data, opts)
        .then(result => asset.data = result.css)
}
