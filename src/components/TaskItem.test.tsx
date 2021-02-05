import React from 'react';
import {TaskItem} from './TaskItem';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {TASK_STATUS} from 'src/typings';

describe('TaskItem', () => {
  it('should render without issue', () => {
    const component = shallow(
      <TaskItem name="name" due_date="" status={TASK_STATUS.DONE} />,
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render task title properly', () => {
    const title = 'test_name';
    const component = shallow(
      <TaskItem name={title} due_date="" status={TASK_STATUS.DONE} />,
    );

    expect(component.find('Text').first().props().children).toBe(title);
  });

  it('should render date properly', () => {
    const dueDate = '22:00AM 12-1-2019';
    const component = shallow(
      <TaskItem name="" due_date={dueDate} status={TASK_STATUS.DONE} />,
    );
    expect(component.find('Text').last().props().children).toBe(dueDate);
  });

  it('should update checkbox properly', () => {
    const component = shallow(
      <TaskItem name="" due_date="" status={TASK_STATUS.DONE} />,
    );
    expect(component.find('View').children().first().props().value).toBe(false);
    component.props().onPress();
    expect(component.find('View').children().first().props().value).toBe(true);
  });

  it('should render icon properly', () => {
    const doneComponent = shallow(
      <TaskItem name="" due_date="" status={TASK_STATUS.DONE} />,
    );
    expect(doneComponent.find('Icon').props().name).toBe('check-circle');
    const progressComponent = shallow(
      <TaskItem name="" due_date="" status={TASK_STATUS.PROGRESS} />,
    );
    expect(progressComponent.find('Icon').props().name).toBe('progress-one');
    const pendingComponent = shallow(
      <TaskItem name="" due_date="" status={TASK_STATUS.PENDING} />,
    );
    expect(pendingComponent.find('Icon').props().name).toBe('pending');
  });
});

Enzyme.configure({adapter: new Adapter()});
