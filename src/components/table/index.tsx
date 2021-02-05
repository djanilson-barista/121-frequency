import React, { useState } from 'react';
import Highlighter from 'react-highlight-words';
import {
  Table as AntTable,
  Button,
  Tag,
  Dropdown,
  Menu,
  Input,
  Space,
} from 'antd';
import {
  ArrowDropDownIcon,
  DeleteIcon,
  EditIcon,
  ShieldTickIcon,
  ShieldAlertIcon,
  SearchIcon,
} from '../Icons';
import { Link } from 'react-router-dom';

export interface Props {}

const Table = (props: any) => {
  const { dataSource, toggleInfected, onRowSelect } = props;
  const [searchText, setSearchText] = useState<any>('');
  const [searchedColumn, setSearchColumn] = useState<any>();
  let searchInput: any;

  const menu = (record: any) => (
    <>
      <Menu>
        {!record.infected && (
          <Menu.Item
            danger
            key={record.key + '1'}
            icon={<ShieldAlertIcon size="18" />}
            onClick={() => toggleInfected(record.key)}
          >
            Mark as Infected
          </Menu.Item>
        )}
        {record.infected && (
          <Menu.Item
            key={record.key + '1'}
            style={{ color: 'dodgerblue' }}
            icon={<ShieldTickIcon size="18" />}
            onClick={() => toggleInfected(record.key)}
          >
            Mark as not infected
          </Menu.Item>
        )}
        <Menu.Item
          onClick={() => props.edit(record)}
          key={record.key + '2'}
          icon={<EditIcon size="18" />}
        >
          <Link to="/survivorForm">Edit</Link>
        </Menu.Item>
        <Menu.Item
          onClick={() => props.remove(record)}
          key={record.key + '4'}
          icon={<DeleteIcon size="18" />}
        >
          Delete
        </Menu.Item>
      </Menu>
    </>
  );

  const buttonsTable = (text: string, record: any, index: any) => {
    const { infected, injured, canWork } = record;
    const isHealthy = !infected && !injured && canWork;
    const isInjured = infected || injured;
    return (
      <div
        className="row__content"
        style={{
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: 'auto 30%',
          width: '100%',
        }}
      >
        <div>
          {isHealthy && <Tag color="lime">healthy</Tag>}
          {isInjured && <Tag color="purple">injured</Tag>}
          {canWork && <Tag color="blue">can work</Tag>}
        </div>
        <div className="row__content__actions">
          <Dropdown overlay={menu(record)}>
            <Button type="link">
              Actions <ArrowDropDownIcon size="18" />
            </Button>
          </Dropdown>
        </div>
      </div>
    );
  };

  const renderInfected = (text: string, record: any, index: any) => {
    return (
      <Tag color={record.infected ? 'red' : 'default'}>
        {record.infected ? 'Yes' : 'No'}
      </Tag>
    );
  };

  const createDataSource = (data: Array<any>) => {
    return data.map(({ id, name, age, infected, injured, canWork }) => ({
      key: id,
      name,
      age,
      infected,
      injured,
      canWork,
    }));
  };

  const handleSearch = (selectedKeys: any, confirm: any, dataIndex: any) => {
    confirm();
    setSearchColumn(dataIndex);
    setSearchText(selectedKeys[0]);
  };

  const getColumnSearchProps = (dataIndex: any) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }: any) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => (searchInput = node)}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => {
              setSearchText('');
              clearFilters();
            }}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: any) => (
      <span style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
        <SearchIcon
          className="batman"
          style={{ color: filtered ? '#1890ff' : undefined }}
        />
      </span>
    ),
    onFilter: (value: any, record: any) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: (visible: any) => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text: any) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend'],
      width: '30%',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '62px',
      sorter: (a: any, b: any) => a.age.localeCompare(b.age),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Infected',
      dataIndex: 'infected',
      key: 'infected',
      width: '110px',
      render: renderInfected,
      sorter: (a: any, b: any) => a.infected - b.infected,
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Info',
      dataIndex: 'info',
      key: 'info',
      width: '40%',
      render: buttonsTable,
    },
  ];

  return (
    <>
      <AntTable
        {...props}
        pagination={{ defaultPageSize: 8 }}
        dataSource={createDataSource(dataSource)}
        columns={columns}
        onRow={row => ({ onClick: () => onRowSelect(row.key) })}
      />
    </>
  );
};

export default Table;
