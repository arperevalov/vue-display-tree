<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{isMain?: boolean, isHeader?: boolean, level?: number}>();

</script>

<template>
    <th :class="`col${props.isMain ? ' col--main': ''}`" :style="{paddingLeft: `calc(1em * ${props.level})`}" v-if="isHeader">
        <slot />
    </th>
    <td :class="`col${props.isMain ? ' col--main': ''}`" :style="{paddingLeft: `calc(1em * ${props.level})`}" v-else>
        <slot />
    </td>
</template>

<style scoped lang="scss">
.col {
    display: block;
    flex: 0 0 auto;
    width: 10%;
    padding: 1em 1em;
    outline: 0.5px solid black;
    background: #fff;

    &--main {
        width: 40%;
    }
}
</style>