<template>
    <li class="item">
        <div>
            <div class="info">
                <span style="display: table-cell; vertical-align: middle">
                    <button v-if="spot.theme == 12" type="button" class="btn btn-danger btn-circle btn-sm mr-2"
                        data-bs-toggle="tooltip" title="관광지">
                        <i class="bi bi-geo-alt"></i>
                    </button>
                </span>
                <span class="description">
                    <h5>{{ spot.title }}</h5>
                    <span>{{ spot.address }}</span>
                </span>
                <img id="search-description-img" class="description" src="/src/assets/images/gallery01.jpg" alt="">
            </div>
        </div>
    </li>
</template>

<script setup>

defineProps({
    spot: Object,
})

</script>

<style scoped>
.btn-circle {
    width: 40px;
    height: 40px;
    text-align: center;
    padding: 6px 0px;
    font-size: 12px;
    line-height: 1.428571429;
    border-radius: 20px;
}

.btn-circle.btn-sm {
    width: 30px;
    height: 30px;
    text-align: center;
    padding: 0px 0px;
    font-size: 12px;
    line-height: 1.428571429;
    border-radius: 15px;
}

.btn-circle.btn-lg {
    width: 50px;
    height: 50px;
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.33;
    border-radius: 25px;
}

.btn-circle.btn-xl {
    width: 70px;
    height: 70px;
    padding: 10px 16px;
    font-size: 24px;
    line-height: 1.33;
    border-radius: 35px;
}

li {
    list-style: none;
}

.item {
    position: relative;
    border-bottom: 1px solid #888;
    overflow: hidden;
    cursor: pointer;
    min-height: 65px;
    background-color: rgb(255, 255, 255, 0.8);
    border-radius: 5px;
}

.item span {
    display: block;
    margin-top: 4px;
    margin-right: 10px;
}

.item h5 {
    font-weight: 500;
    line-height: 1.2;
    display: block;
    font-size: 1em;
    margin-bottom: 0;
}

.item h5,
.item .info {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.item .info {
    padding: 10px 0 10px 10px;
    display: inline-flex;
}

.info .gray {
    color: #8a8a8a;
}

.description {
    text-align: left;
    margin-left: 5px;
}

#search-description-img {
    height: 40px;
    margin-left: 1rem;
    border-radius: 20%;
}
</style>