useEffect(() => {
    // 这里的代码会在每次渲染后执行
  });
  
  useEffect(() => {
    // 这里的代码只会在组件挂载后执行
  }, []);
  
  useEffect(() => {
    //这里的代码只会在每次渲染后，并且 a 或 b 的值与上次渲染不一致时执行
  }, [a, b]);



  useEffect(() => {
    const connection = createConnection();
    connection.connect();
  }, []);


  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, []);