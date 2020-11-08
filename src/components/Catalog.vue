<template>
  <div id="catalog">
    <div class="max-w-screen-lg mx-auto h-screen px-8">
      <div class="flex flex-col rounded-lg mb-8 ">
        <div class="w-full justify-center flex">
          <img :src="logo" alt="Cantinho da Mi" class="w-32 md:w-40" />
        </div>
        <div class="mx-auto text-center">
          <div class="text-2xl text-pink-500 font-bold mt-4 uppercase">
            Cantinho da mi
          </div>
          <div class="text-xl text-pink-600 mb-8">
            Catálogo de Novembro - 2020
          </div>
          <div
            class="text-white font-semibold text-center mt-2 sm:flex block items-between"
          >
            <a
              href="https://www.instagram.com/cantinhoda.mi/"
              target="_blank"
              class="sm:mr-2 h-full ease-in-out duration-700 transition-all bg-pink-500 rounded-md block px-4 mx-auto mb-2 py-2 text-lg shadow-md hover:shadow-lg hover:text-white hover:bg-pink-500"
              >@cantinhoda.mi</a
            >
            <a
              href="https://www.instagram.com/cantinhoda.mi/"
              target="_blank"
              class="h-full ease-in-out duration-700 transition-all bg-pink-500 rounded-md block px-4 mx-auto mb-2 py-2 text-lg shadow-md hover:shadow-lg hover:text-white hover:bg-pink-500"
              >(82) 9.9607-2344</a
            >
          </div>
        </div>
        <p class="text-center mt-4 text-lg text-pink-600 w-1/2 mx-auto">Clique nos números das platinhas que você deseja saber o preço. Em seguida clique em quanto fica o pedido?</p>
      </div>
      <div class="flex flex-wrap mb-4 justify-center">
        <div
          v-for="item in cart"
          :key="item"
          @click="addItem(item)"
          class="mr-2 mb-2 text-xl cursor-pointer select-none z-20 font-bold h-12 w-12 rounded-full justify-center items-center flex border-solid border-4 border-teal-400 text-teal-800 bg-teal-100"
        >
          {{ item }}
        </div>
      </div>

      <div class="mb-4" v-if="cart.length">
        <button @click="sendMessage" class="text-white font-bold h-full ease-in-out duration-700 transition-all bg-teal-500 rounded-md block px-4 mx-auto mb-2 py-2 text-lg shadow-md hover:shadow-lg hover:text-white hover:bg-teal-400">
          Quanto fica o pedido?
        </button>
      </div>

      <div class="flex flex-wrap flex-row w-full relative">
        <div
          class="flex w-1/2 sm:w-1/2 md:w-1/3 p-2"
          v-for="(image, index) in files"
          :key="image"
        >
          <div
            class="hover:shadow-xl relative shadow-sm transform ease-in-out duration-500 transition-all hover:scale-105 flex cursor-pointer"
            style="max-height: 200px;"
          >
            <div
              class="flex items-start p-2 justify-end absolute w-full h-full"
            >
              <div
                class="text-3xl cursor-pointer select-none z-20 font-bold h-16 w-16 rounded-full justify-center items-center flex border-solid border-4"
                @click="addItem(index)"
                :class="{
                  'border-teal-400 text-teal-800 bg-teal-100': isSelected(
                    index
                  ),
                  'border-pink-400 text-pink-800 bg-pink-100': !isSelected(
                    index
                  )
                }"
              >
                {{ index }}
              </div>
            </div>
            <img
              :src="image"
              @click="showImage(index)"
              class="z-10 object-cover rounded-md border-4 border-pink-300 overflow-hidden"
            />
          </div>
        </div>
      </div>

      <vue-easy-lightbox
        escDisabled
        moveDisabled
        :visible="visible"
        :imgs="files"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>
    </div>
  </div>
</template>

<script>
import files from "../../utils/files.json";
export default {
  name: "Catalog",
  data() {
    return {
      files: [],
      logo: require("@/assets/logo.png"),
      visible: false,
      index: 0,
      cart: [],
      url: "https://api.whatsapp.com/send"
    };
  },
  mounted() {
    files.forEach(file => {
      this.files.push(require(`@/assets/uploaded/${file}`));
    });
  },
  methods: {
    showImage(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
    addItem(item) {
      const index = this.cart.indexOf(item);
      if (index != -1) {
        this.cart.splice(index, 1);
        return false;
      }
      this.cart.push(item);
    },
    isSelected(index) {
      return this.cart.indexOf(index) !== -1;
    },
    sendMessage() {
      let message = "Olá, gostaria de saber qual o preço das seguintes plantinhas: ";
      this.cart.forEach((item, index) => {
        console.log(index, item)
        message += index < this.cart.length - 1 ? `${item}, ` : `${item}`;
      });
      message += " do catálogo de novembro";
      let url = new URL(this.url);
      url.searchParams.append("phone", "5582996072344");
      url.searchParams.append("text", message);

      window.open(url.href, "_blank");
    }
  }
};
</script>

<style lang="scss">
@import "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css";

.middle {
  left: 50%;
  transform: translateX(-50%);
}
</style>
