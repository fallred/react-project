import { useState } from 'react';

function Message1({ messageColor }) {
    // 与从父组件传递的属性保持同步
    const color = messageColor;
}

function Message({ initialColor }) {
    // 这个 `color` state 变量用于保存 `initialColor` 的 **初始值**。
    // 对于 `initialColor` 属性的进一步更改将被忽略。
    const [color, setColor] = useState(initialColor);
}
