const rules = require('./index');
require('assert').deepEqual(
    Object.keys(rules).sort(),
    [
        'env',
        'extends',
        'globals',
        'parserOptions',
        'rules',
    ],
);
