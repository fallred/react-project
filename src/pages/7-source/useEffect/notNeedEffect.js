function Form() {
    const [firstName, setFirstName] = useState('Taylor');
    const [lastName, setLastName] = useState('Swift');

    // 🔴 避免：多余的 state 和不必要的 Effect
    const [fullName, setFullName] = useState('');
    useEffect(() => {
        setFullName(firstName + ' ' + lastName);
    }, [firstName, lastName]);
    // ...
}


function Form() {
    const [firstName, setFirstName] = useState('Taylor');
    const [lastName, setLastName] = useState('Swift');
    // ✅ 非常好：在渲染期间进行计算
    const fullName = firstName + ' ' + lastName;
    // ...
}


function TodoList({ todos, filter }) {
    const [newTodo, setNewTodo] = useState('');

    // 🔴 避免：多余的 state 和不必要的 Effect
    const [visibleTodos, setVisibleTodos] = useState([]);
    useEffect(() => {
        setVisibleTodos(getFilteredTodos(todos, filter));
    }, [todos, filter]);

    // ...
}


function TodoList({ todos, filter }) {
    const [newTodo, setNewTodo] = useState('');
    // ✅ 如果 getFilteredTodos() 的耗时不长，这样写就可以了。
    const visibleTodos = getFilteredTodos(todos, filter);
    // ...
}


import { useMemo, useState } from 'react';

function TodoList({ todos, filter }) {
    const [newTodo, setNewTodo] = useState('');
    const visibleTodos = useMemo(() => {
        // ✅ 除非 todos 或 filter 发生变化，否则不会重新执行
        return getFilteredTodos(todos, filter);
    }, [todos, filter]);
    // ...
}



export default function ProfilePage({ userId }) {
    const [comment, setComment] = useState('');

    // 🔴 避免：当 prop 变化时，在 Effect 中重置 state
    useEffect(() => {
        setComment('');
    }, [userId]);
    // ...
}



export default function ProfilePage({ userId }) {
    return (
        <Profile
            userId={userId}
            key={userId}
        />
    );
}

function Profile({ userId }) {
    // ✅ 当 key 变化时，该组件内的 comment 或其他 state 会自动被重置
    const [comment, setComment] = useState('');
    // ...
}



function List({ items }) {
    const [isReverse, setIsReverse] = useState(false);
    const [selection, setSelection] = useState(null);

    // 🔴 避免：当 prop 变化时，在 Effect 中调整 state
    useEffect(() => {
        setSelection(null);
    }, [items]);
    // ...
}


function List({ items }) {
    const [isReverse, setIsReverse] = useState(false);
    const [selection, setSelection] = useState(null);

    // 好一些：在渲染期间调整 state
    const [prevItems, setPrevItems] = useState(items);
    if (items !== prevItems) {
        setPrevItems(items);
        setSelection(null);
    }
    // ...
}


function List({ items }) {
    const [isReverse, setIsReverse] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    // ✅ 非常好：在渲染期间计算所需内容
    const selection = items.find(item => item.id === selectedId) ?? null;
    // ...
}


function ProductPage({ product, addToCart }) {
    // 🔴 避免：在 Effect 中处理属于事件特定的逻辑
    useEffect(() => {
        if (product.isInCart) {
            showNotification(`已添加 ${product.name} 进购物车！`);
        }
    }, [product]);

    function handleBuyClick() {
        addToCart(product);
    }

    function handleCheckoutClick() {
        addToCart(product);
        navigateTo('/checkout');
    }
    // ...
}

