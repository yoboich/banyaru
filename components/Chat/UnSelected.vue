<script setup></script>

<template>
	<div class="chat-content">
		<div class="chat-content__top un-selected__top">
			<div class="chat-content__left">
				<div class="chat-content__info">
					<div class="chat-content__name h3">Светлана</div>
					<div class="chat-content__status h4">В сети</div>
				</div>
			</div>
			<div class="chat-content__right">
				<img src="~/assets/img/chat/tel.svg" alt="" />
			</div>
		</div>
		<div class="chat-content__main main-chat">
			<div class="main-chat__date"><span>21.01.23</span></div>
			<div class="main-chat__chatting">
				<div class="main-chat__res">
					<div class="main-chat__res-item">
						<div class="main-chat__res-text h3-lite">Добрый день!</div>
						<div class="main-chat__res-time h4-mini">13:00</div>
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
				<button class="main-chat__btn btn btn-green h2-lite">Добавить объявление</button>
			</div>
		</div>
		<div class="chat-content__type type-chat">
			<div class="type-chat__inner">
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
	.un-selected__top {
		padding-left: 4rem;
	}
</style>
