<template>
    <div>
        <div class="tabs" :class="tabsClass">
            <div 
                v-for="(tab, index) in tabs" 
                :class="[ 
                    tab.isActive ? activeClass : '',
                    buttonClass 
                ]" 
                :key="index"
            >
                <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
            </div>
        </div>

        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        buttonClass: {
            type: String,
            required: false
        },
        tabsClass: {
            type: String,
            required: false
        }
    },
    data() {
        return { 
            activeClass: 'active',
            tabs: [] 
        }
    },
    created() {
        this.tabs = this.$children
    },
    methods: {
        selectTab(selectedTab) {
            this.$emit('set_tab', selectedTab.name)
            this.tabs.forEach((tab) => {
                tab.isActive = tab.name == selectedTab.name
            })
        },
    },
}
</script>

<style scoped>
.tabs {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}
</style>