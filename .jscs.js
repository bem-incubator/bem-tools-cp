module.exports = {
    excludeFiles: [
        'node_modules',
        '.*',
        'test',
        'coverage'
    ],
    'requireCurlyBraces': ['if', 'else', 'for', 'while', 'do'],
    'requireSpaceAfterKeywords': ['do', 'else'],
    'disallowSpaceAfterKeywords': ['if', 'for', 'while', 'switch'],
    'disallowSpacesInFunction': {
        'beforeOpeningRoundBrace': true
    },
    'requireParenthesesAroundIIFE': true,
    'disallowSpacesInsideArrayBrackets': true,
    'disallowSpacesInsideObjectBrackets': true,
    'disallowSpaceAfterObjectKeys': true,
    'requireSpaceBeforeObjectValues': true,
    'disallowSpaceAfterPrefixUnaryOperators': ['++', '--', '+', '-', '~', '!'],
    'disallowSpaceBeforePostfixUnaryOperators': ['++', '--'],
    'disallowSpaceBeforeBinaryOperators': [','],
    'requireSpaceBeforeBinaryOperators': ['+', '-', '/', '*', '=', '==', '===', '!=', '!==', '>', '>=', '<', '<=', '&&', '||'],
    'requireSpaceAfterBinaryOperators': [',', '+', '-', '/', '*', '=', '==', '===', '!=', '!==', '>', '>=', '<', '<=', '&&', '||'],
    'requireSpaceBeforeBlockStatements': true,
    'disallowKeywords': ['with'],
    'disallowMultipleLineBreaks': true,
    'disallowTrailingWhitespace': true,
    'disallowKeywordsOnNewLine': ['else'],
    'requireCapitalizedConstructors': true,
    'requireLineFeedAtFileEnd': true,
    'disallowTrailingComma': true,
    'requireSpacesInConditionalExpression': {
        'afterTest': true,
        'beforeConsequent': true,
        'afterConsequent': true,
        'beforeAlternate': true
    },
    'validateQuoteMarks': {
        mark: '\'',
        escape: true
    },
    requireSpaceAfterLineComment: { 'allExcept': ['#', '=', '/'] },
    jsDoc: {
        checkAnnotations: {
            preset: 'jsdoc3',
            extra: {
                block: true,
                mod: true,
                val: true,
                final: false,
                override: false
            }
        },
        checkParamNames: true,
        requireParamTypes: true,
        checkRedundantParams: true,
        checkReturnTypes: true,
        checkRedundantReturns: true,
        requireReturnTypes: true,
        checkTypes: 'capitalizedNativeCase',
        leadingUnderscoreAccess: true
    },
    maxErrors: 1000
};
