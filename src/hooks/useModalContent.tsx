import { State } from '@store/interface';
import { useSelector } from 'react-redux';

// Demonstration purpose only
export const useModalContent = () => {
  const { title, startDate, endDate, channelItems } = useSelector(
    (state: State) => state.mediaPlan
  );

  return `{
        title: ${title},
        startDate: ${startDate},
        endDate: ${endDate},
        
        channelItems: {
         sea: {
          text: ${
            channelItems.SEA.text.length ? channelItems.SEA.text : 'null'
          },
          
          radio: '${
            channelItems.SEA.radio.length ? channelItems.SEA.radio : 'null'
          }',
         },
     
         display: {
          text: ${
            channelItems.Display.text.length
              ? channelItems.Display.text
              : 'null'
          },

          radio: '${
            channelItems.Display.radio.length
              ? channelItems.Display.radio
              : 'null'
          }',
         },
         
         social: {
          text: ${
            channelItems.Social.text.length ? channelItems.Social.text : 'null'
          },

          radio: '${
            channelItems.Social.radio.length
              ? channelItems.Social.radio
              : 'null'
          }',
         },
     
         affiliate: {
          text: ${
            channelItems.Affiliate.text.length
              ? channelItems.Affiliate.text
              : 'null'
          },

          radio: '${
            channelItems.Affiliate.radio.length
              ? channelItems.Affiliate.radio
              : 'null'
          }',
         },
     
         remarketing: {
          text: ${
            channelItems.Remarketing.text.length
              ? channelItems.Remarketing.text
              : 'null'
          },

          radio: '${
            channelItems.Remarketing.radio.length
              ? channelItems.Remarketing.radio
              : 'null'
          }',
         }
     }`;
};
