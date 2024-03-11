useEffect(() => {
    const dialog = dialogRef.current;
    dialog.showModal();
    return () => dialog.close();
  }, []);

  useEffect(() => {
    function handleScroll(e) {
      console.log(window.scrollX, window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const node = ref.current;
    node.style.opacity = 1; // 触发动画
    return () => {
      node.style.opacity = 0; // 重置为初始值
    };
  }, []);


  useEffect(() => {
    let ignore = false;
  
    async function startFetching() {
      const json = await fetchTodos(userId);
      if (!ignore) {
        setTodos(json);
      }
    }
  
    startFetching();
  
    return () => {
      ignore = true;
    };
  }, [userId]);


// 上报准确度，应该放到路由切换中进行
  useEffect(() => {
    logVisit(url); // 发送 POST 请求
  }, [url]);