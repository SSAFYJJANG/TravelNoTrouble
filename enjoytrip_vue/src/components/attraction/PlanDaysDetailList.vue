<template>
    <div class="card-scene">
        <p class="info">
            <i class="bi bi-info-circle"></i>
            <i class="fa-solid fa-plus fa-2xs"></i>를 클릭하면 Day를 추가할 수 있어요
        </p>
        <div class="pagination-controls">
            <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
            <span>{{ currentPage }} / {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
        </div>
        <Container orientation="horizontal" @drop="onColumnDrop" drag-handle-selector=".column-drag-handle"
            :drop-placeholder="upperDropPlaceholderOptions">
            <Draggable v-for="(column, index) in scene.children" :key="column.id">
                <div :class="column.props.className" :style="getColumnStyle(column.id)" @mouseover="hoverCol(column.id)"
                    @mouseleave="hoverCol(null)">
                    <button @click="selectCol(column.id)" :style="selectedColumnId === column.id ? selectedStyle : {}"
                        class="column-drag-handle d-flex align-items-center justify-content-between pe-0 ps-2">
                        <span @click="addRow(column)"> {{ index + 1 }}</span>
                        <i class="bi bi-x remove-column-button ml-auto" @click="removeColumn(column.id)">
                        </i>
                    </button>

                    <Container group-name="col" v-show="selectedColumnId === column.id"
                        @drop="e => onCardDrop(column.id, e)" @drag-start="onDragStart" @drag-end="onDragEnd"
                        :get-child-payload="getCardPayload(column.id)" drag-class="card-ghost"
                        drop-class="card-ghost-drop" :drop-placeholder="dropPlaceholderOptions"
                        :style="{ zIndex: column.zIndex }">
                        <Draggable v-for="card in column.children" :key="card.id">
                            <div :class="card.props.className" :style="card.props.style">
                                <PlanDaysDetail :attraction="attraction">
                                </PlanDaysDetail>
                            </div>
                        </Draggable>
                    </Container>
                </div>
            </Draggable>
            <button class="column-add-button" @click="addColumn">
                <i class="fa-solid fa-plus fa-2xs"></i>
            </button>
        </Container>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Container, Draggable } from 'vue3-smooth-dnd';
import PlanDaysDetail from "@/components/attraction/PlanDaysDetailItem.vue"

import data from "@/data/index.js";
const attraction = ref({});
attraction.value = data.attractionList[0];

// 선택된 열 ID
const selectedColumnId = ref(0);
const selectedStyle = {
    backgroundColor: 'salmon',
    color: 'white'
};

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


const scene = ref({
    type: 'container',
    props: { orientation: 'horizontal' },
    children: []
});

const addRow = (parent) => {
    const newRow = {
        type: 'draggable',
        id: `${scene.value.children.length}${scene.value.children.children && scene.value.children.children.length ? scene.value.children.children.length : 0}`,
        props: { className: 'card', style: { boxShadow: "0px 2px 6px 0px #89737380" } },
    };
    parent.children.push(newRow);
}

const addColumn = () => {
    const newColumn = {
        id: `${scene.value.children.length}`,
        type: 'container',
        name: 'New Column',
        props: { orientation: 'vertical', className: 'card-container' },
        children: [],
        zIndex: 0,
    };
    scene.value.children.push(newColumn);
    selectCol(newColumn.id);
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
    // Ensure the selected column stays highlighted after drop
    if (selectedColumnId.value) {
        const selectedColumn = updatedScene.children.find(column => column.id === selectedColumnId.value);
        if (selectedColumn) {
            selectCol(selectedColumnId.value);
        }
    }
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

// 열 선택 함수
const selectCol = (columnId) => {
    selectedColumnId.value = columnId;
    scene.value.children.forEach((column) => {
        column.zIndex = column.id === columnId ? 20 : 0;
    });
};

// 드래그 중인지 여부를 추적하는 상태
const isDragging = ref(false);

// 드래그 시작 함수
const onDragStart = () => {
    isDragging.value = true;
};

// 드래그 종료 함수
const onDragEnd = () => {
    isDragging.value = false;
};

// 마우스 오버된 열 ID
const hoveredColumnId = ref(null);

// 열 마우스 오버 함수
const hoverCol = (columnId) => {
    hoveredColumnId.value = columnId;
};

// 열 스타일 가져오기 함수
const getColumnStyle = (columnId) => {
    if (hoveredColumnId.value === columnId && isDragging.value && hoveredColumnId.value != selectedColumnId.value) {
        return {
            position: 'fixed',
            transform: 'translateY(-300px)',
            transition: 'transform 1s ease-in-out',
            // zIndex: 20 // Ensure the hovered column is on top
        };
    }
    return { display: selectedColumnId.value === columnId ? 20 : 0 };
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
    background-color: white;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    border: 2px solid salmon
}

.card-container {
    text-align: center;
    width: 50px;
}

.smooth-dnd-container.horizontal>.smooth-dnd-draggable-wrapper {
    width: calc(51px);
}

.vertical {
    min-height: calc(60vh) !important;
}

.card {
    margin: 0.25rem;
}

.selectCol {
    background-color: salmon;
}

.card {
    border-radius: 5px;
}

.info {
    margin: 0 0 .5rem;
}

i {
    margin: 0 .2rem;
}

/* {
    transform: translateY(-50px);
    transition: transform 0.3s ease-in-out;
} */
</style>