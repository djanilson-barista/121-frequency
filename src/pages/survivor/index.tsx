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
import { SurvivorActions } from 'stores/survivors';
import { AppState } from 'stores';
import List from 'components/list';

class Survivor extends Component {
  render() {
    return (
      <>
        <div className="survivor">
          <div className="survivor__list">
            <Card
              title={<span className="survivor__card__title">Survivors</span>}
              className="survivor__list__card"
              extra={
                <Link to="/survivorForm">
                  <Button size="small" className="team__card__title__add">
                    <AddIcon />
                  </Button>
                </Link>
              }
            >
              <Table />
            </Card>
          </div>

          <div className="survivor__analytics">
            <Card
              title={
                <span className="survivor__card__title">
                  Latest Registrations
                </span>
              }
              className="survivor__analytics__recent survivor__analytics__card"
            >
              <List />
            </Card>
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
  survivors: state.survivorState,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(SurvivorActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Survivor);
