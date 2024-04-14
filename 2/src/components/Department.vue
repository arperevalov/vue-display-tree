<script setup lang="ts">
import {defineProps, ref} from 'vue';
import CollapseButton from './CollapseButton.vue';
import Row from './Row.vue';
import Col from './Col.vue';
import DepartmentBodyInterface from '../interfaces/DepartmentBodyInterface';

const props = defineProps<{value: DepartmentBodyInterface, name: string, level: number}>();

const hidden = ref(true);

const onToggleCick = () => {
    hidden.value = !hidden.value;
}

const childrenLevel = props.level + 1;

</script>

<template>
    <Row>
        <Col :is-main="true" :level="level">
            <CollapseButton v-if="props.value.children" @click="onToggleCick" :is-hidden="hidden">
                {{ props.name }}
            </CollapseButton>
            <template v-else>
                {{ props.name }}
            </template>
        </Col>
        <Col>
            {{ props.value.data['2020'] }}
        </Col>
        <Col>
            {{ props.value.data['2021'] }}
        </Col>
        <Col>
            {{ props.value.data['2022'] }}
        </Col>
        <Col>
            {{ props.value.data['2023'] }}
        </Col>
        <Col>
            {{ props.value.data['2024'] }}
        </Col>
    </Row>
    <template v-if="!hidden && props.value.children">
        <Department v-for="item in Object.keys(props.value.children)" :value ="props.value.children[item]" :name="item" :level="childrenLevel"/>
    </template>
</template>

<style scoped lang="scss">
</style>