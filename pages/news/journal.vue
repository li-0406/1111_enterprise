<template>
  <div class="bg-gradient-to-br from-white to-secondary-100">
    <div class="container mx-auto pt-14 max-w-screen-w px-4 l:px-0">
      <h1
        class="text-[40px] s:text-5xl flex gap-3 font-bold text-gray-900 mb-5"
      >
        幸福特刊<span
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
      <div class="container mx-auto pt-16 max-w-screen-w flex justify-center">
        <div
          class="bg-white pl-6 pr-[6px] py-[6px] rounded-full flex flex-wrap"
        >
          <span class="flex items-center gap-1 text-gray-600"
            >全部年份<svg
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
      <!-- 結果 -->
      <div class="container mx-auto pt-20 max-w-screen-m px-4 l:px-0 pb-10">
        <div class="border-b pb-3 pl-3 text-[14px]">共 6 筆報導</div>

        <div v-for="item in data" :key="item.title" class="s:flex gap-6 mt-12">
          <img
            :src="item.img"
            alt=""
            class="w-full s:w-[312px] rounded-3xl object-cover"
          />
          <div>
            <p class="flex justify-between text-gray-600 text-sm mt-3 s:mt-0">
              2023/10/02
              <span class="flex items-center gap-2 text-base"
                ><img src="@/assets/images/share.svg" alt="" /> 分享</span
              >
            </p>
            <h1 class="text-[22px] font-bold my-1">{{ item.title }}</h1>
            <p class="text-primary-500 underline">{{ item.company }}</p>
            <p class="text-gray-600 my-3">{{ item.text }}</p>
            <span
              class="bg-secondary-150 px-3 py-1 text-gray-600 text-sm rounded-full"
            >
              {{ item.tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = reactive([
  {
    title: "QEST量子節能科技 保證節電10以上",
    text: "鴻邦國際致力於以先進的節能科技，協助高用電的企業用戶，減少企業電費支出降低成本；為企業帶來經濟與環保的雙重效益！「節能」指的是節約能源、「減碳」指的是減少二氧化碳的排放量!",
    tag: "#鴻邦國際",
    img: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAzMDUvRU1uZjFa",
  },
  {
    title: "一步一腳印 讓學習成為日常",
    text: "該怎麼準備托福／雅思考試？出國留學如何申請？ 自己的英文程度要從何開始？1988年，寰宇外語創辦人林神龍剛自美國學成歸國，深刻體會到莘莘學子在準備出國留學時所遭遇的困境，便全心投入打造最適合國人的留學補習班─「寰宇外語補習班」。",
    tag: "#寰宇外語",
    img: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAzMDUvT0V6cWd2",
  },
  {
    title: "帶給您健康幸福的泉源",
    company: "台灣銀谷有限公司phiten shop保健連鎖專賣店",
    text: "台灣銀谷有限公司創立於1993年，主要引進及研發各種高品質的保健商品，經營理念是以講求信用、做事誠實的態度來對消費者負責任，始終堅守永續經營的精神以求公司發展茁壯。",
    tag: "#台灣銀谷",
    img: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAzMDUvRDBMb1Q2",
  },
  {
    title: "量身訂製 做客戶最好的聆聽者",
    company: "誌廣科技股份有限公司",
    text: "以網路資安系統聞名的誌廣科技，創立已有11年，主要產品為防火牆，其服務企業眾多，諸如工研院、敦陽科技、中華電信、矽格電子與醫療單位等，皆是他們的客戶。總經理張云鎧謙虛地說：「我們雖不是業界領導品牌，但能依據客戶需求與公司規模來量身打造。」",
    tag: "#誌廣科技",
    img: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAzMDUvV25wQmZR",
  },
  {
    title: "從頭到腳 讓共振直達血管末梢",
    company: "量子華陀DWQT",
    text: "鼎旺量子科技有限公司陳銘琪董事長表示，人體的血管總長度約有十萬公里那麼長，但我們的心臟只有一個拳頭那麼大，而且中間又有十多個大轉折點，怎麼有可能將血打通全身呢？其實靠的就是「共振」原理，心臟發出共振聲音，其他器官根據聲音一起共振，讓血流向各器官。",
    tag: "#鼎旺量子科技",
    img: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAzMDUvanlGWGNG",
  },
  {
    title: "複刻萬里長城 沉浸思古幽情",
    text: "台灣白河萬里長城」為城主林務局長另起爐灶的最新力作，歷經10年精心規畫，秉持台灣電影文化城精神，將電影老街拍攝場景之精華建造於園區，讓客人穿著古裝自由自在穿梭於此，思古風情遙想自身喜愛古裝劇中角色，大玩角色扮演。",
    tag: "#台灣白河萬里長城",
    img: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAzMDUvT0FIYlJx",
  },
]);
</script>
