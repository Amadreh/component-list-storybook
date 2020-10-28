<template>
    <i class="js_info" v-on:mouseover="showShowText" v-on:mouseleave="hiddenShowText" v-cloak>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#333" d="M8.867 6.526c.036.074.073.147.11.202.036.054.09.11.127.164.055.055.11.11.183.165.055.036.128.091.22.11a.905.905 0 00.237.072c.092.019.165.019.238.019.073 0 .165 0 .238-.019a.654.654 0 00.2-.073h.019a1.183 1.183 0 00.384-.274l.018-.018c.055-.055.092-.11.128-.165.037-.055.073-.11.092-.183 0-.018 0-.018.018-.036.036-.073.055-.165.073-.238.018-.073.018-.164.018-.237 0-.074 0-.165-.018-.238-.018-.073-.037-.146-.073-.238a1.038 1.038 0 00-.22-.329l-.036-.036c-.055-.055-.11-.092-.183-.147-.073-.036-.128-.073-.201-.11a1.029 1.029 0 00-.22-.072c-.09-.019-.164-.019-.237-.019-.073 0-.165 0-.238.019-.073.018-.146.036-.22.073h-.017a1.994 1.994 0 00-.201.11c-.074.054-.128.09-.183.146-.055.054-.11.11-.147.164-.036.055-.073.128-.11.201a1.03 1.03 0 00-.072.22c-.019.091-.019.164-.019.237 0 .073 0 .165.019.238.018.146.055.22.073.292zM11.408 13.218h-.42v-4.48a.472.472 0 00-.476-.475h-1.92a.472.472 0 00-.475.476v.987c0 .256.201.475.476.475h.383v3.035h-.383a.472.472 0 00-.476.475v.987c0 .256.201.476.476.476h2.815a.472.472 0 00.475-.476v-.987a.488.488 0 00-.475-.493z"/><path fill="#333" d="M10 0C4.479 0 0 4.479 0 10s4.479 10 10 10 10-4.479 10-10S15.521 0 10 0zm0 18.684c-4.79 0-8.684-3.894-8.684-8.684 0-4.79 3.894-8.684 8.684-8.684 4.79 0 8.684 3.894 8.684 8.684 0 4.79-3.894 8.684-8.684 8.684z"/></svg>
        <transition name="bounce">
            <div class="chart-item-info" v-show="showText">
                <slot></slot>
            </div>
        </transition>
    </i>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: true,
            default: false
        },
        color:{
            type: String,
            required: false,
            default: '3C80AD'
        }
    },
    computed: {
        colorSVG: function () {
            return `#${this.color}`;
        },
        positionLeftToBody: function() {
            let anchorCoords = this.$el.getBoundingClientRect();
            return anchorCoords.left;
        },
        positionRigthToBody: function() {
            let anchorCoords = this.$el.getBoundingClientRect();
            return document.body.offsetWidth  - anchorCoords.left;
        }
    },
    data() {
        return {
            showText: this.show,
            mytooltipTextWidth: 320
        };
    },
    methods: {
        showShowText: function() {
            this.showText = true;
            let mytooltipTextElement = this.$el.querySelector('.chart-item-info'); 
            let anchorCoords = this.$el.getBoundingClientRect();
        },
        hiddenShowText: function() {
            this.showText = false;
        },
        positionAt: (anchor, position, elem, widthTooltip) => {
            let anchorCoords = anchor.getBoundingClientRect();
            switch (position) {
                case "top":
                elem.style.left = anchorCoords.left + "px";
                elem.style.transform = "none";
                elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
                break;

                case "right":
                elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
                elem.style.transform = "none";
                elem.style.top = anchorCoords.top + "px";
                break;

                case "left":
                elem.style.left = anchorCoords.left - widthTooltip + "px";
                elem.style.transform = "none";
                elem.style.top = anchorCoords.top + "px";
                break;

                case "bottom":
                elem.style.left = anchorCoords.left + "px";
                elem.style.transform = "none";
                elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
                break;

                case "center":
                elem.style.left = "50%";
                elem.style.transform = "translate(-50%)";
                elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
                break;
            }
        }
    },
}
</script>

<style>
.chart-item-info {
    font-style: normal;
    font-weight: 400;
    padding: 15px 25px 35px;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    z-index: 9;
    max-width: 675px;
}


.bounce-enter-active {
    animation: bounce-in .5s;
}

.bounce-leave-active {
    animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}
</style>