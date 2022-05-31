import { ComponentMeta, ComponentStory } from '@storybook/react';
import Flux from '@components/Flux';

const { Row, Col } = Flux;

export default { title: 'Component/Flux', componeent: Flux };

const Box = () => {
  return (
    <div
      style={{
        backgroundColor: '#44b',
        width: `100%`,
        height: 30,
        color: 'white',
        textAlign: 'center',
      }}
    >
      Box
    </div>
  );
};

export const Default = () => {
  return (
    <Row gutter={[8, 8]}>
      <Col span={2} offset={0}>
        <Box />
      </Col>
      <Col span={2} offset={0}>
        <Box />
      </Col>
      <Col span={4} offset={0}>
        <Box />
      </Col>
      <Col span={2} offset={0}>
        <Box />
      </Col>
      <Col span={2} offset={0}>
        <Box />
      </Col>
      <Col span={4} offset={0}>
        <Box />
      </Col>
      <Col span={4} offset={0}>
        <Box />
      </Col>
      <Col span={2} offset={0}>
        <Box />
      </Col>
      <Col span={2} offset={0}>
        <Box />
      </Col>
      <Col span={4} offset={0}>
        <Box />
      </Col>
      <Col span={2} offset={0}>
        <Box />
      </Col>
      <Col span={2} offset={0}>
        <Box />
      </Col>
      <Col span={4} offset={0}>
        <Box />
      </Col>
      <Col span={4} offset={4}>
        <Box />
      </Col>
    </Row>
  );
};
