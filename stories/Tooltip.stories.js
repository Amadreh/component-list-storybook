import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Tooltip from "./Tooltip";

export default {
    title: "Tooltip",
    component: Tooltip,
};

export const tooltip = () => ({
    components: { Tooltip },
    template: `<tooltip :show="false">
        Text content
    </tooltip>`,
});
