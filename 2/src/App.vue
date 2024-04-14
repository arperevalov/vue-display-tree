<script setup lang="ts">
import Department from './components/Department.vue';
import DepartmentInterface from "./interfaces/DepartmentInterface";
import Row from './components/Row.vue';
import Col from './components/Col.vue';
import { Ref, onMounted, ref } from 'vue';

let data: Ref<DepartmentInterface | null> = ref(null);

onMounted(() => {
    fetch('/res-second-task.json')
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        data.value = response;
    })
})
</script>

<template>
    <table class="table">
        <thead class="thead-sticky">
            <Row>
            <Col :is-header="true" :is-main="true">
                Наименование
            </Col>
            <Col :is-header="true">
                Год 2020
            </Col>
            <Col :is-header="true">
                Год 2021
            </Col>
            <Col :is-header="true">
                Год 2022
            </Col>
            <Col :is-header="true">
                Год 2023
            </Col>
            <Col :is-header="true">
                Год 2024
            </Col>
            </Row>
        </thead>
        <tbody v-if="data">
            <Department v-for="item in Object.keys(data)" :value ="data[item]" :name="item" :level="0"/>
        </tbody>
    </table>
</template>

<style scoped lang="scss">
.table {
  position: relative;
  width: 100%;
}

.thead-sticky {
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 999;
}
</style>