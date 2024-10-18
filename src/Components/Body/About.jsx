import React from 'react';
import { Flex, Progress } from 'antd';
const About = () => (
  <div className='about'>
    <h1>This is About Section</h1>
  <Flex gap="small" wrap>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
  </Flex>
  </div>
);
export default About;