module.exports = {
    moduleNameMapper: {
        imba: '<rootDir>/node_modules/imba/dist/imba.node.js',
    },
    moduleFileExtensions: [
        'imba',
        'js',
        'ts',
        'json',
    ],
    testMatch: [
        '<rootDir>/test/**/*.imba',
        '<rootDir>/test/**/*.ts',
    ],
    transform: {
        '\\.(imba)$': '<rootDir>/node_modules/@formidablejs/framework/bin/jest/preprocessor.js',
        '\\.(ts)$': 'ts-jest',
    },
};
