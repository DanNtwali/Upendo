'use client'
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';
import Link from 'next/link';
import CxDrop from '../components/CxDrop'

const onClick: MenuProps['onClick'] = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items: MenuProps['items'] = [
  {
    label: (
        <Link href='/products/ai-workflow'>AI-Workflow</Link>
      ),
    key: '1',
  },
  {
    label: (
        <Link href='/products/crm'>CRM</Link>
      ),
    key: '2',
  },
  {
    label: (
        <Link href='/products/project-management'>Project Management</Link>
      ),
    key: '3',
  },
  {
    label: (
        <Link href='/products/service-desk'>Service Desk</Link>
      ),
    key: '4',
  },
];

const DropDown: React.FC = () => (
  <Dropdown menu={{ items, onClick }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Products
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default DropDown;