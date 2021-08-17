// babel config
// @author CAIHUAZHI <moyan@come-future.com>
// @create 2020/07/31 09:26

module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        browsers: ['Chrome >= 65', 'Firefox >= 55', 'Safari >= 11'],
        node: 'current',
      },
      modules: false
    }],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    ['@babel/plugin-proposal-class-properties', { 'loose': true }],
    '@babel/plugin-proposal-export-namespace-from',
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  ]
}
