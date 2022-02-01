import styled from '@emotion/styled';
import { Property } from 'csstype';

type Props = {
  position?: Property.Position;
  top?: Property.Top;
  right?: Property.Right;
  display?: Property.Display;
  height?: Property.Height;
  width?: Property.Width;
  flexDirection?: Property.FlexDirection;
  justifyContent?: Property.JustifyContent;
  alignItems?: Property.AlignItems;
  textAlign?: Property.TextAlign;
  p?: Property.Padding;
  m?: Property.Margin;
  mt?: Property.MarginTop;
  mr?: Property.MarginRight;
  mb?: Property.MarginBottom;
  ml?: Property.MarginLeft;
  cursor?: Property.Cursor;
  pointerEvents?: Property.PointerEvents;
  bgcolor?: Property.BackgroundColor;
};

export const Box = styled.div<Props>({}, (props) => ({
  position: props.position,
  top: props.top,
  right: props.right,
  display: props.display,
  height: props.height,
  width: props.width,
  flexDirection: props.flexDirection,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  textAlign: props.textAlign,
  padding: props.p,
  margin: props.m,
  marginTop: props.mt,
  marginRight: props.mr,
  marginBottom: props.mb,
  marginLeft: props.ml,
  cursor: props.cursor,
  pointerEvents: props.pointerEvents,
  backgroundColor: props.bgcolor,
}));
