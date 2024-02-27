<script setup>
  import BtnAdd from './components/BtnAdd.vue';
</script>

<template>
  <BtnAdd />
  <table>
        <thead>
            <tr>
                <th>ФИО</th>
                <th>Телефон</th>
                <th>Кем приходится</th>
                <th>Кнопки действий</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Тестовый Тест Тестович</td>
                <td>8 (800) 555 35-35</td>
                <td>Банк</td>
                <td class="action-buttons">
                    <button class="deleteBtn">Удалить</button>
                    <br>
                    <button class="editBtn">Редактировать</button>
                </td>
            </tr>
        </tbody>
    </table>

</template>

<style scoped>
</style>
