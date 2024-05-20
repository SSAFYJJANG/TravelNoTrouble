<template>
    <div class="card-scene">

        <Container orientation="horizontal" @drop="onColumnDrop" drag-handle-selector=".column-drag-handle"
            @drag-start="dragStart" :drop-placeholder="upperDropPlaceholderOptions">
            <Draggable v-for="column in scene.children" :key="column.id">
                <div :class="column.props.className">
                    <button class="column-drag-handle">&#x2630;</button>
                    <!-- <div class="card-column-header"> {{ column.name }} </div> -->
                    <Container group-name="col" @drop="e => onCardDrop(column.id, e)"
                        @drag-start="e => log('drag start', e)" @drag-end="e => log('drag end', e)"
                        :get-child-payload="getCardPayload(column.id)" drag-class="card-ghost"
                        drop-class="card-ghost-drop" :drop-placeholder="dropPlaceholderOptions">


                        <Draggable v-for="card in column.children" :key="card.id">
                            <div :class="card.props.className" :style="card.props.style">
                                <p>{{ card.data }}</p>
                            </div>
                        </Draggable>

                    </Container>
                </div>
            </Draggable>
            <button class="column-add-button">+</button>
        </Container>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Container, Draggable } from 'vue3-smooth-dnd';

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

const generateItems = (count, creator) => {
    const result = []
    for (let i = 0; i < count; i++) {
        result.push(creator(i))
    }
    return result
}

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const columnNames = ['Lorem', 'Ipsum', 'Consectetur'];

const cardColors = [
    'azure', 'beige', 'bisque', 'blanchedalmond', 'burlywood',
    'cornsilk', 'gainsboro', 'ghostwhite', 'ivory', 'khaki'
];

const pickColor = () => {
    const rand = Math.floor(Math.random() * cardColors.length);
    return cardColors[rand];
};

const scene = ref({
    type: 'container',
    props: { orientation: 'horizontal' },
    children: generateItems(2, i => ({
        id: `column${i}`,
        type: 'container',
        name: columnNames[i],
        props: { orientation: 'vertical', className: 'card-container' },
        children: generateItems(+(1).toFixed() + 5, j => ({
            type: 'draggable',
            id: `${i}${j}`,
            props: { className: 'card', style: { backgroundColor: pickColor() } },
            data: lorem.slice(0, Math.floor(Math.random() * 150) + 30)
        }))
    }))
});

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

const dragStart = () => {
    console.log('drag started');
};

const log = (...params) => {
    console.log(...params);
};
</script>

<style>
.smooth-dnd-container {
    background-color: red;
    width: 360px;
}

.column-drag-handle,
.column-add-button {
    width: 50px;
    background-color: blue;
    border: 1px solid green;
    border-radius: 10px 10px 0px 0px;
}

.smooth-dnd-container.horizontal {
    display: table !important;
}

.smooth-dnd-draggable-wrapper .smooth-dnd-container {
    position: absolute;
    left: 0;
}

.card-container {
    text-align: center;
    width: 50px;
}

.smooth-dnd-container.horizontal>.smooth-dnd-draggable-wrapper {
    width: calc(52px);
}
</style>