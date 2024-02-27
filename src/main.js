import { createApp } from 'vue';
import "./assets/style.css";
import App from './App.vue';

createApp(App).mount('#app');



function bindEventHandlers() {
	// "Изменить"
	document.querySelectorAll('.editBtn').forEach(function (button) {
		button.addEventListener('click', editRow);
	});

	// "Удалить"
	document.querySelectorAll('.deleteBtn').forEach(function (button) {
		button.addEventListener('click', deleteRow);
	});
}

document.getElementById('addBtn').addEventListener('click', function () {
	var fio = document.getElementById('fio').value;
	var phone = document.getElementById('phone').value;
	var role = document.getElementById('role').value;

	var table = document.querySelector('table tbody');
	var newRow = table.insertRow(table.rows.length);

	var cell1 = newRow.insertCell(0);
	cell1.innerHTML = fio;

	var cell2 = newRow.insertCell(1);
	cell2.innerHTML = phone;

	var cell3 = newRow.insertCell(2);
	cell3.innerHTML = role;

	var cell4 = newRow.insertCell(3);
	var actionButtons = document.createElement('div');
	actionButtons.className = 'action-buttons';
	actionButtons.innerHTML = '<button class="editBtn">Изменить</button><br><button class="deleteBtn">Удалить</button>';
	cell4.appendChild(actionButtons);

	document.querySelector('.add-form').close();

	bindEventHandlers();
});

//"Добавить"
document.querySelector('.add-form-btn').addEventListener('click', function () {
	document.querySelector('.add-form').showModal();
});

//"Отмена"
document.getElementById('cancelBtn').addEventListener('click', function () {
	document.querySelector('.add-form').close();
});

// Редактирование
function editRow() {
	var row = this.closest('tr');
	var cells = row.getElementsByTagName('td');

	for (var i = 0; i < cells.length - 1; i++) {
		var cellText = cells[i].innerText;

		var input = document.createElement('input');
		input.type = 'text';
		input.value = cellText;

		cells[i].innerHTML = '';
		cells[i].appendChild(input);
	}

	var actionButtons = row.querySelector('.action-buttons');
	actionButtons.innerHTML = '<button class="saveBtn">Сохранить</button><br><button class="cancelBtn">Отмена</button>';
	row.querySelector('.saveBtn').addEventListener('click', saveRow);
	row.querySelector('.cancelBtn').addEventListener('click', cancelEdit);
}

// Сохранение
function saveRow() {
	var row = this.closest('tr');
	var cells = row.getElementsByTagName('td');

	for (var i = 0; i < cells.length - 1; i++) {
		var input = cells[i].querySelector('input');
		var inputValue = input.value;

		cells[i].innerHTML = inputValue;
	}

	var actionButtons = row.querySelector('.action-buttons');
	actionButtons.innerHTML = '<button class="editBtn">Редактировать</button><br><button class="deleteBtn">Удалить</button>';

	bindEventHandlers();
}

// Отмена редактирования
function cancelEdit() {
	var row = this.closest('tr');
	var cells = row.getElementsByTagName('td');

	for (var i = 0; i < cells.length - 1; i++) {
		var input = cells[i].querySelector('input');
		var cellText = input.value;

		cells[i].innerHTML = cellText;
	}

	var actionButtons = row.querySelector('.action-buttons');
	actionButtons.innerHTML = '<button class="editBtn">Редактировать</button><br><button class="deleteBtn">Удалить</button>';

	bindEventHandlers();
}

// Удаление строки
function deleteRow() {
	var row = this.closest('tr');
	row.parentNode.removeChild(row);
}

// Привязываем обработчики событий к кнопкам "Редактировать" и "Удалить" при загрузке страницы
bindEventHandlers();