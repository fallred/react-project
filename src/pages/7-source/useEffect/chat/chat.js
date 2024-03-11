export function createConnection() {
    // 真实的实现会将其连接到服务器，此处代码只是示例
    return {
      connect() {
        console.log('✅ 连接中……');
      },
      disconnect() {
        console.log('❌ 连接断开。');
      }
    };
  }
  