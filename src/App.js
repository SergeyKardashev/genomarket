import './App.css';
import { Button } from 'antd';
import { Typography, Divider } from "antd";
import { HeartTwoTone } from '@ant-design/icons';

const { Title, Paragraph, Text, Link } = Typography;

function App() {
  return (
    <div className="App">
      <Button icon={<HeartTwoTone twoToneColor="#eb2f96"/>}>Button</Button>
      <Button><HeartTwoTone/>Button</Button>
      <Button style={{margin: 50}} size="large" loading>Button</Button>
      <Button type="primary" block>Button</Button>
      <Button type="primary" danger>Button</Button>
      <Button type="primary" disabled>Button</Button>

  <Typography>
    <Title>Introduction</Title>

    <Paragraph>Body text</Paragraph>

    <Paragraph>
      After massive project practice, which aims to{' '}
      <Text strong>
        uniform the user interface
      </Text>
      .
    </Paragraph>

    <Title level={2}>Guidelines</Title>

    <Paragraph>
      We supply a series of design principles
      (<Text code>Sketch</Text> and <Text code>Axure</Text>).
    </Paragraph>

    <Paragraph>
      <ul>
        <li>
          <Link href="/docs/spec/proximity">Principles</Link>
        </li>
        <li>
          <Link href="/docs/spec/overview">Patterns</Link>
        </li>
      </ul>
    </Paragraph>

    <Paragraph>
      Press <Text keyboard>Esc</Text> to...
    </Paragraph>

    <Divider />

    <Paragraph>Paragraph after Divider</Paragraph>
  </Typography>
    </div>
  );
}

export default App;
