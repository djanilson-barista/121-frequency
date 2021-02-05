import { List as AntList, Tag } from 'antd';
import './index.scss';

type ListItem = {
  name: string;
  infected: boolean;
  injured: boolean;
  canWork: boolean;
};

const data: Array<ListItem> = [
  {
    name: 'Monica Grant',
    infected: false,
    injured: true,
    canWork: true,
  },
  {
    name: 'Christina Hansen ',
    infected: false,
    injured: false,
    canWork: true,
  },
  {
    name: 'Harley Turnbull',
    infected: false,
    injured: false,
    canWork: true,
  },
  {
    name: 'Thomas Fleming',
    infected: false,
    injured: true,
    canWork: false,
  },
  {
    name: 'Caitlin Collins',
    infected: true,
    injured: true,
    canWork: true,
  },
];

const listItem = (item: ListItem) => (
  <AntList.Item className="sys__list__item">
    <AntList.Item.Meta
      title={<span style={{ fontWeight: 'normal' }}>{item.name}</span>}
    />
    {item.canWork && <Tag color="blue">can work</Tag>}
    <Tag color={item.infected ? 'red' : item.injured ? 'purple' : 'lime'}>
      {item.infected ? 'infected' : item.injured ? 'injured' : 'healthy'}
    </Tag>
  </AntList.Item>
);

const List = (props: any) => {
  return (
    <AntList
      {...props}
      className="sys__list"
      dataSource={data}
      renderItem={(item: ListItem) => listItem(item)}
    />
  );
};

export default List;
