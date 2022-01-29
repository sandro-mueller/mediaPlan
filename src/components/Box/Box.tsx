import styled from '@emotion/styled';
import { Property } from 'csstype';

type Props = {
  display?: Property.Display;
  justifyContent?: Property.JustifyContent;
  alignItems?: Property.AlignItems;
  m?: Property.Margin;
  mt?: Property.MarginTop;
  mr?: Property.MarginRight;
  mb?: Property.MarginBottom;
  ml?: Property.MarginLeft;
};

export const Box = styled.div<Props>({}, (props) => ({
  display: props.display,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  margin: props.m + 'px',
  marginTop: props.mt + 'px',
  marginRight: props.mr + 'px',
  marginBottom: props.mb + 'px',
  marginLeft: props.ml + 'px',
}));
