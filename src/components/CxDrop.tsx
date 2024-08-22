'use client'
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Coorporate & Commercial',
    children: [
      {
        key: '1-1',
        label: (<Link href='/services/coorporate&commercial'>Trust & Corporate Service Providers</Link>),
      },
      {
        key: '1-2',
        label: (<Link href='/services/coorporate&commercial'>Investment Advisory & Portfolio Management</Link>),
      },
      {
        key: '1-3',
        label: (<Link href='/services/coorporate&commercial'>Business & Transaction Advixory</Link>),
      },
    ],
  },
  {
    key: '2',
    label: 'Customer Experience',
    children: [
      {
        key: '2-1',
        label: (<Link href='/services/cx'>Customer Service Professional Certification & Development</Link>),
      },
      {
        key: '2-2',
        label: (<Link href='/services/cx'>Customer Service Training</Link>),
      },
      {
        key: '2-3',
        label: (<Link href='/services/cx'>Customer Service  Excellence Awards</Link>),
      },
      {
        key: '2-4',
        label: (<Link href='/services/cx'>Market Research</Link>),
      },
      {
        key: '2-5',
        label: (<Link href='/services/cx'>Membership</Link>),
      },
    ],
  },
];

const App: React.FC = () => (
  <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Services
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default App;