import styled from '@emotion/styled';
import { Property } from 'csstype';

type Props = {
  display?: Property.Display;
  height?: Property.Height;
  width?: Property.Width;
  justifyContent?: Property.JustifyContent;
  alignItems?: Property.AlignItems;
  p?: Property.Padding;
  m?: Property.Margin;
  mt?: Property.MarginTop;
  mr?: Property.MarginRight;
  mb?: Property.MarginBottom;
  ml?: Property.MarginLeft;
  bgcolor?: Property.BackgroundColor;
};

export const Box = styled.div<Props>({}, (props) => ({
  display: props.display,
  height: props.height,
  width: props.width,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  padding: props.p,
  margin: props.m,
  marginTop: props.mt,
  marginRight: props.mr,
  marginBottom: props.mb,
  marginLeft: props.ml,
  backgroundColor: props.bgcolor,
}));
