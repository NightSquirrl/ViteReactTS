// import React from 'react'
import { Button } from "antd"
import React, { useEffect } from "react";
export default function Home() {
    const isMountedRef = React.useRef(false);
    useEffect(() => {
        if (!isMountedRef.current) {
            // 在组件挂载时执行的函数
            console.log('Component mounted');
            isMountedRef.current = true;
        } else {
            // 在组件更新时执行的函数
            console.log('Component updated');
        }
    });
    return (
        <Button type="primary">Primary Button</Button>
    )
}
