<template>
  <button class="add-form-btn">Добавить</button>

<dialog class="add-form">
		<label for="fio">Введите ФИО:</label>
		<input type="text" id="fio" name="fio" required><br>

		<label for="phone">Введите номер телефона:</label>
		<input type="tel" id="phone" name="phone" required><br>

		<label for="role">Кем приходитесь:</label>
		<input type="text" id="role" name="role" required><br>

		<button id="addBtn">Добавить</button>
		<button id="cancelBtn">Отмена</button>
</dialog>
</template>
