/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 */
export default {
  dev: {
    '/mock': {
      target: 'https://api.baijia.com/', // 本地代理到yapi
      changeOrigin: true,
      // pathRewrite: { '^/mock': '' },
    },
  },
  test: {},
  prod: {},
};
