'use client'
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';
import Link from 'next/link';

const onClick: MenuProps['onClick'] = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items: MenuProps['items'] = [
  {
    label: (
        <Link href='/resources/gallery'>Gallery</Link>
      ),
    key: '1',
  },
  {
    label: (
        <Link href='/resources/podcast'>Podcasts</Link>
      ),
    key: '2',
  },
  {
    label: (
        <Link href='/resources/blog-thoughts'>Blog & Thought Leadership</Link>
      ),
    key: '3',
  },
  
];

const ResourcesDrop: React.FC = () => (
  <Dropdown menu={{ items, onClick }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Resources
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default ResourcesDrop;