<template>
  <div class="bg-gradient-to-br from-white to-secondary-100">
    <div class="container mx-auto pt-14 max-w-screen-w px-4">
      <h1
        class="text-[40px] s:text-5xl flex gap-3 font-bold text-gray-900 mb-5"
      >
        票選說明<span
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
          >近年來由於少子化，造成台灣人才短缺日益嚴重。今為吸引年輕人更願意投入各產業，同時也激勵業者提供更好的福利與願景，以吸引更多優秀人才，1111人力銀行特舉辦本年度最喜愛企業票選活動！</span
        >
      </div>
    </div>

    <div class="mx-auto mt-20 relative">
      <div class="grid grid-cols-5 xl:px-[300px] line">
        <div
          v-for="(item, index) in process"
          :key="item.title"
          class="flex flex-col items-center relative border-t-2 border-secondary-500"
        >
          <div
            class="w-3 h-3 rounded-full border-2 border-secondary-500 bg-[#FAF3ED] absolute -top-2"
          ></div>
          <svg
            v-if="index !== process.length - 1"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute right-0 -top-2"
          >
            <path
              d="M7.70859 6.29609C8.09922 6.68672 8.09922 7.32109 7.70859 7.71172L1.70859 13.7117C1.31797 14.1023 0.683594 14.1023 0.292969 13.7117C-0.0976562 13.3211 -0.0976562 12.6867 0.292969 12.2961L5.58672 7.00234L0.296094 1.70859C-0.0945313 1.31797 -0.0945313 0.683594 0.296094 0.292969C0.686719 -0.0976562 1.32109 -0.0976562 1.71172 0.292969L7.71172 6.29297L7.70859 6.29609Z"
              fill="#D9A479"
            />
          </svg>
          <p class="text-lg mt-5 whitespace-nowrap">{{ item.title }}</p>
          <p class="text-secondary-600">{{ item.date }}</p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-6 container mx-auto max-w-screen-w pt-20">
      <div
        class="rounded-[30px] p-[2px] card"
        style="
          background-image: linear-gradient(
            136.77deg,
            #ffffff 0%,
            #f7ede4 101.14%
          );
        "
      >
        <div class="bg-white rounded-3xl flex justify-between p-16 relative">
          <div class="flex gap-5">
            <h1 class="text-3xl text-secondary-500 font-bold">
              {{ cardData[0].num }}
            </h1>
            <div>
              <h1 class="text-xl mb-3 font-bold">{{ cardData[0].title }}</h1>
              <p class="text-lg text-gray-800">
                報名時間：<span class="text-primary-500">{{
                  cardData[0].time
                }}</span>
              </p>
            </div>
          </div>
          <button
            class="border rounded-full px-7 py-2 flex gap-1 items-center absolute right-[64px]"
          >
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.07692 1.57692C8.07692 0.98125 7.59567 0.5 7 0.5C6.40433 0.5 5.92308 0.98125 5.92308 1.57692V6.42308H1.07692C0.48125 6.42308 0 6.90433 0 7.5C0 8.09567 0.48125 8.57692 1.07692 8.57692H5.92308V13.4231C5.92308 14.0188 6.40433 14.5 7 14.5C7.59567 14.5 8.07692 14.0188 8.07692 13.4231V8.57692H12.9231C13.5188 8.57692 14 8.09567 14 7.5C14 6.90433 13.5188 6.42308 12.9231 6.42308H8.07692V1.57692Z"
                fill="#1A1A1A"
              />
            </svg>
            展開
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const process = reactive([
  { title: "品牌報名", date: "即日起" },
  { title: "網路票選", date: "05/01 (三)" },
  { title: "秘密客評比", date: "08/16 (五)" },
  { title: "公布結果", date: "09/12 (四)" },
  { title: "頒獎典禮", date: "11/11 (一)" },
]);
const cardData = reactive([
  {
    num: "01",
    title: "品牌報名",
    time: "即日起 ~ 07/31 (三)",
    manner: "線上填寫表單",
    illustrate:
      "因收到貴企業被推舉或主動報名之資訊，因此溫馨提醒後續排程如下。若企業廠商違反幸福職場原則或資料檢附不齊，主辦單位保有下架參賽品牌之權力。",
  },
  {
    num: "02",
    title: "網路票選－幸福金天天抽",
    time: "05/01 (三) ~ 08/15 (四)",
    manner: [
      "主辦單位將於票選時間 每週一至週五 天天抽 10名 500元 幸運兒。",
      "凡參與投票活動之網友皆具有抽獎資格，但每人限兌領乙次。",
    ],
    illustrate: [
      "每日中獎結果詳見 活動網頁 (中獎者須主動聯絡負責窗口，1111人力銀行不另行通知)",
      "兌領時間為 05/10(五) ~ 09/06(五)，逾期未兌領視同放棄恕不接受個人因素補領。",
      "中獎人須依中華民國機會中獎相關規範提供個人資料以利兌領。",
      "1111人力銀行保有活動修改及最終解釋權。",
      "有關中獎兌領事宜，請洽 (02) 8787-1111 #8869 李先生。",
    ],
  },
  {
    num: "03",
    title: "秘密客評比",
    time: "08/16 (五) ~ 08/31 (六)",
    illustrate:
      "1111 人力銀行有超過 800萬求職會員，透過大數據撈取履歷上現職或曾在該企業服務的會員，寄發電子問卷給會員填寫，針對各品牌福利落實程度進行回覆。",
  },
  {
    num: "04",
    time: "09/12 (四)",
    awards: "09/12 (四)",
  },
  {
    title: "評選流程暨占比",
    illustrate: [
      "經廠商自薦或網友推薦，由主辦單位評選小組針對資訊正確性、福利制度、勞資關係公開資訊進行蒐集與審核。",
      "審核完成後進入網路票選階段，每人每天針對個別的參與品牌可投乙票，同日不可重複投給同乙家品牌，但同日可投給多家品牌無總票數上限，網路票選占總評比60%。",
      "秘密客評選佔總評比40%。",
      "ESG企業永續為加分題，若有相關資料可於報名時簡述或以e-mail方式另行提供給活動小組。",
      "評選過程將邀集 11類指標性產官學專家，來共同響應活動參任顧問團，強化活動的專業度與公正性。",
      "若企業廠商違反幸福職場原則或資料檢附不齊，主辦單位保有下架參賽品牌之權力。",
    ],
  },
  {
    title: "活動小組聯繫人",
    illustrate: [
      "呂小姐： (02) 8787-1111 #8823 / heidi.lu@staff.1111.com.tw",
      "陳小姐： (02) 8787-1111 #8983 / nikkichen@staff.1111.com.tw",
      "劉小姐： (02) 8787-1111 #8935 / Mine_Liu@staff.1111.com.tw",
      "謝小姐： (02) 8787-1111 #8939 / joycehsueh@staff.1111.com.tw",
    ],
  },
]);
</script>

<style lang="scss" scoped>
.line {
  &:before {
    content: "";
    width: 320px;
    height: 2px;
    display: block;
    background: #d9a479;
    top: 0;
    left: 0;
    position: absolute;
  }
  &:after {
    content: "";
    width: 320px;
    height: 2px;
    display: block;
    background: #d9a479;
    top: 0;
    right: 0;
    position: absolute;
  }
}

.card {
  box-shadow: 0px 0px 20px 0px #0000000d;
}
</style>
