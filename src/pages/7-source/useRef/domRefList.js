function App() {
    return (
        <ul>
            {items.map((item) => {
                // 行不通！
                const ref = useRef(null);
                return <li ref={ref} />;
            })}
        </ul>
    );
}