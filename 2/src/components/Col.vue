<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{isMain?: boolean, isHeader?: boolean, level?: number}>();

</script>

<template>
    <component :is="isHeader ? 'th' : 'td'" :class="`col${props.isMain ? ' col--main': ''}${props.isHeader ? ' col--header': ''}`" :style="{paddingLeft: `calc(1em * ${props.level})`}">
        <slot />
    </component>
</template>

<style scoped lang="scss">
.col {
    display: block;
    flex: 0 0 auto;
    width: 10%;
    padding: 1em 1em;
    outline: 0.5px solid black;
    background: #fff;
    text-align: right;

    &--main {
        width: 40%;
        text-align: left;
    }

    &--header {
        text-align: center;
    }
}
</style>