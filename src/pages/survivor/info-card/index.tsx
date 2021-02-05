import { Button, Card, List as AntList } from 'antd';
import CloseIcon from 'mdi-react/CloseIcon';
import { SurvivorTypes } from 'stores/survivors';

export interface InfoCardProps {
  deselectSurvivor: () => void;
  selectedSurvivor: SurvivorTypes.Survivor;
}

const InfoCard = (props: InfoCardProps) => {
  const { deselectSurvivor, selectedSurvivor } = props;

  return (
    <Card
      className="survivor__analytics__recent survivor__analytics__card"
      title={
        <span className="survivor__card__title">{selectedSurvivor.name}</span>
      }
      extra={
        <Button
          size="small"
          className="survivor__card__title__deselect"
          style={{ border: 'none' }}
          onClick={deselectSurvivor}
        >
          <CloseIcon />
        </Button>
      }
    >
      <AntList>
        <AntList.Item key={selectedSurvivor.id}>
          <AntList.Item.Meta
            title="Name"
            description={selectedSurvivor.name}
            key={selectedSurvivor.name}
          />
          <AntList.Item.Meta
            title="Age"
            description={selectedSurvivor.age}
            key={selectedSurvivor.age}
          />
          <AntList.Item.Meta
            title="Blood Type"
            description={selectedSurvivor.bloodType}
            key={selectedSurvivor.bloodType}
          />
        </AntList.Item>
      </AntList>
      <AntList>
        <AntList.Item key={selectedSurvivor.id}>
          <AntList.Item.Meta
            title="Infected"
            description={selectedSurvivor.infected ? 'Yes' : 'No'}
            key={selectedSurvivor.id + '_infected'}
          />
          <AntList.Item.Meta
            title="Injured"
            description={selectedSurvivor.injured ? 'Yes' : 'No'}
            key={selectedSurvivor.id + '_injuried'}
          />
          <AntList.Item.Meta
            title="Can Work"
            description={selectedSurvivor.canWork ? 'Yes' : 'No'}
            key={selectedSurvivor.id + '_canwork'}
          />
        </AntList.Item>
      </AntList>
      <AntList>
        <AntList.Item key={selectedSurvivor.id}>
          <AntList.Item.Meta
            title="Tags"
            description={selectedSurvivor.tags.join(', ')}
            key={selectedSurvivor.id + '_tags'}
          />
          <AntList.Item.Meta
            title="Description"
            description={selectedSurvivor.description}
            key={selectedSurvivor.id + 'desc'}
          />
        </AntList.Item>
      </AntList>
    </Card>
  );
};

export default InfoCard;
