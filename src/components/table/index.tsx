import React from 'react';
import { Table as AntTable, Button, Tooltip } from 'antd';
import { DeleteIcon, EditIcon } from '../Icons';
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
        </div>
      </div>
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
      dataIndex: 'Age',
      key: 'Age',
      render: buttonsTable,
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Infected',
      dataIndex: 'infected',
      key: 'infected',
      render: buttonsTable,
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend'],
    },
  ];

  return (
    <>
      <AntTable {...props} dataSource={props.dataSource} columns={columns} />
    </>
  );
};

export default Table;
