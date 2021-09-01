const CracoAntDesignPlugin = require('craco-antd');

console.log('start')
module.exports = {
    plugins: [
        {
            plugin: CracoAntDesignPlugin,
            options: {
                customizeTheme: {
                    '@primary-color': '#1DA57A',
                },
            },
        },
    ],
};