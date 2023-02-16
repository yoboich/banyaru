<script setup></script>

<template>
	<div class="chat-content">
		<div class="chat-content__top">
			<div class="chat-content__left">
				<div class="chat-content__img">
					<img
						src="~/assets/img/cabinet/avatar.png"
						alt=""
						class="chat-content__img-avatar"
					/>
					<img
						src="~/assets/img/promotions/1.jpg"
						alt=""
						class="chat-content__img-bg"
					/>
				</div>
				<div class="chat-content__info">
					<div class="chat-content__name h3">Светлана</div>
					<div class="chat-content__text h4">
						Массаж в 4 руки | 2000 р. <br />
						Здравствуйте
					</div>
				</div>
				<div class="chat-content__checked h4-mini">
					<img src="~/assets/img/chat/checked.svg" alt="" /> 13:00
				</div>
			</div>
			<div class="chat-content__right">
				<img src="~/assets/img/chat/tel.svg" alt="" />
				<img src="~/assets/img/chat/heart.svg" alt="" />
			</div>
		</div>
		<div class="chat-content__main main-chat">
			<div class="main-chat__date"><span>21.01.23</span></div>
			<div class="main-chat__chatting">
				<div class="main-chat__res">
					<div class="main-chat__res-item">
						<div class="main-chat__res-text h3-lite">Добрый день!</div>
						<div class="main-chat__res-time">13:00</div>
					</div>
				</div>
				<div class="main-chat__answer">
					<div class="main-chat__answer-item">
						<div class="main-chat__answer-text h3-lite">Здравствуйте</div>
						<div class="main-chat__answer-time">13:00</div>
					</div>
				</div>
			</div>
			<div class="main-chat__how">
				<img src="~/assets/img/chat/chat-msg.svg" alt="" />
				<div class="main-chat__how-text h3-lite">
					Отвечает за несколько часов
				</div>
			</div>
		</div>
		<div class="chat-content__unread">
			<div class="chat-content__unread-text h4">Непрочитанные сообщения</div>
		</div>
		<div class="chat-content__type type-chat">
			<div class="type-chat__inner">
				<div class="type-chat__title h3-lite">Спросить у продавца</div>
				<div class="type-chat__vars">
					<div class="type-chat__var h3-lite">Какая вместиость</div>
					<div class="type-chat__var h3-lite">Размер бассейна</div>
				</div>
				<div class="type-chat__input">
					<input
						class="type-chat__input-item"
						type="text"
						placeholder="Написать сообщение"
					/>
					<input type="file" id="files" class="type-chat__input-file" />
					<label for="files">
						<img src="~/assets/img/chat/camera.svg" alt="" />
					</label>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>

</style>
