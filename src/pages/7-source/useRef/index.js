// React 内部
function useRef(initialValue) {
    const [ref, unused] = useState({ current: initialValue });
    return ref;
}