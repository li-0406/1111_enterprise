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

    <div
      class="grid grid-cols-2 gap-6 container mx-auto max-w-screen-w pt-20 pb-24 m:px-8 l:px-0"
    >
      <!-- 01 -->
      <div class="col-span-2 l:col-span-1">
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
          <div
            class="bg-white rounded-3xl flex justify-between px-4 s:px-6 m:px-16 py-9 m:py-12 l:py-16 relative"
          >
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
                <p class="text-lg text-gray-800 mt-3" v-show="cardData[0].open">
                  報名方式：<span class="text-gray-600">{{
                    cardData[0].manner
                  }}</span>
                </p>
                <div class="flex mt-3" v-show="cardData[0].open">
                  <p class="text-lg text-gray-800 text-nowrap">報名說明：</p>
                  <p class="text-gray-600 text-lg">
                    {{ cardData[0].illustrate }}
                  </p>
                </div>
              </div>
            </div>
            <button
              class="border rounded-full px-7 py-2 flex gap-2 items-center absolute right-[16px] s:right-[24px] m:right-[64px]"
              @click="cardData[0].open = !cardData[0].open"
            >
              <svg
                v-if="cardData[0].open"
                width="14"
                height="3"
                viewBox="0 0 14 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 1.5C14 2.05313 13.5531 2.5 13 2.5H1C0.446875 2.5 0 2.05313 0 1.5C0 0.946875 0.446875 0.5 1 0.5H13C13.5531 0.5 14 0.946875 14 1.5Z"
                  fill="#1A1A1A"
                />
              </svg>
              <svg
                v-else
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

              {{ cardData[0].open ? "收合" : "展開" }}
            </button>
          </div>
        </div>
      </div>
      <!-- 02 -->
      <div class="col-span-2 l:col-span-1">
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
          <div
            class="bg-white rounded-3xl flex justify-between px-4 s:px-6 m:px-16 py-9 m:py-12 l:py-16 relative"
          >
            <div class="flex gap-5">
              <h1 class="text-3xl text-secondary-500 font-bold">
                {{ cardData[1].num }}
              </h1>
              <div>
                <h1 class="text-xl mb-3 font-bold">{{ cardData[1].title }}</h1>
                <p class="text-lg text-gray-800">
                  票選時間：<span class="text-primary-500">{{
                    cardData[1].time
                  }}</span>
                </p>
                <div class="flex gap-6 mt-3" v-show="cardData[1].open">
                  <p class="text-lg text-gray-800 text-nowrap">投票獎勵：</p>
                  <div>
                    <ul class="text-gray-600 list-decimal text-lg">
                      <li>
                        主辦單位將於票選時間 每週一至週五 天天抽
                        <span class="text-primary-500">10名 500元</span>
                        幸運兒。
                      </li>
                      <li>
                        凡參與投票活動之網友皆具有抽獎資格，但每人限兌領乙次。凡參與投票活動之網友皆具有抽獎資格，但每人限兌領乙次。
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="flex gap-6 mt-3" v-show="cardData[1].open">
                  <p class="text-lg text-gray-800 text-nowrap">兌領方式：</p>
                  <div>
                    <ul class="text-gray-600 list-decimal text-lg">
                      <li>
                        每日中獎結果詳見
                        <span class="text-primary-500">活動網頁</span>
                        (中獎者須主動聯絡負責窗口，1111人力銀行不另行通知)
                      </li>
                      <li>
                        兌領時間為 05/10(五) ~
                        09/06(五)，逾期未兌領視同放棄恕不接受個人因素補領。
                      </li>
                      <li>
                        中獎人須依中華民國機會中獎相關規範提供個人資料以利兌領。
                      </li>
                      <li>1111人力銀行保有活動修改及最終解釋權。</li>
                      <li>
                        有關中獎兌領事宜，請洽 (02) 8787-1111 #8869 李先生。
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="border rounded-full px-7 py-2 flex gap-2 items-center absolute right-[16px] s:right-[24px] m:right-[64px]"
              @click="cardData[1].open = !cardData[1].open"
            >
              <svg
                v-if="cardData[1].open"
                width="14"
                height="3"
                viewBox="0 0 14 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 1.5C14 2.05313 13.5531 2.5 13 2.5H1C0.446875 2.5 0 2.05313 0 1.5C0 0.946875 0.446875 0.5 1 0.5H13C13.5531 0.5 14 0.946875 14 1.5Z"
                  fill="#1A1A1A"
                />
              </svg>
              <svg
                v-else
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

              {{ cardData[1].open ? "收合" : "展開" }}
            </button>
          </div>
        </div>
      </div>
      <!-- 03 -->
      <div class="col-span-2 l:col-span-1">
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
          <div
            class="bg-white rounded-3xl flex justify-between px-4 s:px-6 m:px-16 py-9 m:py-12 l:py-16 relative"
          >
            <div class="flex gap-5">
              <h1 class="text-3xl text-secondary-500 font-bold">
                {{ cardData[2].num }}
              </h1>
              <div>
                <h1 class="text-xl mb-3 font-bold">{{ cardData[2].title }}</h1>
                <p class="text-lg text-gray-800">
                  評選時間：<span class="text-primary-500">{{
                    cardData[2].time
                  }}</span>
                </p>
                <div class="flex mt-3" v-show="cardData[2].open">
                  <p class="text-lg text-gray-800 text-nowrap">評選說明：</p>
                  <p class="text-gray-600 text-lg">
                    {{ cardData[2].illustrate }}
                  </p>
                </div>
              </div>
            </div>
            <button
              class="border rounded-full px-7 py-2 flex gap-2 items-center absolute right-[16px] s:right-[24px] m:right-[64px]"
              @click="cardData[2].open = !cardData[2].open"
            >
              <svg
                v-if="cardData[2].open"
                width="14"
                height="3"
                viewBox="0 0 14 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 1.5C14 2.05313 13.5531 2.5 13 2.5H1C0.446875 2.5 0 2.05313 0 1.5C0 0.946875 0.446875 0.5 1 0.5H13C13.5531 0.5 14 0.946875 14 1.5Z"
                  fill="#1A1A1A"
                />
              </svg>
              <svg
                v-else
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

              {{ cardData[2].open ? "收合" : "展開" }}
            </button>
          </div>
        </div>
      </div>
      <!-- 04 -->
      <div class="col-span-2 l:col-span-1">
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
          <div
            class="bg-white rounded-3xl flex justify-between px-4 s:px-6 m:px-16 py-9 m:py-12 l:py-16 relative"
          >
            <div class="flex gap-5">
              <h1 class="text-3xl text-secondary-500 font-bold">
                {{ cardData[3].num }}
              </h1>
              <div>
                <h1 class="text-xl mb-3 font-bold">{{ cardData[3].title }}</h1>
                <p class="text-lg text-gray-800">
                  公告時間：<span class="text-primary-500">{{
                    cardData[3].time
                  }}</span>
                </p>

                <p class="text-lg text-gray-800 mt-3" v-show="cardData[3].open">
                  頒獎典禮：<span class="text-primary-500">{{
                    cardData[3].awards
                  }}</span>
                </p>
              </div>
            </div>
            <button
              class="border rounded-full px-7 py-2 flex gap-2 items-center absolute right-[16px] s:right-[24px] m:right-[64px]"
              @click="cardData[3].open = !cardData[3].open"
            >
              <svg
                v-if="cardData[3].open"
                width="14"
                height="3"
                viewBox="0 0 14 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 1.5C14 2.05313 13.5531 2.5 13 2.5H1C0.446875 2.5 0 2.05313 0 1.5C0 0.946875 0.446875 0.5 1 0.5H13C13.5531 0.5 14 0.946875 14 1.5Z"
                  fill="#1A1A1A"
                />
              </svg>
              <svg
                v-else
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

              {{ cardData[3].open ? "收合" : "展開" }}
            </button>
          </div>
        </div>
      </div>
      <!-- 評選流程暨占比 -->
      <div class="col-span-2">
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
          <div
            class="bg-white rounded-3xl flex justify-between px-4 s:px-6 m:px-16 py-9 m:py-12 l:py-16 relative"
          >
            <div class="flex gap-5">
              <div>
                <h1 class="text-xl mb-3 font-bold">{{ cardData[4].title }}</h1>

                <div class="flex gap-6 mt-3" v-show="cardData[4].open">
                  <p class="text-lg text-gray-800 text-nowrap">評選說明：</p>
                  <div>
                    <ul class="text-gray-600 list-decimal text-lg">
                      <li v-for="item in cardData[4].illustrate" :key="item">
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="border rounded-full px-7 py-2 flex gap-2 items-center absolute right-[16px] s:right-[24px] m:right-[64px]"
              @click="cardData[4].open = !cardData[4].open"
            >
              <svg
                v-if="cardData[4].open"
                width="14"
                height="3"
                viewBox="0 0 14 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 1.5C14 2.05313 13.5531 2.5 13 2.5H1C0.446875 2.5 0 2.05313 0 1.5C0 0.946875 0.446875 0.5 1 0.5H13C13.5531 0.5 14 0.946875 14 1.5Z"
                  fill="#1A1A1A"
                />
              </svg>
              <svg
                v-else
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

              {{ cardData[4].open ? "收合" : "展開" }}
            </button>
          </div>
        </div>
      </div>
      <!-- 活動小組聯繫人 -->
      <div class="col-span-2">
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
          <div
            class="bg-white rounded-3xl flex justify-between px-4 s:px-6 m:px-16 py-9 m:py-12 l:py-16 relative"
          >
            <div class="flex gap-5 flex-wrap">
              <div>
                <h1 class="text-xl mb-3 font-bold">{{ cardData[5].title }}</h1>

                <div class="flex gap-6 mt-3" v-show="cardData[5].open">
                  <div class="grid grid-cols-1 l:grid-cols-2">
                    <p
                      v-for="item in cardData[5].illustrate"
                      :key="item"
                      class="text-gray-600 text-lg"
                    >
                      {{ item }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="border rounded-full px-7 py-2 flex gap-2 items-center absolute right-[16px] s:right-[24px] m:right-[64px]"
              @click="cardData[5].open = !cardData[5].open"
            >
              <svg
                v-if="cardData[5].open"
                width="14"
                height="3"
                viewBox="0 0 14 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 1.5C14 2.05313 13.5531 2.5 13 2.5H1C0.446875 2.5 0 2.05313 0 1.5C0 0.946875 0.446875 0.5 1 0.5H13C13.5531 0.5 14 0.946875 14 1.5Z"
                  fill="#1A1A1A"
                />
              </svg>
              <svg
                v-else
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

              {{ cardData[5].open ? "收合" : "展開" }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto pt-14 max-w-screen-w px-4">
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
            <p
              v-for="t in item.text"
              :key="t"
              class="text-gray-600 mt-2 truncate"
            >
              {{ t }}
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

      <div class="flex justify-end pt-[68px] pb-[128px]">
        <p class="flex items-center gap-2 text-primary-500 cursor-pointer">
          其他知名品牌<svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.7086 12.7086C19.0992 12.318 19.0992 11.6836 18.7086 11.293L13.7086 6.29297C13.318 5.90234 12.6836 5.90234 12.293 6.29297C11.9023 6.68359 11.9023 7.31797 12.293 7.70859L16.5867 12.0023L12.2961 16.2961C11.9055 16.6867 11.9055 17.3211 12.2961 17.7117C12.6867 18.1023 13.3211 18.1023 13.7117 17.7117L18.7117 12.7117L18.7086 12.7086ZM7.70859 17.7086L12.7086 12.7086C13.0992 12.318 13.0992 11.6836 12.7086 11.293L7.70859 6.29297C7.31797 5.90234 6.68359 5.90234 6.29297 6.29297C5.90234 6.68359 5.90234 7.31797 6.29297 7.70859L10.5867 12.0023L6.29609 16.2961C5.90547 16.6867 5.90547 17.3211 6.29609 17.7117C6.68672 18.1023 7.32109 18.1023 7.71172 17.7117L7.70859 17.7086Z"
              fill="#E2605E"
            />
          </svg>
        </p>
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
    open: false,
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
    open: false,
  },
  {
    num: "03",
    title: "秘密客評比",
    time: "08/16 (五) ~ 08/31 (六)",
    illustrate:
      "1111 人力銀行有超過 800萬求職會員，透過大數據撈取履歷上現職或曾在該企業服務的會員，寄發電子問卷給會員填寫，針對各品牌福利落實程度進行回覆。",
    open: false,
  },
  {
    num: "04",
    title: "公布結果",
    time: "09/12 (四)",
    awards: "11/11 (一)",
    open: false,
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
    open: false,
  },
  {
    title: "活動小組聯繫人",
    illustrate: [
      "呂小姐： (02) 8787-1111 #8823 / heidi.lu@staff.1111.com.tw",
      "陳小姐： (02) 8787-1111 #8983 / nikkichen@staff.1111.com.tw",
      "劉小姐： (02) 8787-1111 #8935 / Mine_Liu@staff.1111.com.tw",
      "謝小姐： (02) 8787-1111 #8939 / joycehsueh@staff.1111.com.tw",
    ],
    open: false,
  },
]);
const brandCard = reactive([
  {
    title: "凱林鐵板燒",
    address: "台北市中山區",
    text: [
      "外場服務人員 ( 凱林鐵板燒 台北101店 )",
      "外場服務人員 ( 中壢大江店 )",
    ],
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjEvaGdXNkhG",
  },
  {
    title: "愛德利亞台灣股份有限公司",
    address: "台北市大安區",
    text: [
      "LOWRYS FARM 全職服飾銷售人員",
      "LOWRYS FARM 全職服飾銷售人員全職服飾銷售人員(北區專員)",
    ],
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjEvbGlpS09E",
  },
  {
    title: "三商電腦股份有限公司",
    address: "台北市信義區",
    text: [
      "外勤維護工程師・工服事業部北區服務處北一服務課",
      "維護工程師 ．工服事業部中區服務處新竹服務課",
    ],
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjEvQ0VtR1ND",
  },
  {
    title: "瑞嘉軟體科技股份有限公司",
    address: "台北市內湖區",
    text: [
      "Engineer Assistant / 工程師助理",
      "Senior Product Manager / 資深產品經理",
    ],
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjEvMjBqbXJl",
  },
  {
    title: "微風廣場實業股份有限公司",
    address: "台北市大安區",
    text: [
      "外場服務人員 / 儲備幹部 / 副店長 /店長",
      "內場廚助 / 廚師 / 副主廚 / 主廚",
    ],
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjEvSlNCeVJq",
  },
  {
    title: "樂子國際股份有限公司",
    address: "台北市中山區",
    text: [
      "【樂子南港店－外場正職】月薪32,000起",
      "【樂子信義店－內場廚師】月薪46,000起",
    ],
    pic: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjEvUkIyS2Rq",
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
