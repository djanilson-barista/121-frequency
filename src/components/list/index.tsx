import { List as AntList, Tag } from 'antd';
import { Survivor } from 'stores/survivors/types';
import './index.scss';

type ListItem = {
  id?: string;
  name: string;
  infected: boolean;
  injured: boolean;
  canWork: boolean;
};

const List = (props: any) => {
  const { onItemClick } = props;

  const makeDataList = (data: Survivor[]) =>
    data.map(({ name, id, infected, injured, canWork }: Survivor) => ({
      name,
      id,
      infected,
      injured,
      canWork,
    }));

  const listItem = (item: ListItem) => (
    <AntList.Item
      className="sys__list__item"
      onClick={() => onItemClick(item.id)}
    >
      <AntList.Item.Meta
        title={<span style={{ fontWeight: 'normal' }}>{item.name}</span>}
      />
      {item.canWork && <Tag color="blue">can work</Tag>}
      <Tag color={item.infected ? 'red' : item.injured ? 'purple' : 'lime'}>
        {item.infected ? 'infected' : item.injured ? 'injured' : 'healthy'}
      </Tag>
    </AntList.Item>
  );

  return (
    <AntList
      {...props}
      className="sys__list"
      dataSource={makeDataList((props.dataSource || []).slice(-5))}
      renderItem={(item: ListItem) => listItem(item)}
    />
  );
};

export default List;
