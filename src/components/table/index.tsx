import React from 'react';
import { Table as AntTable, Button, Tooltip, Tag } from 'antd';
import { DeleteIcon, EditIcon, EyeIcon } from '../Icons';
import { Link } from 'react-router-dom';

const Table = (props: any) => {
  const buttonsTable = (text: string, record: any, index: any) => {
    return (
      <div
        className="row__content"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <span>{text}</span>
        <div className="row__content__actions">
          <Tooltip title="Delete">
            <Button
              type="link"
              icon={<DeleteIcon size="18" />}
              size="small"
              onClick={() => props.remove(record)}
            ></Button>
          </Tooltip>
          <Tooltip title="Edit">
            <Link to="/survivorForm">
              <Button
                type="link"
                icon={<EditIcon size="18" />}
                size="small"
                onClick={() => props.edit(record)}
              ></Button>
            </Link>
          </Tooltip>
          <Tooltip title="See more">
            <Link to="/survivorForm">
              <Button
                type="link"
                icon={<EyeIcon size="18" />}
                size="small"
                onClick={() => props.edit(record)}
              ></Button>
            </Link>
          </Tooltip>
        </div>
      </div>
    );
  };

  const renderInfected = (text: string, record: any, index: any) => {
    return <Tag color="default">{text}</Tag>;
  };

  const renderInfo = (text: string, record: any, index: any) => {
    const { infected, injured, canWork } = record;
    const isHealthy = !infected && !injured && canWork;
    const isInjured = infected || injured;

    return (
      <>
        {isHealthy && <Tag color="lime">healthy</Tag>}
        {isInjured && <Tag color="purple">injured</Tag>}
        {canWork && <Tag color="blue">can work</Tag>}
      </>
    );
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      render: buttonsTable,
      sorter: (a: any, b: any) => a.age.localeCompare(b.age),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'BT',
      dataIndex: 'bloodType',
      key: 'bloodType',
      render: (text: string, r: any, idx: any) => <Tag color="red">{text}</Tag>,
      sorter: (a: any, b: any) => a.bloodType.localeCompare(b.bloodType),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Infected',
      dataIndex: 'infected',
      key: 'infected',
      render: renderInfected,
      sorter: (a: any, b: any) => a.infected - b.infected,
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Info',
      dataIndex: 'info',
      key: 'info',
      render: renderInfo,
    },
  ];

  return (
    <>
      <AntTable {...props} dataSource={props.dataSource} columns={columns} />
    </>
  );
};

export default Table;
