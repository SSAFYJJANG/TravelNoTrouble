<template>
    <div class="card-scene">

        <Container orientation="horizontal" @drop="onColumnDrop" drag-handle-selector=".column-drag-handle"
            :drop-placeholder="upperDropPlaceholderOptions">
            <Draggable v-for="(column, index) in scene.children" :key="column.id">
                <div :class="column.props.className">
                    <button class="column-drag-handle">
                        <span @click="addRow(column)"> {{ index }}</span>
                        <i class="bi bi-x remove-column-button" @click="removeColumn(column.id)"></i>
                    </button>
                    <Container group-name="col" @drop="e => onCardDrop(column.id, e)"
                        :get-child-payload="getCardPayload(column.id)" drag-class="card-ghost"
                        drop-class="card-ghost-drop" :drop-placeholder="dropPlaceholderOptions">

                        <Draggable v-for="card in column.children" :key="card.id">
                            <PlanDaysDetail :class="card.props.className" :style="card.props.style">
                            </PlanDaysDetail>
                        </Draggable>

                    </Container>

                </div>
            </Draggable>

            <button class="column-add-button" @click="addColumn">+</button>

        </Container>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { CFormCheck } from '@coreui/vue';
import { Container, Draggable } from 'vue3-smooth-dnd';
import PlanDaysDetail from "@/components/attraction/PlanDaysDetail.vue"
const applyDrag = (arr, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult
    if (removedIndex === null && addedIndex === null) return arr
    const result = [...arr]
    let itemToAdd = payload
    if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0]
    }
    if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd)
    }
    return result
}

const cardColors = [
    'azure', 'beige', 'bisque', 'blanchedalmond',
    'cornsilk', 'gainsboro', 'ghostwhite', 'ivory',
    'lightCyan', 'palegreen', 'ivory', 'linen', 'whitesmoke'
];

const pickColor = () => {
    const rand = Math.floor(Math.random() * cardColors.length);
    return cardColors[rand];
};

const scene = ref({
    type: 'container',
    props: { orientation: 'horizontal' },
    children: []
});

const addRow = (parent) => {
    const newRow = {
        type: 'draggable',
        id: `${scene.value.children.length}${scene.value.children.children && scene.value.children.children.length ? scene.value.children.children.length : 0}`,
        props: { className: 'card', style: { backgroundColor: pickColor() } },
    };
    parent.children.push(newRow);
}

const addColumn = () => {
    const newColumn = {
        id: `${scene.value.children.length}`,
        type: 'container',
        name: 'New Column',
        props: { orientation: 'vertical', className: 'card-container' },
        children: []
    };
    scene.value.children.push(newColumn);
};

const upperDropPlaceholderOptions = {
    className: 'cards-drop-preview',
    animationDuration: '150',
    showOnTop: true
};

const dropPlaceholderOptions = {
    className: 'drop-preview',
    animationDuration: '150',
    showOnTop: true
};

const onColumnDrop = (dropResult) => {
    const updatedScene = { ...scene.value };
    updatedScene.children = applyDrag(updatedScene.children, dropResult);
    scene.value = updatedScene;
};

const onCardDrop = (columnId, dropResult) => {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        const updatedScene = { ...scene.value };
        const column = updatedScene.children.find(p => p.id === columnId);
        const columnIndex = updatedScene.children.indexOf(column);

        const newColumn = { ...column };
        newColumn.children = applyDrag(newColumn.children, dropResult);
        updatedScene.children.splice(columnIndex, 1, newColumn);

        scene.value = updatedScene;
    }
};

const getCardPayload = (columnId) => (index) => {
    return scene.value.children.find(p => p.id === columnId).children[index];
};
// 열 삭제 함수
const removeColumn = (columnId) => {
    scene.value.children = scene.value.children.filter(column => column.id !== columnId);
};

</script>

<style>
.smooth-dnd-container {
    /* background-color: salmon; */
    width: 360px;
}

.column-drag-handle,
.column-add-button {
    width: 50px;
    background-color: white;
    border: 1.5px solid salmon;
    border-radius: 10px 10px 0px 0px;
}

.smooth-dnd-container.horizontal {
    display: table !important;
}

.smooth-dnd-draggable-wrapper .smooth-dnd-container {
    position: absolute;
    left: 0;
    background-color: salmon;
}

.card-container {
    text-align: center;
    width: 50px;
}

.smooth-dnd-container.horizontal>.smooth-dnd-draggable-wrapper {
    width: calc(51px);
}

.vertical {
    min-height: calc(70vh) !important;
}

.card {
    margin: 0.25rem;
}

.selectCol {
    background-color: salmon;
}
</style>