<template>
  <div class="bg-gradient-to-br from-white to-secondary-100">
    <div class="container mx-auto pt-14 max-w-screen-w px-4 l:px-0">
      <h1
        class="text-[40px] s:text-5xl flex gap-3 font-bold text-gray-900 mb-5"
      >
        企業報導 / ESG<span
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
      <!-- 搜尋 -->
      <div class="container mx-auto pt-20 max-w-screen-w flex justify-center">
        <div
          class="bg-white pl-6 pr-[6px] py-[6px] rounded-full flex flex-wrap"
        >
          <span class="flex items-center gap-1 text-gray-600"
            >全部報導<svg
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
      <!-- 企業報導 -->
      <div class="border-b flex justify-between items-center">
        <div class="border-b-4 border-black">
          <h1 class="text-3xl font-bold">企業報導</h1>
        </div>

        <span class="text-gray-500 flex items-center gap-2"
          >更多新聞<svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.70859 6.29609C8.09922 6.68672 8.09922 7.32109 7.70859 7.71172L1.70859 13.7117C1.31797 14.1023 0.683594 14.1023 0.292969 13.7117C-0.0976562 13.3211 -0.0976562 12.6867 0.292969 12.2961L5.58672 7.00234L0.296094 1.70859C-0.0945313 1.31797 -0.0945313 0.683594 0.296094 0.292969C0.686719 -0.0976562 1.32109 -0.0976562 1.71172 0.292969L7.71172 6.29297L7.70859 6.29609Z"
              fill="#646464"
            />
          </svg>
        </span>
      </div>

      <div class="hidden s:block l:flex gap-6 pt-12">
        <div class="w-full">
          <div class="w-full relative">
            <img
              src="https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMTkvTFN3Vm1B"
              alt=""
              class="rounded-3xl"
            />
          </div>
          <div class="mt-6">
            <p class="text-sm text-gray-600">2024/02/01</p>
            <h2 class="text-[18px] font-bold mt-1">
              臺灣港務公司　打造「人才永續 幸福職場」
            </h2>
            <p class="text-primary-500 underline mt-1 mb-3">
              臺灣港務股份有限公司
            </p>
            <p class="text-gray-600 mt-2 mb-5 line-clamp-3">
              「解決員工的問題，即是解決公司的問題」，港務公司實踐友善職場的決心，並不是僅停留在言辭上，而是通過一系列具體的措施，融入至企業的DNA之中。讓幸福成為日常，不僅能對員工的生活產生積極的影響，更能讓員工能全心、安心、放心的投入工作，「我好你好、共同美好」，造就港務公司「共好」的企業文化。
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
              >#台灣港務公司</span
            >
          </div>
        </div>
        <div class="w-full s:mt-12 l:mt-0 grid grid-cols-2 gap-10">
          <div v-for="item in card" :key="item.title">
            <div class="w-full h-48">
              <img
                :src="item.img"
                alt=""
                class="w-full h-full rounded-3xl object-cover"
              />
            </div>

            <div class="mt-5">
              <p class="text-sm text-gray-600">2023/10/02</p>
              <h2 class="text-[18px] font-bold mt-1">{{ item.title }}</h2>
              <p class="text-primary-500 underline mt-1 mb-3">
                {{ item.company }}
              </p>
              <p class="text-gray-600 mt-2 mb-5 line-clamp-3">
                {{ item.text }}
              </p>

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

      <div class="s:hidden pt-7">
        <Swiper
          :slides-per-view="1"
          :effect="'creative'"
          :modules="[SwiperNavigation, SwiperPagination]"
          navigation
          :space-between="40"
        >
          <SwiperSlide v-for="item in card" :key="item.title">
            <div class="w-full h-48">
              <img
                :src="item.img"
                alt=""
                class="w-full h-full rounded-3xl object-cover"
              />
            </div>

            <div class="mt-5">
              <p class="text-sm text-gray-600">2023/10/02</p>
              <h2 class="text-[18px] font-bold mt-1">{{ item.title }}</h2>
              <p class="text-primary-500 underline mt-1 mb-3">
                {{ item.company }}
              </p>
              <p class="text-gray-600 mt-2 mb-5 line-clamp-3">
                {{ item.text }}
              </p>

              <span
                v-for="(tg, index) in item.tag"
                :key="index"
                :class="`${
                  index == 1 && 'mx-2'
                } bg-secondary-150 px-3 py-1 rounded-full text-gray-600 text-[13px] inline-block`"
                >{{ tg }}</span
              >
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <!-- ESG報導 -->
      <div class="border-b flex justify-between items-center pt-24">
        <div class="border-b-4 border-black">
          <h1 class="text-3xl font-bold">ESG報導</h1>
        </div>

        <span class="text-gray-500 flex items-center gap-2"
          >更多新聞<svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.70859 6.29609C8.09922 6.68672 8.09922 7.32109 7.70859 7.71172L1.70859 13.7117C1.31797 14.1023 0.683594 14.1023 0.292969 13.7117C-0.0976562 13.3211 -0.0976562 12.6867 0.292969 12.2961L5.58672 7.00234L0.296094 1.70859C-0.0945313 1.31797 -0.0945313 0.683594 0.296094 0.292969C0.686719 -0.0976562 1.32109 -0.0976562 1.71172 0.292969L7.71172 6.29297L7.70859 6.29609Z"
              fill="#646464"
            />
          </svg>
        </span>
      </div>

      <div class="hidden s:block l:flex gap-6 pt-12 pb-32">
        <div class="w-full">
          <div class="w-full relative">
            <div
              class="w-full h-1/3 bg-gradient-to-b from-transparent to-black z-1 absolute rounded-3xl bottom-0"
            ></div>
            <img
              src="https://s3-alpha-sig.figma.com/img/5d4e/7c76/2fa2da94c0d807c028daa16aaab7cd7a?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XxtJJBpDCgGoGYtNY2uWrpJECxLZ8a88EII4Evet6Bw3lNMWcVSaGw8NI13UGPSpMQTbzDn-5Usw3vy7QGKwzqz1IismoirChZPeYLQjdveTI7Fg~UQs4Ykb4xICVNRIf2o05woaTlwl7W87~fbrVrfyJLLjJKVbNDOUNfJn9FnHXVnC8zCyeZq8aGUMgButI3zNZMcUAI2JmdNCthb6pWxtKQ4PltxZ-dRmJJTbKrkqVhok1m~3rPQRR4aPNkTEQkohpe3WfNHS1~OS17X1WIc2YctpYNPkxdwZofx~DiMda9RGrlUmtQSAh4LaiCZ7dGySOnp~HnLlv4mGSiI9Kg__"
              alt=""
              class="rounded-3xl w-full"
            />
            <div class="absolute bottom-7 left-8">
              <p class="text-sm text-white">2023/10/02</p>
              <h2 class="text-white text-[18px] font-bold mt-1 mb-3">
                新光保全打造員工關懷為核心的健康職場環境
              </h2>
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
                >#新光保全</span
              >
            </div>
          </div>
        </div>
        <div class="w-full s:mt-6 l:mt-0">
          <div
            v-for="(item, index) in cardv2"
            :key="item.title"
            :class="`${index != cardv2.length - 1 && 'mb-6 '} flex gap-4`"
          >
            <img :src="item.img" alt="" class="w-[288px] rounded-3xl" />

            <div class="w-full">
              <p class="text-sm text-gray-600">2023/10/02</p>
              <h2 class="text-[18px] font-bold mt-1">{{ item.title }}</h2>
              <p class="text-gray-600 mt-2 mb-5 line-clamp-2">
                {{ item.text }}
              </p>
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
      <div class="s:hidden pt-7">
        <Swiper
          :slides-per-view="1"
          :effect="'creative'"
          :modules="[SwiperNavigation, SwiperPagination]"
          navigation
          :space-between="40"
        >
          <SwiperSlide v-for="item in cardv2" :key="item.title">
            <div class="w-full">
              <img :src="item.img" alt="" class="w-full h-full rounded-3xl" />
            </div>

            <div class="w-full">
              <p class="text-sm text-gray-600">2023/10/02</p>
              <h2 class="text-[18px] font-bold mt-1">{{ item.title }}</h2>
              <p class="text-gray-600 mt-2 mb-5 line-clamp-2">
                {{ item.text }}
              </p>
              <span
                v-for="(tg, index) in item.tag"
                :key="index"
                :class="`${
                  index == 1 && 'mx-2'
                } bg-secondary-150 px-3 py-1 rounded-full text-gray-600 text-[13px] inline-block`"
                >{{ tg }}</span
              >
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
const card = ref([
  {
    img: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMTkvR2tFUkNh",
    title: "微風廣場 高額生育津貼 年補助破百萬",
    company: "微風廣場實業股份有限公司",
    text: "微風集團設立以來，秉持著「For the Customers」企業理念落實於具體行動，一路走來，在消費者與社會大眾的支持與愛護下成長茁壯。微風集團期許成為全台顧客滿意度第一的購物中心，如同微風企業標語「新奇、High Image的微風」所傳遞的意念，每天提供新奇的商品與服務，讓顧客有賓至如歸的感受，享受購物的樂趣！",
    tag: ["#幸福企業", "#幸福企業2023", "#微風廣場"],
  },
  {
    img: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjAvTWtMaU1V",
    title: "功學社 品牌高品質 幸福員工是關鍵",
    company: "功學社教育用品股份有限公司",
    text: "音樂存於日常，對人們的生活有著很深遠的影響，而有在接觸音樂的人對「功學社」這個品牌一定都不陌生！秉持「誠信、篤實、突破、創新」的理念，從樂器製造到音樂教育，對於音樂的推廣功學社總不遺餘力。",
    tag: ["#功學社", "#幸福企業2023", "#企業報導"],
  },
  {
    img: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMTkvYm1sNUh2",
    title: "新光保全打造員工關懷為核心的健康職場環境",
    company: "台灣新光保全股份有限公司 (新光保全)",
    text: "新光保全致力發展多元職系與建構友善的職場環境，因應環境快速變化與保全業態的特殊性，如何讓員工隨時隨地可以學習新知，鼓勵員工在集團內跨領域學習，憑藉對產業及組織的熟悉度，發揮更大的潛能，是新光保全不斷努力的目標。",
    tag: ["#新光保全", "#幸福企業2023", "#企業報導"],
  },
  {
    img: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMTkvMEZMaE1h",
    title: "仁寶電腦生育補助6.6萬 優惠托嬰更貼心",
    company: "仁寶電腦工業股份有限公司",
    text: "仁寶電腦自1984年創立以來，秉持著對人的重視，公司相信，企業的成功與員工的幸福密不可分，因此，仁寶電腦用心規劃薪資福利項目、創造優質學習成長資源，並為員工打造幸福健康的工作環境，給予同仁個人及其家庭滿滿的溫暖及照顧。",
    tag: ["#仁寶電腦", "#幸福企業2023", "#企業報導"],
  },
]);
const cardv2 = ref([
  {
    img: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjAvN1drNjBH",
    title: "守護海洋生態及環境永續 樂多多集團總動員參與淨灘活動",
    text: "響應「福智文教基金會」號召發起的全台「用愛環抱海洋，企業淨灘 GO！」活動，樂多多集團動員期下品牌肉多多、狂一鍋、辛韓道、明水然樂等同仁共襄盛舉，一同投入於新北市萬里區下寮海灘的淨灘活動，與臺中清水北堤 9 號風車、高雄林園海洋濕地公園同時舉辦，當日參與淨灘的企業人士及親友總計逾 2,730 位，總計清出廢棄物 4,703 公斤。",
    tag: ["#ESG", "#幸福企業2023", "#樂多多"],
  },
  {
    img: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjAvSE11VzBs",
    title: "永續發展深入營運核心 飛宏集團落地ESG與社會共好",
    text: "擁有50年電源供應器的生產研發經驗的飛宏集團，全球超過6千名員工，不僅擁有強大技術和團隊陣容，滿足各種領域的客戶需求。在永續的目標之下，為客戶提供創新技術、傳承員工專業技能；不只陪客戶成長，更與員工一同找尋自身價值、追求社會共好。",
    tag: ["#飛宏集團", "#飛宏科技", "#幸福企業2023"],
  },
  {
    img: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjAvNE1DVGh3",
    title: "全台煙波大飯店皆榮獲「金級環保旅館」認證！",
    text: "國人愛旅行，台灣在今年7月1日起全面啟動一次性備品減量的規定，如何讓「永續環保」存在於每趟旅程中，是觀光旅遊業最大的課題。煙波國際觀光集團旗下所有飯店，於2022年全數榮獲環保署服務業「金級環保旅館」標章，而煙波大飯店花蓮太魯閣－沁海館於同年底獲頒全台首家通過「PAS 2060碳中和」認證之飯店，讓「永續旅遊」不再只是口號，守護台灣角落的在地美好！",
    tag: ["#煙波", "#幸福企業2023", "#ESG"],
  },
  {
    img: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjAvZGNjSVdt",
    title: "彰銀攜手台電共推ESG 首家數位供應鏈上線",
    text: "彰化銀行從供應商角度思考，發展創新之供應鏈金流，攜手台電合作推動供應鏈融資平台。此次與台電合作不僅能強化雙方夥伴關係，更能協助供應商解決產銷資金缺口。",
    tag: ["#彰銀", "#台電", "#ESG", "#幸福企業2023"],
  },
]);
const tag = reactive([
  "#力麗觀光",
  "#三立電視台",
  "#力晶",
  "#工研院",
  "#中華電信",
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
