const CLIEngine = require("eslint").CLIEngine

const cli = new CLIEngine({configFile: require.resolve('./.eslintrc')})

module.exports = asset => {
    const report = cli.executeOnFiles([asset.in])
    report.results.forEach(result => result.messages.forEach(message => {
        const converted = {
            file: result.filePath,
            line: message.line || 0,
            column: message.column || 0,
            message: `ESLint: ${message.message.replace(/\.$/, "")} (${message.ruleId || ""})`
        }
        if(message.fatal || message.severity === 2) {
            asset.addError(converted)
        } else {
            asset.addWarning(converted)
        }
    }))
}
