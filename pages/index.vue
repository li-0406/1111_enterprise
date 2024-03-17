<template>
  <div class="bg-gradient-to-br from-white to-secondary-100">
    <el-carousel
      trigger="click"
      height="500px"
      arrow="never"
      class="w-full mx-auto"
    >
      <el-carousel-item v-for="(item, index) in bannerImg" :key="index">
        <img :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
    <div class="w-full mt-14 px-8 s:px-36 m:px-48 xl:px-[524px]">
      <h1 class="text-[40px] font-bold text-gray-900 s:hidden font-en">2024</h1>
      <h1
        class="text-[40px] s:text-5xl flex gap-3 font-bold text-gray-900 mb-5"
      >
        <span class="hidden s:inline-block font-en">2024 </span>
        幸福企業票選<span
          ><svg
            width="36"
            height="26"
            viewBox="0 0 36 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.5 16.125C35.5 21.3047 31.3047 25.5 26.125 25.5H25.5C24.1172 25.5 23 24.3828 23 23C23 21.6172 24.1172 20.5 25.5 20.5H26.125C28.5391 20.5 30.5 18.5391 30.5 16.125V15.5H25.5C22.7422 15.5 20.5 13.2578 20.5 10.5V5.5C20.5 2.74219 22.7422 0.5 25.5 0.5H30.5C33.2578 0.5 35.5 2.74219 35.5 5.5V8V10.5V16.125ZM15.5 16.125C15.5 21.3047 11.3047 25.5 6.125 25.5H5.5C4.11719 25.5 3 24.3828 3 23C3 21.6172 4.11719 20.5 5.5 20.5H6.125C8.53906 20.5 10.5 18.5391 10.5 16.125V15.5H5.5C2.74219 15.5 0.5 13.2578 0.5 10.5V5.5C0.5 2.74219 2.74219 0.5 5.5 0.5H10.5C13.2578 0.5 15.5 2.74219 15.5 5.5V8V10.5V16.125Z"
              fill="#D9A479"
            />
          </svg>
        </span>
      </h1>
      <span class="text-xl text-gray-600"
        >人，一輩子有三分之一的時間都在工作，如果工作無法帶給你跟家一樣的溫度，時間是那樣的度日如年。或許，工作也能像在家一樣溫暖，人生會更加圓滿。在這裡，我們極盡探索為您，找到屬於您的幸福企業！</span
      >
    </div>
    <div
      class="flex flex-col xl:flex-row items-center gap-4 xl:gap-24 justify-center mt-16 px-20 s:px-36 m:px-[282px] xl:px-[524px]"
    >
      <span class="text-xl font-bold">投票倒數</span>
      <client-only>
        <Countdown
          deadline="2024-08-15 24:00:00"
          mainColor="#C24F4D"
          secondFlipColor="#C24F4D"
          mainFlipBackgroundColor="#FFFFFF"
          secondFlipBackgroundColor="#FFFFFF"
          labelColor="#646464"
        ></Countdown>
      </client-only>
      <button class="bg-primary-500 py-3 px-12 rounded-full text-white">
        立即投票
      </button>
    </div>
    <div class="w-full bg-white p-16 mt-24">
      <h1 class="text-[40px] text-gray-900 font-bold text-center">合作媒體</h1>
      <p class="text-gray-600 text-[18px] block text-center">依筆畫排序</p>
      <img src="@/assets/images/合作媒體.svg" alt="" class="mx-auto mt-10" />
    </div>
    <client-only>
      <Swiper
        :modules="[SwiperNavigation, SwiperEffectCreative]"
        :slides-per-view="1"
        :space-between="16"
        :loop="true"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </client-only>
  </div>
</template>

<script setup>
import homeBanner from "@/assets/images/homeBanner.png";
import { Countdown } from "vue3-flip-countdown";

const bannerImg = ref([homeBanner, homeBanner, homeBanner]);
</script>

<style lang="scss" scoped>
::v-deep {
  .el-carousel__indicators--horizontal {
    background: rgba(255, 255, 255, 0.4);
    margin-bottom: 12px;
    border-radius: 40px;
    padding: 0 6px;
  }
  .el-carousel__indicator--horizontal .el-carousel__button {
    width: 6px;
    height: 6px;
    border-radius: 20px;
    background: rgba(252, 239, 239, 1);
  }
  .el-carousel__indicator--horizontal.is-active .el-carousel__button {
    width: 16px;
    height: 6px;
    border-radius: 20px;
    background: rgba(226, 96, 94, 1);
  }
  .el-carousel__arrow--left {
    left: 100px;
    top: 100px;
    background-color: aqua;
  }
  .flip-clock {
    margin: 0 !important;
    .flip-clock__piece {
      margin: 0 10px;
    }
    .flip-clock__card {
      font-family: "Kanit";
      font-weight: 700;
    }
    .flip-clock__slot {
      font-family: "Kanit";
      font-size: 16px;
    }
  }
}
</style>
