<script setup>
	let activeTab = ref(1);
	let secActiveTab = ref(1);
	let activeProductTab = ref(1);

	const tabs = [
		{
			text: 'Все',
		},
		{
			text: 'Чаты',
			notif: 1,
		},
		{
			text: 'Звонки',
		},
	];
  const users = [
    {
      image: "online-user.png"
    },
    {
      image: "users.png"
    },
    {
      image: "online-user.png"
    },
    {
      image: "users.png"
    },
    {
      image: "online-user.png"
    },
    {
      image: "users.png"
    },
    {
      image: "online-user.png"
    },
    {
      image: "users.png"
    },
    {
      image: "online-user.png"
    },
    {
      image: "users.png"
    },
    {
      image: "online-user.png"
    },
    {
      image: "users.png"
    },
    {
      image: "online-user.png"
    },
    {
      image: "users.png"
    },
    {
      image: "online-user.png"
    },
    {
      image: "online-user.png"
    },
  ]
</script>

<template>
	<div class="chat-msg">
		<div class="chat-msg__row">
      <img src="../../assets/img/chat/message-backgound.png" alt="middle-background">
      <h4>У вас пока нет новых сообщений</h4>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.chat-msg {
    &__row {
      & img {
        width: 158px;
        height: 158px;
      }
      & h4 {
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        font-size: 16px;
        color: #8F99BA;
        margin-top: 10px;
      }
    }
		&__sec-tab {
			background: #ffffff;
			box-shadow: inset 0px 0px 8px rgba(136, 152, 206, 0.46);
			border-radius: 100px;
			padding: 0.3rem;
			margin-top: 1.5rem;
			overflow: hidden;

			display: none;
			@media screen and (max-width: 768px) {
				display: flex;
			}
		}

		&__sec-tab-item {
			flex: 1;
			padding: 1.6rem 4rem;
			text-align: center;
			cursor: pointer;
			color: $mainFontColor;

			&.active {
				background: #ffffff;
				box-shadow: 0px 6px 21px rgba(166, 175, 205, 0.22);
				border-radius: 100px;
			}
		}
	}

  .chat-content__info span {
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    font-size: 11px;
    color: #3E3E51;
  }
  .h4-mini {
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    font-size: 9px;
    color: #8F99BA;
  }

	.nav {
		display: flex;
		align-items: flex-start;
		&__inner {
			display: flex;
      margin: 0 auto;
		}
		&__item {
      cursor: pointer;
      padding: 1.5rem 3rem 1.5rem;
      border-top: 1px solid rgba(143, 153, 186, 0.15);
      border-right: 1px solid rgba(143, 153, 186, 0.15);
      border-radius: 6px 6px 0px 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      font-family: "Lato", sans-serif;
      font-weight: 500;
      font-size: 14px;
      color: #3E3E51;

			& span {
        font-size: 10px;
        display: flex;
        background: #32BD1B;
        color: white;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        padding: 3px;
        align-items: center;
        justify-content: center;
			}
			&:nth-child(1) {
				border-left: 1px solid rgb(56%, 60%, 73%, 0.15);
			}
			&_active {
				color: #32BD1B;
				border: none;
				background: #ffffff;
				box-shadow: 0px -3px 9px rgba(136, 152, 206, 0.19);
				border-radius: 6px 6px 0px 0px;
			}
		}
	}

	.chat-msg {
		&__help {
			display: flex;
			align-items: center;
			margin-top: 1.5rem;
			gap: 1.4rem;
      background: #FFFFFF;
      border: 2px solid #32BD1B33;
      border-radius: 12px;
      padding: 15px;
		}

		&__help-name {
			color: $mainFontColor;
			margin-bottom: 0.5rem;
      font-family: 'Lato', sans-serif;
      font-weight: 700;
      font-size: 14px;
		}

		&__help-text {
			color: $secondary-color;
      font-family: 'Lato', sans-serif;
      font-weight: 500;
      font-size: 11px;
    }

		&__row {
			@media screen and (max-width: 768px) {
				margin-top: 1.5rem;
				display: flex;
				flex-direction: column;
				gap: 1rem;
			}
		}

		&__item {
      margin: 10px 0;
      border-bottom: 1px solid rgba(143, 153, 186, 0.1333333333);
      transition: all 0.2s linear;
      cursor: pointer;
      padding: 15px;
      border-radius: 12px;
      gap: 1.5rem;

      @media screen and (max-width: 768px) {
				box-shadow: 0px 11px 48px rgba(123, 129, 148, 0.15);
				border: none;
				border-radius: 12px;
				padding: 1rem 2rem;
			}
			&__active {
        background: #FFFFFF;
        box-shadow: 5px 5px 21px rgba(136, 152, 206, 0.19);
			}
			&:last-child {
				border: none;
			}
		}
	}
  .text-span {
    font-size: 10px;
    display: flex;
    background: #32BD1B;
    color: white;
    border-radius: 50%;
    width: 10px;
    height: 11px;
    padding: 3px;
    align-items: center;
    justify-content: center;
    transform: translateY(30px) translateX(10px);
  }
  .help-logo{
    width: 50px;
  }
</style>
