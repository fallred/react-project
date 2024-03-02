const routes = [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: 'test1',
      path: '/test1',
      component: './Test1',
    },
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
  ];
export default routes;
