const CLIEngine = require("eslint").CLIEngine

const cli = new CLIEngine({configFile: require.resolve('./.eslintrc')})
const formatter = cli.getFormatter()

module.exports = asset => {
    const report = cli.executeOnFiles([asset.in])
    if(report.errorCount > 0 || report.warningCount > 0) console.log(formatter(report.results))
    if(report.errorCount > 0) asset.addError('linting error')
}
