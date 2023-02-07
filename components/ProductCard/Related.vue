<script setup>
	import img1 from '~/assets/img/promotions/1.jpg';
	import img2 from '~/assets/img/promotions/2.jpg';
	import img3 from '~/assets/img/promotions/3.jpg';

	const relatedProduct = ref([
		{
			type: 'Сауны',
			name: 'Сауна Дионис-СПА',
			img: img1,
			metro: 'Павелецкая',
			walk: '13 мин пешком',
			price: '22 300',
		},
		{
			type: 'Сауны',
			name: 'Сауна Дионис-СПА',
			img: img2,
			metro: 'Павелецкая',
			walk: '13 мин пешком',
			price: '22 300',
		},
		{
			type: 'Сауны',
			name: 'Гостевые домики Сан-Поль',
			img: img3,
			metro: 'Павелецкая',
			walk: '13 мин пешком',
			price: '22 300',
		},
		{
			type: 'Сауны',
			name: 'Мини-отель Беседка',
			img: img1,
			metro: 'Павелецкая',
			walk: '13 мин пешком',
			price: '22 300',
		},
		{
			type: 'Сауны',
			name: 'Баня-сауна отеля Катюша',
			img: img2,
			metro: 'Павелецкая',
			walk: '13 мин пешком',
			price: '22 300',
		},
	]);
</script>

<template>
	<div class="card card-related">
		<div class="card-related__content">
			<div class="card-related__top">
				<div class="card-related__title h1">Похожи сауны</div>
				<ul class="nav card-related__nav">
					<li class="nav__item">
						<nuxt-link class="nav__link card-related__link h4" to="/1"
							>Бани и&nbsp;сауны</nuxt-link
						>
					</li>
					<li class="nav__item">
						<nuxt-link
							class="nav__link card-related__link h4"
							:class="{ active: true }"
							to="/"
							>Номера</nuxt-link
						>
					</li>
					<li class="nav__item">
						<nuxt-link class="nav__link card-related__link h4" to="/3"
							>Услуги</nuxt-link
						>
					</li>
					<li class="nav__item">
						<nuxt-link class="nav__link card-related__link h4" to="/4"
							>Предбанник</nuxt-link
						>
					</li>
				</ul>
				<UISwiperButton />
			</div>
			<div class="card-related__row">
				<ProductCardRelatedRequest
					v-for="item in relatedProduct"
					:img="item.img"
					:metro="item.metro"
					:type="item.type"
					:name="item.name"
					:walk="item.walk"
					:price="item.price"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.card-related {
		margin-top: 2rem;
		padding: 4rem 0;
		&__content {
		}

		&__top {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 4rem;
			padding: 0 2.9rem;
		}

		&__title {
		}

		&__nav {
		}

		&__link {
			&.active {
				font-size: 1.6rem;
				color: $green-color;
				position: relative;

				&::before {
					content: '';
					position: absolute;
					height: 0.6rem;
					width: 125%;
					background-color: $green-color;
					left: -0.7rem;
					border-radius: 0px 2px 2px 0px;
					bottom: -1.5rem;
				}
			}
		}

		&__row {
			display: flex;
		}
	}

	.nav {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5.6rem;
		&__item {
		}
		&__link {
		}
	}
</style>
