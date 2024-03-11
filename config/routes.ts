const routes = [
   {
    name: 'project',
    path: '/project',
    routes: [
      {
        name: 'searchList',
        path: '/project/searchList',
        component: './1-project/SearchList/index.tsx',
      },
      {
        name: 'cartList',
        path: '/project/cartList',
        component: './1-project/CartList/index.tsx',
      },
      {
        name: 'table',
        path: '/project/table',
        component: './1-project/Table/index.tsx',
      },
    ],
   },
    
   {
    name: 'base',
    path: '/base',
    routes: [
      {
        name: 'array',
        path: '/base/array',
        component: './2-base/Array/immer.tsx',
      },
      {
        name: 'count',
        path: '/base/count',
        component: './2-base/Count/index.tsx',
      },
      {
        name: 'countTest1',
        path: '/base/countTest1',
        component: './2-base/Count/test1.tsx',
      },
      {
        name: 'number',
        path: '/base/number',
        component: './2-base/Number/index.tsx',
      },

      {
        name: 'object',
        path: '/base/object',
        component: './2-base/Object/index.tsx',
      },
      {
        name: 'object',
        path: '/base/objectImmer',
        component: './2-base/Object/immer.tsx',
      },
    ],
   },
    
   {
    name: 'source',
    path: '/source',
    routes: [
       {
        name: 'contextPosts',
        path: '/source/context',
        component: './7-source/Context/Posts/index.js',
       },
       {
        name: 'contextUseReducer1',
        path: '/source/contextUseReducer1',
        component: './7-source/Context/UseReducer1/index.js',
       },
       {
        name: 'contextUseReducer2',
        path: '/source/contextUseReducer2',
        component: './7-source/Context/UseReducer2/index.js',
       },
      //  {
      //   name: 'contextWithChildren',
      //   path: '/source/contextWithChildren',
      //   component: './7-source/Context/WithChildren/index.js',
      //  },


       {
        name: 'effectDenpencies',
        path: '/source/effectDenpencies',
        component: './7-source/EffectDenpencies/index.js',
       },
       {
        name: 'eventAndReactive',
        path: '/source/eventAndReactive',
        component: './7-source/EventAndReactive/index.js',
       },
       {
        name: 'eventAndReactive1',
        path: '/source/eventAndReactive1',
        component: './7-source/EventAndReactive1/index.js',
       },
   

       {
        name: 'stateExample1',
        path: '/source/stateExample1',
        component: './7-source/State/example1/index1-1.tsx',
       },
       {
        name: 'stateExample2',
        path: '/source/stateExample2',
        component: './7-source/State/example2/index.tsx',
       },
       {
        name: 'stateExample3',
        path: '/source/stateExample3',
        component: './7-source/State/example3/index.tsx',
       },
       {
        name: 'stateExampleTree',
        path: '/source/stateExampleTree',
        component: './7-source/State/exampleTree/index.tsx',
       },
       {
        name: 'stateReRenderAndResetState',
        path: '/source/reRenderAndResetState',
        component: './7-source/State/reRenderAndResetState/index.tsx',
       },


       {
        name: 'useEffectDemo1',
        path: '/source/useEffectDemo1',
        component: './7-source/UseEffect/index.js',
       },
       {
        name: 'useEffectDepenciesDemo',
        path: '/source/useEffectDepenciesDemo',
        component: './7-source/UseEffect/depencies.js',
       },
       {
        name: 'useEffectEffectTimeoutDemo',
        path: '/source/effectTimeoutDemo',
        component: './7-source/UseEffect/effect-timeout.js',
       },
      //  {
      //   name: 'notNeedEffectDemo',
      //   path: '/useEffect/notNeedEffectDemo',
      //   component: './7-source/UseEffect/notNeedEffect.js',
      //  },
       {
        name: 'useEffectProjectDemo',
        path: '/source/useEffectProjectDemo',
        component: './7-source/UseEffect/project.js',
       },


       {
        name: 'useRef',
        path: '/source/domRefList',
        component: './7-source/UseRef/domRefList1.js',
       },
    ],
   },
    
   {
    name: 'rect18',
    path: '/rect18',
    routes: [
      {
        name: 'suspense',
        path: '/rect18/suspense',
        component: './8-rect18/Suspense/index.tsx',
      },
    ],
   },

  ];
export default routes;
