import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';

import {MyPage,MyPageProps} from "./MyPage";

import {MyOtherComponent,MyOtherComponentProps} from '@components/MyOtherComponent'

import Image2 from '@images/image_2.jpg'
import Image3 from '@images/image_3.jpg'

export default {
  component: MyPage,
  title: "MyPage",
} as Meta;

const Template: Story<MyPageProps> = (args) => <MyPage {...args} />;
export const Default = Template.bind({});
Default.args = {
  propertyA: "Boop",
  propertyB: "One other boop",
  imageA:Image2,
  imageB:Image3
};

// component added through aliasing
const MyOtherComponentTemplate: Story<MyOtherComponentProps> = (args) => <MyOtherComponent {...args} />;
export const otherComponentExample = MyOtherComponentTemplate.bind({})
otherComponentExample.args = {
  anotherProp:33
};
otherComponentExample.storyName='Alias with Storybook and components'

//