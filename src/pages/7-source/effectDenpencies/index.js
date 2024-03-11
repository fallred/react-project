function ChatRoom({ roomId }) {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
      const connection = createConnection();
      connection.connect();
      connection.on('message', (receivedMessage) => {
        setMessages([...messages, receivedMessage]);
      });
      return () => connection.disconnect();
    }, [roomId, messages]); // ✅ 所有依赖已声明
    // ...
}


function ChatRoom1({ roomId }) {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
      const connection = createConnection();
      connection.connect();
      connection.on('message', (receivedMessage) => {
        setMessages(msgs => [...msgs, receivedMessage]);
      });
      return () => connection.disconnect();
    }, [roomId]); // ✅ 所有依赖已声明
    // ...
}