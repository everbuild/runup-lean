const rollup = require('rollup')

module.exports = (asset, engine) => {
    const opts = Object.assign({
        entry: asset.in,
        cache: asset.bundle,
        context: 'window'
    }, engine.model.rollup)

    return rollup.rollup(opts).then(bundle => {
        const opts = Object.assign({
            format: 'iife',
            exports: 'none',
            sourceMap: true,
            sourceMapFile: engine.model.in
        }, engine.model.bundle)

        const result = bundle.generate(opts)

        asset.bundle = bundle
        asset.addDependency(bundle.modules.map(mod => mod.id))
        asset.data = `${result.code}\n//# sourceMappingURL=${result.map.toUrl()}`
        asset.type = 'text/javascript'
    })
}
