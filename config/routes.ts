const routes = [
    {
      path: '/',
      redirect: '/home',
    },
    // {
    //   name: '首页',
    //   path: '/home',
    //   component: './Home',
    // },
    // {
    //   name: '权限演示',
    //   path: '/access',
    //   component: './Access',
    // },
    // {
    //   name: ' CRUD 示例',
    //   path: '/table',
    //   component: './Table',
    // },
    {
      name: 'suspense',
      path: '/suspense',
      component: './Suspense',
    },
    {
      name: 'cartList',
      path: '/cartList',
      component: './CartList',
    },
    {
      name: 'searchList',
      path: '/searchList',
      component: './SearchList/test1.tsx',
    },
    
    // {
    //   name: 'board',
    //   path: '/board',
    //   component: './Board/index.tsx',
    // },
    {
      name: 'count1',
      path: '/count1',
      component: './Count/test1',
    },
    {
      name: 'immer',
      path: '/immer',
      component: './Object/immer.tsx',
    },
    {
      name: 'reducersAddTask',
      path: '/reducersAddTask',
      component: './Reducers/UseReducers/index.js',
    },
    {
      name: 'useRefDomList',
      path: '/useRefDomList',
      component: './7-source/useRef/domRefList1.js',
    }
  ];
export default routes;
