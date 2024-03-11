if (typeof window !== 'undefined') { // 检查是否在浏览器中运行
    checkAuthToken();
    loadDataFromLocalStorage();
}

