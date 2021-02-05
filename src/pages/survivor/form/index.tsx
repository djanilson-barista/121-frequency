import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import {
  Card,
  Form,
  Row,
  Col,
  Input,
  Select,
  Radio,
  Button,
  Tag,
  InputNumber,
} from 'antd';

import { CloseIcon } from 'components/Icons';

import { uuid } from 'utils';
import './index.scss';
import { SurvivorActions } from 'stores/survivors';
import { AppState } from 'stores';
import { Survivor } from 'stores/survivors/types';

const _SurvivorForm = (props: any) => {
  const { Option } = Select;
  const { TextArea } = Input;

  const initialStateForm: Survivor = {
    name: '',
    description: '',
    age: 0,
    bloodType: '',
    tags: [],
    infected: false,
    injured: false,
    canWork: false,
  };

  const optionsBloodType = ['O−', 'O+', 'A−', 'A+', 'B−', 'B+', 'AB−', 'AB+'];

  const history = useHistory();

  const [form, setForm] = useState<Survivor>(
    Object.keys(props.editingSurvivor || {}).length
      ? props.editingSurvivor
      : initialStateForm,
  );

  const switchOptions = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ];

  /**
   * @description Sends the form data to action when it's submitted without errors;
   */
  const onFinish = () => {
    const { survivors, editingSurvivor } = props;

    if (survivors.isEditing) {
      props.updateSurvivor({ ...form, id: editingSurvivor.id });
    } else {
      props.createSurvivor({ id: uuid(), ...form });
    }

    setForm(initialStateForm);
    history.push('/'); // back to survivors view
  };

  /**
   * @description Prevents form submission with fields not filled
   */
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const tagRender = (props: any) => {
    const { label, closable } = props;

    return (
      <Tag className="survivor__form__tag" closable={closable}>
        <span className="survivor__form__tag__text">{label}</span>
      </Tag>
    );
  };

  /**
   * @description Saves the basic field value whenever a blur event is triggered
   */
  const onFieldUpdate = (e: any) => {
    const newForm: any = { ...form };
    const field = e.target.id;

    newForm[field] = e.target.value;

    setForm(newForm);
  };

  /**
   * @description Saves data for a complex field whenever there is a value change
   */
  const onFieldChange = (value: any, fieldName: string) => {
    const newForm: any = { ...form };
    newForm[fieldName] = value;

    setForm(newForm);
  };

  return (
    <>
      <div className="survivor__form app-page">
        <div className="survivor__form__container">
          <Card
            className="survivor__form__card survivor__card"
            title={
              <span className="survivor__card__title">
                Create your survivor
              </span>
            }
            extra={
              <Link to="/survivor">
                <Button
                  type="link"
                  size="small"
                  className="survivor__form__card__title__close"
                >
                  <CloseIcon />
                </Button>
              </Link>
            }
          >
            <Form
              className="survivor__form__form"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout="vertical"
            >
              <h2 className="survivor__form__form__title">
                Survivor Information
              </h2>
              <Row className="survivor__form__form__row" gutter={[48, 60]}>
                <Col>
                  <Form.Item
                    label="Survivor name"
                    name="name"
                    initialValue={form.name}
                    required
                    rules={[{ required: true, message: 'Input something!' }]}
                  >
                    <Input
                      onBlur={onFieldUpdate}
                      defaultValue={form.name}
                      value={form.name}
                      placeholder="Insert survivor name"
                    />
                  </Form.Item>

                  <Form.Item
                    label="Blood Type"
                    name="bloodType"
                    rules={[{ required: true, message: 'Chose one!' }]}
                    initialValue={form.bloodType}
                  >
                    <Select
                      onChange={e => onFieldChange(e, 'bloodType')}
                      defaultValue={form.bloodType}
                      value={form.bloodType}
                    >
                      {optionsBloodType.map(bloodType => (
                        <Option key={bloodType} value={bloodType}>
                          {bloodType}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label="Survivor age"
                    name="age"
                    style={{ display: 'flex' }}
                  >
                    <InputNumber
                      style={{ width: '100%' }}
                      defaultValue={form.age || 0}
                      min={0}
                      max={100}
                      onBlur={onFieldUpdate}
                    />
                  </Form.Item>
                  <Form.Item
                    rules={[{ required: true, message: 'Input one!' }]}
                    label="Tags"
                    initialValue={form.tags}
                    name="tags"
                  >
                    <Select
                      mode="multiple"
                      size="middle"
                      placeholder="Please select"
                      onChange={val => onFieldChange(val, 'tags')}
                      style={{ width: '100%' }}
                      tagRender={tagRender}
                      defaultValue={form.tags}
                      value={form.tags}
                    >
                      <Option value="HC" key="HC">
                        Health Care
                      </Option>
                      <Option value="Eng" key="Eng">
                        Engineering
                      </Option>
                      <Option value="Crafts" key="Crafts">
                        Crafts
                      </Option>
                      <Option value="Educ" key="Educ">
                        Education
                      </Option>
                      <Option value="Cook" key="Cook">
                        Cook
                      </Option>
                      <Option value="Sec" key="Sec">
                        Security
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item
                    initialValue={form.infected}
                    label="Is Infected?"
                    required
                    name="infected"
                  >
                    <Radio.Group
                      onChange={e => onFieldChange(e.target.value, 'infected')}
                      defaultValue={form.infected}
                      options={switchOptions}
                      optionType="button"
                    ></Radio.Group>
                  </Form.Item>

                  <Form.Item
                    initialValue={form.injured}
                    label="Is injured?"
                    required
                    name="injured"
                  >
                    <Radio.Group
                      onChange={e => onFieldChange(e.target.value, 'injured')}
                      defaultValue={form.injured}
                      options={switchOptions}
                      optionType="button"
                    ></Radio.Group>
                  </Form.Item>

                  <Form.Item
                    initialValue={form.canWork}
                    label="Is canWork?"
                    required
                    name="canWork"
                  >
                    <Radio.Group
                      onChange={e => onFieldChange(e.target.value, 'canWork')}
                      defaultValue={form.canWork}
                      options={switchOptions}
                      optionType="button"
                    ></Radio.Group>
                  </Form.Item>

                  <Form.Item
                    className="survivor__form__form__description"
                    label="Description"
                    name="description"
                  >
                    <TextArea
                      defaultValue={form.description}
                      value={form.description}
                      onBlur={onFieldUpdate}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row className="survivor__form__form__row save-button">
                <Col>
                  <Button
                    className="survivor__form__form__submit"
                    type="primary"
                    htmlType="submit"
                  >
                    Save
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  survivors: state.survivorState,
  editingSurvivor: state.survivorState.editingSurvivor,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ ...SurvivorActions }, dispatch);

const FormSurvivor = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_SurvivorForm);

export default FormSurvivor;
