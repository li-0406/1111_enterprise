<template>
  <div class="bg-gradient-to-br from-white to-secondary-100">
    <div class="container mx-auto pt-14 max-w-screen-w px-4 l:px-0">
      <h1
        class="text-[40px] s:text-5xl flex gap-3 font-bold text-gray-900 mb-5"
      >
        知名品牌<span
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
      <div class="l:grid grid-cols-2">
        <span class="text-xl text-gray-600"
          >出發吧！一切美好的生活，都從對的選擇開始。</span
        >
      </div>
      <!-- 搜尋 -->
      <div class="container mx-auto pt-20 max-w-screen-w flex justify-center">
        <div
          class="bg-white pl-6 pr-[6px] py-[6px] rounded-full flex flex-wrap"
        >
          <span class="flex items-center gap-1 text-gray-600"
            >全部產業<svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5304 5.13906C4.79082 5.39948 5.21374 5.39948 5.47415 5.13906L9.47415 1.13906C9.73457 0.878646 9.73457 0.455729 9.47415 0.195312C9.21374 -0.0651042 8.79082 -0.0651042 8.5304 0.195312L5.00124 3.72448L1.47207 0.197396C1.21165 -0.063021 0.788737 -0.063021 0.52832 0.197396C0.267904 0.457812 0.267904 0.880729 0.52832 1.14115L4.52832 5.14115L4.5304 5.13906Z"
                fill="#646464"
              />
            </svg>
          </span>

          <input
            type="text"
            placeholder="輸入公司或品牌名稱"
            class="border rounded-full py-[10px] px-4 bg-gray-50 s:ml-5 s:w-[422px]"
          />
          <button
            class="bg-primary-500 px-7 py-[10px] text-white rounded-full ml-2"
          >
            搜尋
          </button>
        </div>
      </div>
      <!-- 熱門關鍵字 -->
      <div
        class="container mx-auto max-w-screen-w flex flex-wrap gap-3 s:gap-0 justify-center mt-5 pb-20"
      >
        <span class="text-primary-600 flex items-center text-sm gap-1"
          ><svg
            width="16"
            height="19"
            viewBox="0 0 16 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.60011 0.690722C5.87432 0.434094 6.29969 0.43761 6.57389 0.694238C7.54416 1.60474 8.45466 2.58555 9.3054 3.64722C9.6921 3.14099 10.1315 2.58907 10.6061 2.13909C10.8838 1.87894 11.3127 1.87894 11.5904 2.1426C12.8068 3.3027 13.8368 4.83544 14.561 6.29084C15.2746 7.72514 15.7492 9.19108 15.7492 10.2246C15.7492 14.7103 12.2408 18.5 7.87461 18.5C3.4592 18.5 0 14.7068 0 10.2211C0 8.87118 0.62575 7.22243 1.59601 5.59126C2.57683 3.93548 3.96191 2.2094 5.60011 0.690722ZM7.93437 15.1252C8.82378 15.1252 9.61124 14.8791 10.353 14.3869C11.833 13.3534 12.2303 11.2863 11.3408 9.66216C11.1827 9.34576 10.7784 9.32467 10.5499 9.59185L9.66398 10.6219C9.43196 10.889 9.01362 10.882 8.79566 10.6043C8.21561 9.86605 7.17855 8.54776 6.58796 7.79896C6.36648 7.51773 5.94463 7.51421 5.71964 7.79545C4.53142 9.28952 3.93379 10.2317 3.93379 11.2898C3.93731 13.6979 5.71612 15.1252 7.93437 15.1252Z"
              fill="#C24F4D"
            />
          </svg>
          熱門關鍵字
        </span>
        <span
          v-for="item in tag"
          :key="item"
          class="bg-secondary-150 px-4 py-1 rounded-full text-gray-600 ml-3 text-sm"
          >{{ item }}</span
        >
      </div>
      <!-- content1 -->
      <div class="grid grid-cols-1 m:grid-cols-2 l:grid-cols-3 gap-6 mt-16">
        <div
          v-for="item in brandCard"
          :key="item.title"
          class="rounded-[20px] overflow-hidden"
          style="box-shadow: 0px 4px 8px 0px #00000014"
        >
          <div class="w-full h-40">
            <img :src="item.pic" alt="" class="h-full w-full object-cover" />
          </div>
          <div class="bg-white p-6">
            <h1 class="text-lg font-bold">{{ item.title }}</h1>
            <p class="text-secondary-500 flex items-center gap-2 my-3">
              {{ item.address
              }}<svg
                width="12"
                height="16"
                viewBox="0 0 12 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.7194 15.1667C8.27799 13.2161 11.8327 8.48872 11.8327 5.83333C11.8327 2.61285 9.21983 0 5.99935 0C2.77886 0 0.166016 2.61285 0.166016 5.83333C0.166016 8.48872 3.7207 13.2161 5.2793 15.1667C5.65299 15.6315 6.3457 15.6315 6.7194 15.1667ZM5.99935 3.88889C6.51505 3.88889 7.00962 4.09375 7.37428 4.4584C7.73893 4.82306 7.94379 5.31764 7.94379 5.83333C7.94379 6.34903 7.73893 6.84361 7.37428 7.20826C7.00962 7.57292 6.51505 7.77778 5.99935 7.77778C5.48365 7.77778 4.98907 7.57292 4.62442 7.20826C4.25976 6.84361 4.0549 6.34903 4.0549 5.83333C4.0549 5.31764 4.25976 4.82306 4.62442 4.4584C4.98907 4.09375 5.48365 3.88889 5.99935 3.88889Z"
                  fill="#D9A479"
                />
              </svg>
            </p>
            <p class="text-gray-600 mt-2 line-clamp-2">
              {{ item.text }}
            </p>
            <div class="flex justify-end mt-3">
              <button
                class="border rounded-full px-4 py-2 flex gap-2 items-center hover:bg-gray-50"
              >
                更多職缺
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7063 6.70615C14.0969 6.31553 14.0969 5.68115 13.7063 5.29053L8.70625 0.290527C8.31563 -0.100098 7.68125 -0.100098 7.29063 0.290527C6.9 0.681152 6.9 1.31553 7.29063 1.70615L10.5875 4.9999H1C0.446875 4.9999 0 5.44678 0 5.9999C0 6.55303 0.446875 6.9999 1 6.9999H10.5844L7.29375 10.2937C6.90312 10.6843 6.90312 11.3187 7.29375 11.7093C7.68437 12.0999 8.31875 12.0999 8.70938 11.7093L13.7094 6.70928L13.7063 6.70615Z"
                    fill="#1A1A1A"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- AD -->
      <div class="py-20 px-9 s:px-10 m:px-12 l:px-0">
        <Swiper
          v-bind="swiperConfigv2"
          :effect="'creative'"
          :modules="[SwiperNavigation, SwiperPagination]"
          navigation
          :space-between="24"
        >
          <SwiperSlide v-for="item in ad" :key="item">
            <img
              :src="item"
              alt=""
              class="w-[628px] h-[300px] object-cover mx-auto rounded-[20px]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <!-- content2 -->
      <div class="grid grid-cols-1 m:grid-cols-2 l:grid-cols-3 gap-6">
        <div
          v-for="item in brandCardv2"
          :key="item.title"
          class="rounded-[20px] overflow-hidden"
          style="box-shadow: 0px 4px 8px 0px #00000014"
        >
          <div class="w-full h-40">
            <img :src="item.pic" alt="" class="h-full w-full object-cover" />
          </div>
          <div class="bg-white p-6">
            <h1 class="text-lg font-bold">{{ item.title }}</h1>
            <p class="text-secondary-500 flex items-center gap-2 my-3">
              {{ item.address
              }}<svg
                width="12"
                height="16"
                viewBox="0 0 12 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.7194 15.1667C8.27799 13.2161 11.8327 8.48872 11.8327 5.83333C11.8327 2.61285 9.21983 0 5.99935 0C2.77886 0 0.166016 2.61285 0.166016 5.83333C0.166016 8.48872 3.7207 13.2161 5.2793 15.1667C5.65299 15.6315 6.3457 15.6315 6.7194 15.1667ZM5.99935 3.88889C6.51505 3.88889 7.00962 4.09375 7.37428 4.4584C7.73893 4.82306 7.94379 5.31764 7.94379 5.83333C7.94379 6.34903 7.73893 6.84361 7.37428 7.20826C7.00962 7.57292 6.51505 7.77778 5.99935 7.77778C5.48365 7.77778 4.98907 7.57292 4.62442 7.20826C4.25976 6.84361 4.0549 6.34903 4.0549 5.83333C4.0549 5.31764 4.25976 4.82306 4.62442 4.4584C4.98907 4.09375 5.48365 3.88889 5.99935 3.88889Z"
                  fill="#D9A479"
                />
              </svg>
            </p>
            <p class="text-gray-600 mt-2 line-clamp-2">
              {{ item.text }}
            </p>
            <div class="flex justify-end mt-3">
              <button
                class="border rounded-full px-4 py-2 flex gap-2 items-center hover:bg-gray-50"
              >
                更多職缺
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7063 6.70615C14.0969 6.31553 14.0969 5.68115 13.7063 5.29053L8.70625 0.290527C8.31563 -0.100098 7.68125 -0.100098 7.29063 0.290527C6.9 0.681152 6.9 1.31553 7.29063 1.70615L10.5875 4.9999H1C0.446875 4.9999 0 5.44678 0 5.9999C0 6.55303 0.446875 6.9999 1 6.9999H10.5844L7.29375 10.2937C6.90312 10.6843 6.90312 11.3187 7.29375 11.7093C7.68437 12.0999 8.31875 12.0999 8.70938 11.7093L13.7094 6.70928L13.7063 6.70615Z"
                    fill="#1A1A1A"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- AD -->
      <div class="pt-20 pb-32 px-9 s:px-10 m:px-12 l:px-0">
        <Swiper
          v-bind="swiperConfigv2"
          :effect="'creative'"
          :modules="[SwiperNavigation, SwiperPagination]"
          navigation
          :space-between="24"
        >
          <SwiperSlide v-for="item in ad2" :key="item">
            <img
              :src="item"
              alt=""
              class="w-[628px] h-[300px] object-cover mx-auto rounded-[20px]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
