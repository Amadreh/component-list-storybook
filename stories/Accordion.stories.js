import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Accordion from "./Accordion";

export default {
    title: "Accordion",
    component: Accordion,
};

export const accordion = () => ({
    components: { Accordion },
    template: `<Accordion>
    <div slot="question">Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
    <div slot="answer">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi velit aliquam eveniet numquam
            eius libero neque officiis alias! Minus voluptatibus mollitia nulla iure, cumque enim excepturi
            iusto voluptates beatae itaque.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi velit aliquam eveniet numquam
            eius libero neque officiis alias! Minus voluptatibus mollitia nulla iure, cumque enim excepturi
            iusto voluptates beatae itaque.
        </p>
    </div>
</Accordion>`,
});
