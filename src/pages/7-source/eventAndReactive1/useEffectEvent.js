function Page({ url }) {
    const { items } = useContext(ShoppingCartContext);
    const numberOfItems = items.length;

    const onVisit = useEffectEvent(visitedUrl => {
        logVisit(visitedUrl, numberOfItems);
    });

    useEffect(() => {
        onVisit(url);
    }, [url]); // ✅ 声明所有依赖项
    // ...
}