const brandCard = reactive([
  {
    title: "IKEA",
    address: "台北市內湖區",
    text: "來自瑞典的IKEA宜家家居於全球50個國家共擁有430家分店，每年約有9億6千萬人次造訪IKEA，是全球最大的家具家飾",
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjEvT0dYTThm",
  },
  {
    title: "TutorABC_麥奇數位股份有限公司",
    address: "台北市中正區",
    text: "【公司簡介】TutorABC 是全球第一的線上英語和華文學習平台。我們擁有新的經營者和高階管理團隊，經營理念是讓員",
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjEvUHVCUjNs",
  },
  {
    title: "中信房屋(加盟店聯合徵才)",
    address: "台北市中山區",
    text: "國內首家獲准以「房屋仲介」登記成立公司之中信房屋，自西元1985年11月創立以來，始終秉持著正派經營、以客為尊之",
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjEvbVpER0Rv",
  },
  {
    title: "中菱綠材料股份有限公司",
    address: "高雄市三民區",
    text: "中菱綠材料股份有限公司總公司位於高雄，成立於1995年，原名為中菱建材，設廠於四季如夏的屏東生產耐燃建材木絲水",
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjEvUTNoRWkw",
  },
  {
    title: "中麟營造股份有限公司",
    address: "台北市大安區",
    text: "中麟營造股份有限公司成立於民國74年，通過ISO 9001認證，目前累積營業額約新台幣876億元。(甲級營造廠)經營理念巧管理之思，為簡化繁。輔經驗之弼，",
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjEvOEVpSUpN",
  },
  {
    title: "五鮮級國際餐飲股份有限公司",
    address: "高雄市大寮區",
    text: "成立於2015,成立宗旨為提供，平價卻不平凡的美味，五星級 + 有省錢(台語) 的雙重享受，五鮮級 讓你用親民的價格，享",
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjEvSDFrVkVR",
  },
]);

