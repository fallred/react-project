import {defineConfig} from '@umijs/max';

import proxy from './proxy';
import routes from './routes';

const env = process.env.REACT_APP_ENV;

const publicPath = '/reactTest/';
const routeBase = '/reactTest';

export default defineConfig({
    theme: {
        '@import-less': [
            // 引入 umi-max 主题样式
            'umi-max/lib/themes/default.less',
        ],
    },
    antd: {},
    access: {},
    model: {},
    initialState: {},
    request: {},
    mfsu: false,
    esbuildMinifyIIFE: true,
    hash: true,
    mock: false,
    // themeConfig: {
    //     initialColor: 'daybreak',
    // },
    layout: {
        // title: 'AI顾问助手',
        locale: false,
        // fixSiderbar: false,
        // fixedHeader: false,
        layout: 'mix',
    },
    locale: {
        default: 'zh-CN',
    },
    base: routeBase,
    routes,
    proxy: proxy['dev'],
    npmClient: 'npm',
    publicPath: publicPath,
    outputPath: 'build',
    qiankun: {
        slave: {},
    },
    mountElementId: 'reactTest-entry',
    define: {
        'process.env.REACT_APP_ENV': env, // 默认使用 test 环境
    },
    extraBabelPlugins: [],
    chainWebpack(config) {
        if (env !== 'development') {
            config.output.publicPath(publicPath);
            // config.plugin('upload').use(UploadPlugin);
        }
    },
    plugins: [require.resolve('@umijs/plugins/dist/unocss')],
    unocss: {
        // 检测 className 的文件范围，若项目不包含 src 目录，可使用 `pages/**/*.tsx`
        watch: ['src/**/*.tsx'],
    },
});
