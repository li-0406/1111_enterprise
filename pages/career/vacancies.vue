<template>
  <div class="bg-gradient-to-br from-white to-secondary-100">
    <div class="container mx-auto pt-14 max-w-screen-w px-4 l:px-0">
      <h1
        class="text-[40px] s:text-5xl flex gap-3 font-bold text-gray-900 mb-5"
      >
        幸福職缺<span
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
      <div class="border-b pb-3 pl-3 text-[14px]">共 10 筆職缺</div>
      <!-- content1 -->
      <div class="grid grid-cols-1 m:grid-cols-2 gap-6 mt-16">
        <div
          v-for="item in brandCard"
          :key="item.title"
          class="bg-white px-8 py-6 rounded-[30px]"
          style="box-shadow: 0px 4px 8px 0px #00000014"
        >
          <div class="flex items-center gap-3">
            <img
              :src="item.pic"
              alt=""
              class="w-20 h-20 rounded-[20px] object-contain border"
            />
            <div>
              <h1 class="text-[20px] font-bold">{{ item.title }}</h1>
              <p class="text-gray-600 mt-1">{{ item.company }}</p>
              <p class="text-gray-600">
                {{ item.address }} |
                <span class="text-primary-500">{{ item.pay }}</span>
              </p>
            </div>
          </div>
          <p class="line-clamp-2 mt-3 text-gray-400">{{ item.text }}</p>
          <button
            class="float-right bg-primary-500 rounded-full text-white px-4 py-2 mt-2 hover:bg-primary-600"
          >
            應徵
          </button>
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
    </div>
  </div>
</template>

<script setup>
const brandCard = reactive([
  {
    title: "研發工程師(無經驗可)",
    address: "新北市土城區",
    text: "異常分析、良率改善、實驗規劃執行、新產品新材料開發。",
    company: "燿華電子股份有限公司(Unitech) | 印刷電路板製造業(PCB)",
    pay: "月薪 36,100 至 43,000 元",
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjEveW9xR29P",
  },
  {
    title: "海外 - 資訊工程師-日本(馳諾瓦科技)",
    address: "東北亞日本",
    text: "1.電腦硬體、軟體維護。   2.VM、機房、網路管理等專業知識與技能。3.能執行Windows作業系統安裝，協助使用者電腦問題之故障排除。4.有操作SAP經驗尤佳",
    company: "馳諾瓦科技股份有限公司 | 其他電子零組件相關",
    pay: "面議",
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjEvNk5jRGdj",
  },
  {
    title: "機電/工務人員(含加班費及津貼)",
    address: "彰化縣北斗鎮",
    text: "1.丙級以上之工業配線、室內配線或水電相關之証照2.負責廠內相關水電、空調、生產設備之維修、保養及維護及異常緊急處理 。3.設備維修及保養工作規劃與執行。4.節能改善目標推行。5.主動與各部門進行改善工作協調與溝通。6.其他主管交辦事項。7.不怕高,認真學習, 態度積極, 不畏辛勞, 反應敏捷, 責任感。8.諳電腦文書處理。",
    company: "海霸王 (好品味生技食品股份有限公司) | 食品製造╱加工",
    pay: "月薪 28,000 至 35,000 元",
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjMvck1hUm85",
  },
  {
    title: "生物資訊工程師",
    address: "新北市汐止區",
    text: "1.Next Generation Sequencing (Illumina,ion-torrent等平台) 資料 QC 與處理。2.執行並協助開發次世代定序應用之生資分析服務。3.有專案管理經驗者佳。",
    company: "基龍米克斯生物科技股份有限公司 | 生化科技研發",
    pay: "面議",
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjEvRjJFV0px",
  },
  {
    title: "總公司：北區儲備店總監(Global Mall)",
    address: "新北市板橋區",
    text: "1.百貨商場/購物中心或其他零售服務相關經營管理10年以上經驗2.招商、營運管理、行銷販促整合管理3.可配合分派至全省分店者",
    company: "環球購物中心股份有限公司 | 百貨相關",
    pay: "面議",
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjEvQXpqWjlm",
  },
  {
    title: "招商主管",
    address: "高雄市前鎮區",
    text: "1.品牌開發、招商洽談、合約簽約。2.開業前籌備、規劃、市場分析等相關業務。3.具獨立招商開發、談判能力，包含商業條件、合約簽約，設計施工溝通。4.擬定招商計畫、招募廠商進駐及執行招商業務。5.市場情報情蒐、數據分析、招商定位規劃及業種管理。6.領導教導監督下屬賣場管理、業績管理、廠商活動溝通提案及其他工作執行事項 7.上級主管交辦事項處理及完成。8.面試地點:台北市大同區西寧北路62號",
    company: "海霸王集團_海霸王餐廳股份有限公司 | 餐廳╱餐館",
    pay: "面議",
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjEvb1JCengz",
  },
  {
    title: "宜得利NITORI儲備店長",
    address: "台北市中正區",
    text: "宜得利家居為日本的家具、家飾商品連鎖店龍頭。因應2023年擴大展店，現正積極招募對家具家飾業具有高度熱誠之從業人員。如有想更進一步了解宜得利家居，我們會於以下時間辦理企業說明會台北場報名連結：https://www.surveycake.com/s/knW60台中場報名連結：https://www.surveycake.com/s/nlNx1高雄場報名連結：https://www.surveycake.com/s/PyWb7歡迎求職者報名※應徵條件：1.對於家具、家飾商品有極高興趣者。2.須配合全台輪調(調職者享有轉勤租屋補助津貼)。台灣店舖分布地點請參考公司介紹。 3.具零售業、家具家飾產業等相關工作經驗6個月以上者。※工作地點：由公司安排配屬店舖，店舖據點請參考公司網頁。",
    company: "宜得利家居股份有限公司 | 百貨相關",
    pay: "月薪 32,000 至 50,000 元",
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjEvZzhZMFAx",
  },
  {
    title: "※高獎金業務員※挑戰百萬年薪不是夢",
    address: "桃園市桃園區",
    text: "工作內容––1..為客戶篩選適合的案件。2.帶客戶看屋。3.簽約相關事宜。工作努力多少就賺多少，自己的薪水無上限，短時間存到一桶金，只有房仲有這樣的機會，只怕自己錯失能賺多更多錢的機會!!歡迎想認真打拼的你加入我們。",
    company: "中信房屋(加盟店聯合徵才) | 不動產經營╱開發",
    pay: "論件計酬 5,000 至 500,000 元",
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMTkvMWk1VXFM",
  },
  {
    title: "行銷企劃––加盟總部",
    address: "台北市中山區",
    text: "條件:提案與簡報技巧廣告企劃案╱文案撰寫行銷策略擬定實體活動規劃與執行異業合作規劃與執行行銷影片規劃及製作。",
    company: "中信房屋(加盟店聯合徵才) | 不動產經營╱開發",
    pay: "面議",
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMTkvMWk1VXFM",
  },
  {
    title: "台南館 客務部 經理",
    address: "台南市中西區",
    text: "1.現場服務之運作流程管理，處理顧客抱怨2.教育訓練擬定與督導，制定標準作業流程，設定部門目標3.負責找人、培育人才調配之管理4.具備溝通協調能力，積極正向的工作態度，高度執行力5.良好的外語能力6.部門成本控管、資產庫存管理7.具備五年以上飯店客務部主管經驗",
    company: "煙波大飯店股份有限公司 | 飯店╱旅館",
    pay: "面議",
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMTkvTkEzU3Ri",
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