const brandCardv2 = reactive([
  {
    title: "亞洲水泥股份有限公司",
    address: "台北市大安區",
    text: "設立於中華民國四十六年三月二十一日。 擁有新竹廠與花蓮廠二座水泥製造廠,全省有四個營業據點,分別位於台中,高雄,花",
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjEvUkIyS2Rq",
  },
  {
    title: "亞洲藏壽司股份有限公司",
    address: "台北市中正區",
    text: "亞洲藏壽司(股)公司是以「Food Revolution=食的革新」為目標，致力於提供美味、安心安全的產品，並在舒適有",
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjEvaGdXNkhG",
  },
  {
    title: "京典衛浴股份有限公司",
    address: "新北市蘆洲區",
    text: "2005年4月1號，京典衛浴在台灣誕生。 我們想做的，不只是單純販售產品， 而是會對這個產業及顧客更好的事情， 從",
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjEvQ0VtR1ND",
  },
  {
    title: "仁寶電腦工業股份有限公司",
    address: "台北市內湖區",
    text: "仁寶電腦創立於1984年，即將邁入40個年頭。從電腦周邊製造發展成長，至今已成為橫跨通訊/數位媒體/智慧型裝置/車",
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjEvbGlpS09E",
  },
  {
    title: "今日儀器股份有限公司",
    address: "新北市林口區",
    text: "公司沿革與發展: 今日儀器有限公司創立於1971年，1976年改組為「今日儀器股份有限公司」。至今已五十寒暑，創立以",
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjEvMjBqbXJl",
  },
  {
    title: "住商實業股份有限公司(住商不動產)",
    address: "台北市大安區",
    text: "【住商優質文化】 專業誠信 立業以德 住商不動產從1979年創業以來，始終堅持正派永續經營之路，並提供大眾優質的不",
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjEvSlNCeVJq",
  },
]);

const swiperConfigv2 = ref({
  breakpoints: {
    345: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1850: {
      slidesPerView: 2,
    },
  },
});

const tag = reactive([
  "#力麗觀光",
  "#三立電視台",
  "#力晶",
  "#工研院",
  "#中華電信",
]);

const ad = reactive([
  "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAzMDQvSXpVNVhS",
  "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAzMDQvQmhsdmxP",
  "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAzMDQvNzBCbnpW",
  "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAzMDQvWmNONFRE",
]);
const ad2 = reactive([
  "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAzMDQvNzBCbnpW",
  "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAzMDQvWmNONFRE",
]);
</script>

<style lang="scss" scoped>
::v-deep {
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
    background-image: url("@/assets/images/leftArrow.svg");
    background-position: center;
    background-repeat: no-repeat;
  }
  .swiper-button-next {
    background-image: url("@/assets/images/rightArrow.svg");
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
