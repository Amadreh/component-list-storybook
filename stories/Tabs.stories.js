import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Tabs from './Tabs';
import Tab from './Tab';

export default {
  title: 'Tabs',
  component: Tabs, 
};

export const tabs = () => ({
  components: { Tabs, Tab },
  template: `<tabs>
  <tab name="Главные новости" :selected="true">
    Главные новости
  </tab>
  <tab name="Популярные">
    Популярные
  </tab>
</tabs>`,
});
