<template>
  <div class="bg-gradient-to-br from-white to-secondary-100">
    <el-carousel
      trigger="click"
      :height="carouselHeight"
      arrow="never"
      class="w-full mx-auto"
    >
      <el-carousel-item v-for="(item, index) in bannerImg" :key="index">
        <img :src="item" alt="" class="mx-auto" />
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
    <!-- <div class="w-full bg-white p-16 mt-24">
      <h1 class="text-[40px] text-gray-900 font-bold text-center">合作媒體</h1>
      <p class="text-gray-600 text-[18px] block text-center">依筆畫排序</p>
      <img src="@/assets/images/合作媒體.svg" alt="" class="mx-auto mt-10" />
    </div> -->
    <client-only>
      <div class="pt-[120px]">
        <h1 class="text-[40px] text-gray-900 font-bold text-center">
          品牌報名類別
        </h1>
        <p class="text-gray-600 text-[18px] block text-center mb-14">
          一份工作，一個選擇。一種感動，幸福一生。在這裡，找尋你的感動
        </p>
        <div class="m:px-6 l:px-28 xl:px-[412px]">
          <Swiper
            v-bind="swiperConfig"
            :slides-per-view="7"
            :effect="'creative'"
            :modules="[SwiperNavigation, SwiperPagination]"
            navigation
            :space-between="40"
          >
            <SwiperSlide v-for="item in iconList" :key="item">
              <div class="flex justify-center mb-3">
                <img :src="item.img" alt="" />
              </div>
              <h3 class="text-center font-bold text-gray-600">
                {{ item.name }}
              </h3>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </client-only>

    <div class="pt-[240px]">
      <h1 class="text-[40px] text-gray-900 font-bold text-center">
        幸福企業，深入報導
      </h1>
      <p class="text-gray-600 text-[18px] block text-center mb-14">
        看見，更多背後的故事
      </p>
      <div class="flex gap-6 xl:px-[300px]">
        <div class="w-full">
          <div class="w-full relative">
            <img src="../assets/images/karen.png" alt="" class="rounded-3xl" />
            <!-- <div
              class="w-0 h-0 absolute"
              style="
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 0 32px 32px 0;
                border-color: transparent #f8f0e9 transparent transparent;
                top: 0;
                right: 0;
              "
            ></div> -->
          </div>
          <div class="mt-6">
            <p class="text-sm text-gray-600">2023/10/02</p>
            <h2 class="text-[18px] font-bold mt-1">
              高薪徵才！專業廚師6.5至8萬 儲備店長月薪上看10萬
            </h2>
            <p class="text-gray-600 mt-2 mb-5">
              凱林鐵板燒創辦人廖定閎，以「衛生、服務、品質、人情味」信念款待顧客。
              廖定閎是第一代台灣鐵板燒師傅，凱林鐵板燒（Karen
              Teppanyaki）的品牌創辦人，曾經在台灣首間高級鐵板燒「新濱」與五星級「來來飯店」經過主廚的歷練，擁有逾30年中西餐料理專研的資歷，改良研發出特有台灣人口
            </p>
            <span
              class="bg-secondary-150 px-3 py-1 rounded-full text-gray-600 text-[13px] inline-block"
              >#企業報導</span
            >
            <span
              class="bg-secondary-150 px-3 py-1 rounded-full text-gray-600 text-[13px] inline-block mx-2"
              >#幸福企業2023</span
            >
            <span
              class="bg-secondary-150 px-3 py-1 rounded-full text-gray-600 text-[13px] inline-block"
              >#凱林鐵板燒</span
            >
          </div>
        </div>
        <div class="w-full">
          <div
            v-for="(item, index) in card"
            :key="item.title"
            :class="`${index == 1 && 'my-6 '} flex gap-4`"
          >
            <img :src="item.img" alt="" class="w-[300px] rounded-3xl" />
            <div class="w-full">
              <p class="text-sm text-gray-600">2023/10/02</p>
              <h2 class="text-[18px] font-bold mt-1">{{ item.title }}</h2>
              <p class="text-gray-600 mt-2 mb-5">{{ item.text }}</p>
              <span
                v-for="(tg, index) in item.tag"
                :key="index"
                :class="`${
                  index == 1 && 'mx-2'
                } bg-secondary-150 px-3 py-1 rounded-full text-gray-600 text-[13px] inline-block`"
                >{{ tg }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center pt-20 pb-32">
        <p class="flex items-center gap-2 text-primary-500 cursor-pointer">
          看更多新聞<svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.7086 6.70859C13.0992 6.31797 13.0992 5.68359 12.7086 5.29297L7.70859 0.292969C7.31797 -0.0976562 6.68359 -0.0976562 6.29297 0.292969C5.90234 0.683594 5.90234 1.31797 6.29297 1.70859L10.5867 6.00234L6.29609 10.2961C5.90547 10.6867 5.90547 11.3211 6.29609 11.7117C6.68672 12.1023 7.32109 12.1023 7.71172 11.7117L12.7117 6.71172L12.7086 6.70859ZM1.70859 11.7086L6.70859 6.70859C7.09922 6.31797 7.09922 5.68359 6.70859 5.29297L1.70859 0.292969C1.31797 -0.0976562 0.683594 -0.0976562 0.292969 0.292969C-0.0976562 0.683594 -0.0976562 1.31797 0.292969 1.70859L4.58672 6.00234L0.296094 10.2961C-0.0945313 10.6867 -0.0945313 11.3211 0.296094 11.7117C0.686719 12.1023 1.32109 12.1023 1.71172 11.7117L1.70859 11.7086Z"
              fill="#E2605E"
            />
          </svg>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import homeBanner from "@/assets/images/homeBanner.png";
import icon from "@/assets/images/homeBrand/Icon.svg";
import icon1 from "@/assets/images/homeBrand/Icon-1.svg";
import icon2 from "@/assets/images/homeBrand/Icon-2.svg";
import icon3 from "@/assets/images/homeBrand/Icon-3.svg";
import icon4 from "@/assets/images/homeBrand/Icon-4.svg";
import icon5 from "@/assets/images/homeBrand/Icon-5.svg";
import icon6 from "@/assets/images/homeBrand/Icon-6.svg";
import icon7 from "@/assets/images/homeBrand/Icon-7.svg";
import icon8 from "@/assets/images/homeBrand/Icon-8.svg";
import icon9 from "@/assets/images/homeBrand/Icon-9.svg";
import icon10 from "@/assets/images/homeBrand/Icon-10.svg";
import card1 from "@/assets/images/card1.png";
import card2 from "@/assets/images/card2.png";
import card3 from "@/assets/images/card3.png";
import { Countdown } from "vue3-flip-countdown";
const swiperConfig = ref({
  breakpoints: {
    345: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
    1920: {
      slidesPerView: 7,
    },
  },
});
const bannerImg = ref([homeBanner, homeBanner, homeBanner]);

const iconList = ref([
  { img: icon, name: "一般生活服務" },
  { img: icon1, name: "休閒娛樂服務" },
  { img: icon2, name: "餐飲服務" },
  { img: icon3, name: "飯店旅宿" },
  { img: icon4, name: "大傳教育社福" },
  { img: icon5, name: "金融管顧" },
  { img: icon6, name: "科技/能源研發" },
  { img: icon7, name: "生技醫療" },
  { img: icon8, name: "製造業" },
  { img: icon9, name: "貿易流通" },
  { img: icon10, name: "營造建築" },
]);

const card = ref([
  {
    img: card1,
    title: "從一而終 台隆手創館 給員工不變的幸福信念",
    text: "台隆手創館大家庭：黃威廉副總經理(後排右四)、陳琪瑛執行長(後排右五)、吳秋月營運長(後排左四)、莊耀華營業經理(後排右三)，暨門市主管群。圖/台隆集團 2023年〈台隆手創館〉連續五年榮獲臺灣服務業大評鑑「居家生...",
    tag: ["#台隆手創館", "#幸福企業2023", "#企業報導"],
  },
  {
    img: card2,
    title: "MIT資優生慶鴻機電：為你打造幸福職「廠」永續共好",
    text: "慶鴻副總經理王陳鵬（左）、總經理王陳鴻（右）出席頒獎典禮。圖／慶鴻提供 貫徹職人精神 穩健踏實 創立於1975年的慶鴻",
    tag: ["#慶鴻機電", "#幸福企業2023", "#企業報導"],
  },
  {
    img: card3,
    title: "重視人才價值 特雷維科技以幸福職場守護員工",
    text: "Trevi 粉紅芭比主題迎新party。圖/特雷維科技 TREVI特雷維科技為全球性遊戲開發工作室，產品開發在Web及App上，專注於創",
    tag: ["#TREVI特雷維科技", "#幸福企業2023", "#企業報導"],
  },
]);

const useWindowWidth = () => {
  const windowWidth = ref(process.client ? window.innerWidth : null);
  if (process.client) {
    window.addEventListener("resize", () => {
      windowWidth.value = window.innerWidth;
    });
  }
  return windowWidth;
};

const carouselHeight = ref("300px");
const windowWidth = useWindowWidth();
watchEffect(() => {
  if (windowWidth.value < 768) {
    carouselHeight.value = "150px";
  } else if (windowWidth.value < 1024) {
    carouselHeight.value = "200px";
  } else {
    carouselHeight.value = "300px";
  }
});
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

  .swiper-button-prev,
  .swiper-button-next {
    width: 36px;
    height: 36px;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #dedede;
    cursor: pointer;
  }
  .swiper-button-prev {
    background-image: url("../assets/images/leftArrow.svg");
    background-position: center;
    background-repeat: no-repeat;
  }
  .swiper-button-next {
    background-image: url("../assets/images/rightArrow.svg");
    background-position: center;
    background-repeat: no-repeat;
  }

  .swiper-button-disabled {
    width: 36px;
    height: 36px;
    background-color: #f6f6f6;
    border-radius: 50%;
    border: 1px solid #d2d2d2;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    display: none;
  }
}
</style>
