import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import QuantityButton from './QuantityButton';

export default {
  title: 'QuantityButton',
  component: QuantityButton,
};

export const count = () => ({
  components: { QuantityButton },
  template: '<quantity-button class="product-quantity" count="1"></quantity-button>',
  methods: { action: action('clicked') },
});
