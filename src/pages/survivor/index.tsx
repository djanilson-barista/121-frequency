import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { Card, Avatar, Button } from 'antd';
import { Link } from 'react-router-dom';

import Table from 'components/table';

import './index.scss';
import healthyIco from 'assets/icons/heart.png';
import infectedIco from 'assets/icons/biohazard.png';

import { AddIcon } from 'components/Icons';
import { SurvivorActions, SurvivorTypes } from 'stores/survivors';
import { AppState } from 'stores';
import List from 'components/list';
import InfoCard from './info-card';

interface DispatchProps {
  init: () => void;
  deselectSurvivor: () => void;
  selectSurvivor: (id: string) => void;
  removeSurvivor: (id: string) => void;
  editSurvivor: (data: any) => void;
  toggleInfectedSurvivor: (idItem: string) => void;
}

interface StateProps {
  survivors: SurvivorTypes.Survivor[];
  selectedSurvivor: SurvivorTypes.Survivor;
}

type SurvivorProps = DispatchProps & StateProps;

class Survivor extends Component<SurvivorProps> {
  componentDidMount() {
    this.props.init();
  }

  render() {
    const {
      survivors,
      selectedSurvivor,
      editSurvivor,
      removeSurvivor,
      toggleInfectedSurvivor,
      selectSurvivor,
      deselectSurvivor,
    } = this.props;
    const hasSelected = Object.keys(selectedSurvivor).length;

    return (
      <>
        <div className="survivor">
          <div className="survivor__list">
            <Card
              title={<span className="survivor__card__title">Survivors</span>}
              className="survivor__list__card"
              extra={
                <Link to="/survivorForm">
                  <Button size="small" className="survivor__card__title__add">
                    <AddIcon />
                  </Button>
                </Link>
              }
            >
              <Table
                dataSource={survivors}
                rowClassName="survivor__list__row"
                edit={(row: any) => editSurvivor(row)}
                remove={(record: any) => removeSurvivor(record.key)}
                toggleInfected={(idItem: string) =>
                  toggleInfectedSurvivor(idItem)
                }
                onRowSelect={selectSurvivor}
              />
            </Card>
          </div>

          <div className="survivor__analytics">
            {!hasSelected && (
              <Card
                className="survivor__analytics__recent survivor__analytics__card"
                title={
                  <span className="survivor__card__title">
                    Last five registrations
                  </span>
                }
              >
                <List onItemClick={selectSurvivor} dataSource={survivors} />
              </Card>
            )}
            {!!hasSelected && (
              <InfoCard
                deselectSurvivor={deselectSurvivor}
                selectedSurvivor={selectedSurvivor}
              />
            )}

            <Card className="survivor__analytics__picker survivor__analytics__card">
              <div className="survivor__analytics__picker__section most__picked">
                <h4 className="survivor__analytics__picker__section__title">
                  Healthy
                </h4>
                <div className="survivor__analytics__picker__section__segmentation">
                  <div className="survivor__analytics__picker__section__segmentation__avatar__container">
                    <Avatar
                      className="survivor__analytics__picker__section__segmentation__avatar"
                      src={healthyIco}
                    />
                  </div>
                  <strong className="survivor__analytics__picker__section__segmentation__percent">
                    75%
                  </strong>
                </div>
              </div>
              <div className="survivor__analytics__picker__section">
                <h4 className="survivor__analytics__picker__section__title">
                  Infected
                </h4>
                <div className="survivor__analytics__picker__section__segmentation">
                  <div className="survivor__analytics__picker__section__segmentation__avatar__container less">
                    <Avatar
                      className="survivor__analytics__picker__section__segmentation__avatar"
                      src={infectedIco}
                    />
                  </div>
                  <strong className="survivor__analytics__picker__section__segmentation__percent">
                    25%
                  </strong>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  survivors: state.survivorState.data,
  selectedSurvivor: state.survivorState.selectedSurvivor,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(SurvivorActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Survivor);
