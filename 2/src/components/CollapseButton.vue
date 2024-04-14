<script setup lang="ts">
const props = defineProps<{isHidden: boolean}>()
</script>

<template>
    <button :class="`button-collapse${!props.isHidden ? ' button-collapse--open' : ''}`" type="button">
        <div class="button-collapse__arrow">
            ▼
        </div>
        <slot/>
    </button>
</template>

<style scoped lang="scss">
.button-collapse {
    --button-collapse-arrow-transform: initial;
    border: none;
    background: transparent;
    font-size: 1rem;
    display: flex;
    width: 100%;

    &--open {
        --button-collapse-arrow-transform: rotate(-180deg);
    }

    &__arrow {
        transition: transform ease-out 0.1s;
        transform: var(--button-collapse-arrow-transform);
        margin-right: 0.4rem;
    }
}
</style>