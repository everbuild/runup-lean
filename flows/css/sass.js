const sass = require('node-sass')

module.exports = (asset, engine) => {
    asset.in = asset.in.replace(/\.css$/, '.scss')

    const opts = Object.assign({
        file: asset.in,
        outputStyle: 'expanded',
        includePaths: ['node_modules'],
        sourceMapContents: true,
        sourceMapEmbed: true,
        sourceMap: engine.model.in
    }, engine.model.sass)

    return engine.promise(done => sass.render(opts, done)).then(result => {
        asset.addDependency(result.stats.includedFiles) // also add included files as dependencies
        asset.data = result.css
        asset.type = 'text/css'
    })
}