//链式计算
function Game() {
    const [card, setCard] = useState(null);
    const [goldCardCount, setGoldCardCount] = useState(0);
    const [round, setRound] = useState(1);
    const [isGameOver, setIsGameOver] = useState(false);

    // 🔴 避免：链接多个 Effect 仅仅为了相互触发调整 state
    useEffect(() => {
        if (card !== null && card.gold) {
            setGoldCardCount(c => c + 1);
        }
    }, [card]);

    useEffect(() => {
        if (goldCardCount > 3) {
            setRound(r => r + 1)
            setGoldCardCount(0);
        }
    }, [goldCardCount]);

    useEffect(() => {
        if (round > 5) {
            setIsGameOver(true);
        }
    }, [round]);

    useEffect(() => {
        alert('游戏结束！');
    }, [isGameOver]);

    function handlePlaceCard(nextCard) {
        if (isGameOver) {
            throw Error('游戏已经结束了。');
        } else {
            setCard(nextCard);
        }
    }

    function Game1() {
        const [card, setCard] = useState(null);
        const [goldCardCount, setGoldCardCount] = useState(0);
        const [round, setRound] = useState(1);

        // ✅ 尽可能在渲染期间进行计算
        const isGameOver = round > 5;

        function handlePlaceCard(nextCard) {
            if (isGameOver) {
                throw Error('游戏已经结束了。');
            }

            // ✅ 在事件处理函数中计算剩下的所有 state
            setCard(nextCard);
            if (nextCard.gold) {
                if (goldCardCount <= 3) {
                    setGoldCardCount(goldCardCount + 1);
                } else {
                    setGoldCardCount(0);
                    setRound(round + 1);
                    if (round === 5) {
                        alert('游戏结束！');
                    }
                }
            }
        }
    }



    let didInit = false;
    function App() {
        useEffect(() => {
            if (!didInit) {
                didInit = true;
                // ✅ 只在每次应用加载时执行一次
                loadDataFromLocalStorage();
                checkAuthToken();
            }
        }, []);
        // ...
    }


    if (typeof window !== 'undefined') { // 检测我们是否在浏览器环境
        // ✅ 只在每次应用加载时执行一次
        checkAuthToken();
        loadDataFromLocalStorage();
    }

    function App() {
        // ...
    }



    // 订阅外部store
    function useOnlineStatus() {
        // 不理想：在 Effect 中手动订阅 store
        const [isOnline, setIsOnline] = useState(true);
        useEffect(() => {
            function updateState() {
                setIsOnline(navigator.onLine);
            }

            updateState();

            window.addEventListener('online', updateState);
            window.addEventListener('offline', updateState);
            return () => {
                window.removeEventListener('online', updateState);
                window.removeEventListener('offline', updateState);
            };
        }, []);
        return isOnline;
    }
    function ChatIndicator() {
        const isOnline = useOnlineStatus();
        // ...
    }



    function subscribe(callback) {
        window.addEventListener('online', callback);
        window.addEventListener('offline', callback);
        return () => {
            window.removeEventListener('online', callback);
            window.removeEventListener('offline', callback);
        };
    }

    function useOnlineStatus() {
        // ✅ 非常好：用内置的 Hook 订阅外部 store
        return useSyncExternalStore(
            subscribe, // 只要传递的是同一个函数，React 不会重新订阅
            () => navigator.onLine, // 如何在客户端获取值
            () => true // 如何在服务端获取值
        );
    }

    function ChatIndicator() {
        const isOnline = useOnlineStatus();
        // ...
    }


    // 获取数据
    function SearchResults({ query }) {
        const [results, setResults] = useState([]);
        const [page, setPage] = useState(1);

        useEffect(() => {
            // 🔴 避免：没有清除逻辑的获取数据
            fetchResults(query, page).then(json => {
                setResults(json);
            });
        }, [query, page]);

        function handleNextPageClick() {
            setPage(page + 1);
        }
        // ...
    }

    function SearchResults({ query }) {
        const [results, setResults] = useState([]);
        const [page, setPage] = useState(1);
        useEffect(() => {
            let ignore = false;
            fetchResults(query, page).then(json => {
                if (!ignore) {
                    setResults(json);
                }
            });
            return () => {
                ignore = true;
            };
        }, [query, page]);

        function handleNextPageClick() {
            setPage(page + 1);
        }
        // ...
    }


    function SearchResults({ query }) {
        const [page, setPage] = useState(1);
        const params = new URLSearchParams({ query, page });
        const results = useData(`/api/search?${params}`);

        function handleNextPageClick() {
            setPage(page + 1);
        }
        // ...
    }

    function useData(url) {
        const [data, setData] = useState(null);
        useEffect(() => {
            let ignore = false;
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    if (!ignore) {
                        setData(json);
                    }
                });
            return () => {
                ignore = true;
            };
        }, [url]);
        return data;
    }
}


