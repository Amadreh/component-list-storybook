<template>
    <div class="faq-item">
        <div class="faq-item__question" @click="show = !show">
            <slot name="question"></slot>
            <button :class="{ show: show }">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 500 500">
                    <path
                        fill="#797979"
                        d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
                    />
                </svg>
            </button>
        </div>
        <transition name="fade">
            <div v-if="show" class="faq-item__answer">
                <slot name="answer"></slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data: () => ({
        show: false,
    }),
    methods: {
        toogleMenu() {
            this.show = !this.show
        },
    },
}
</script>

<style scoped>
.faq-item {
    border-bottom: 1px solid rgb(184, 184, 184);
}

.faq-item__question {
    font-size: 18px;
    color: rgb(92, 92, 92);
    font-weight: bold;
    line-height: 1.5;
    padding-top: 35px;
    padding-bottom: 35px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.faq-item__answer {
    padding-bottom: 25px;
}

.faq-item__answer p {
    font-size: 15px;
    color: rgb(22, 22, 22);
    line-height: 1.6;
    margin-bottom: 30px;
    font-weight: 500;
}

.faq-item__question button {
    transition: all 0.3s ease-in;
}

.faq-item__question button.show {
    transform: rotateX( 180deg );
}
</style>