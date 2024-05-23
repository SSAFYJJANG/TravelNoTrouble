<script setup>
defineProps({ article: Object });
</script>

<template>
    <tr class="text-center">
        <th scope="row">{{ article.board_id }}</th>
        <td class="text-start">
            <router-link :to="{ name: 'article-view', params: { articleno: article.board_id } }" class="article-title link-dark">
                {{ article.title }}
            </router-link>
        </td>
        <td>{{ article.username }} ({{ article.userId }})</td>
        <td>{{ article.hit }}</td>
        <td>{{ article.regist_time }}</td>
    </tr>
</template>

<style scoped>
a {
    text-decoration: none;
}
</style>
