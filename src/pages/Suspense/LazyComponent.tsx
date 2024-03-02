import services from '@/services/demo';
import {PageContainer} from '@ant-design/pro-components';
import React, { useRef, useState } from 'react';

const LazyComponent: React.FC<unknown> = () => {
  return (
    <PageContainer
      header={{
        title: 'LazyComponent',
      }}
    >
      组件内容
    </PageContainer>
  );
};

export default LazyComponent;
