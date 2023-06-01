<template>
  <div class="dropzone">
    <div
      class="dropzone-container"
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="drop"
    >
      <input
        type="file"
        multiple
        name="file"
        :id="id"
        class="hidden-input"
        @change="onChange"
        ref="file"
        accept=".pdf,.jpg,.jpeg,.png"
      />

      <div class="dropzone-file" v-for="(file, i) of files" :key="i">
        <img :src="generateURL(file)" alt="" />
        <button class="dropzone-file__btn" @click="remove(i)">
          <IconBase icon="close" color="white" />
        </button>
      </div>

      <label :for="id" class="file-label" v-show="!files.length">
        <div v-if="isDragging">Отпустите, чтобы загрузить файл</div>
        <div v-else>Переместите файлы в это окно или <u>нажмите сюда</u></div>
      </label>
    </div>
    <button class="dropzone-btn">
      <label :for="id"
        ><IconBase icon="plus" color="green" /> Добавить фото</label
      >
    </button>
  </div>
</template>

<script setup>
import { v4 as uuidv4 } from "uuid";

const id = uuidv4()

const isDragging = ref(false);
const files = ref([]);
const file = ref();

const onChange = () => {
  files.value = [...files.value, ...file.value.files];
};

const remove = (i) => {
  files.value.splice(i, 1);
};

const dragover = (e) => {
  e.preventDefault();
  isDragging.value = true;
};
const dragleave = () => {
  isDragging.value = false;
};

const drop = (e) => {
  e.preventDefault();
  file.value.files = e.dataTransfer.files;
  onChange();
  isDragging.value = false;
};

const generateURL = (file) => {
  return URL.createObjectURL(file);
};
</script>

<style lang="scss">
.dropzone {
  &-btn {
    display: flex;
    color: $green;
    background: #ffffff;
    border: 2px solid #dadeec;
    border-radius: 100px;
    font-size: 20px;
    line-height: 100%;
    margin-left: auto;
    transition: all 0.2s;
    cursor: pointer;

    @media (max-width: 600px) {
      margin: 0 auto;
    }

    label {
      @include flex-center-all;
      gap: 5px;
      padding: 15px 40px;
      cursor: pointer;
    }

    &:hover {
      background: $green;
      color: #fff;

      svg {
        --icon-color: white;
      }
    }
  }

  &-file {
    border-radius: 10px;
    height: 120px;
    position: relative;
    background: $black;

    &__btn {
      position: absolute;
      right: 15px;
      top: 15px;
      cursor: pointer;

      &:hover {
        svg {
          --icon-color: #{$red};
        }
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 10px;
    }
  }

  &-container {
    border: 1px dashed #8f99ba;
    border-radius: 25px;
    padding: 20px;
    height: 300px;
    position: relative;
    margin-bottom: 15px;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    overflow: scroll;

    @media (max-width: 600px) {
      grid-template-columns: 1fr 1fr;
    }

    input {
      display: none;
    }

    .file-label {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 18px;
      width: 85%;
    }
  }
}
</style>
