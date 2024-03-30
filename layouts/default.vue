<template>
  <div @click="closeNav">
    <!-- header -->
    <header
      class="bg-white py-5 border-b-2 xs:pl-4 s:pl-6 m:pl-8 xs:pr-8 s:pr-10 m:pr-12"
    >
      <div
        class="flex justify-between l:justify-normal items-center relative container mx-auto max-w-screen-w"
      >
        <!-- logo -->
        <nuxt-link to="/">
          <div class="cursor-pointer">
            <div class="flex mr-12">
              <div
                class="flex after:content-['|'] after:text-gray-200 after:mx-3"
              >
                <img src="../assets/images/logo.svg" alt="" />
              </div>

              <img src="../assets/images/幸福企業.svg" alt="" />
            </div>
          </div>
        </nuxt-link>

        <!-- 漢堡 -->
        <div class="l:hidden" @click.stop="openList = !openList">
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1C0 0.446875 0.446875 0 1 0H13C13.5531 0 14 0.446875 14 1C14 1.55313 13.5531 2 13 2H1C0.446875 2 0 1.55313 0 1ZM0 6C0 5.44688 0.446875 5 1 5H13C13.5531 5 14 5.44688 14 6C14 6.55312 13.5531 7 13 7H1C0.446875 7 0 6.55312 0 6ZM14 11C14 11.5531 13.5531 12 13 12H1C0.446875 12 0 11.5531 0 11C0 10.4469 0.446875 10 1 10H13C13.5531 10 14 10.4469 14 11Z"
              fill="#1A1A1A"
            />
          </svg>
        </div>
        <!-- nav -->
        <div class="gap-10 hidden l:flex">
          <div v-for="item in tag" :key="item.name" class="relative">
            <p
              :class="`${
                item.show ? '' : 'text-gray-600'
              }  cursor-pointer flex items-center gap-1 select-none hover:text-secondary-600`"
              @click.stop="openChildren(item)"
            >
              {{ item.name }}
              <svg
                width="9"
                height="5"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                v-if="!item.show"
              >
                <path
                  d="M6.29609 0.292969C6.68672 -0.0976562 7.32109 -0.0976562 7.71172 0.292969L13.7117 6.29297C14.1023 6.68359 14.1023 7.31797 13.7117 7.70859C13.3211 8.09922 12.6867 8.09922 12.2961 7.70859L7.00234 2.41484L1.70859 7.70547C1.31797 8.09609 0.683594 8.09609 0.292969 7.70547C-0.0976562 7.31484 -0.0976562 6.68047 0.292969 6.28984L6.29297 0.289844L6.29609 0.292969Z"
                  fill="black"
                />
              </svg>
              <svg
                width="9"
                height="5"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                v-else
              >
                <path
                  d="M6.29609 7.70859C6.68672 8.09922 7.32109 8.09922 7.71172 7.70859L13.7117 1.70859C14.1023 1.31797 14.1023 0.683594 13.7117 0.292969C13.3211 -0.0976562 12.6867 -0.0976562 12.2961 0.292969L7.00234 5.58672L1.70859 0.296093C1.31797 -0.0945315 0.683594 -0.0945315 0.292969 0.296093C-0.0976562 0.686718 -0.0976562 1.32109 0.292969 1.71172L6.29297 7.71172L6.29609 7.70859Z"
                  fill="black"
                />
              </svg>
            </p>

            <div
              v-if="item.show"
              @click.stop
              class="absolute top-8 bg-white py-5 pl-7 w-[164px] rounded-2xl drop-shadow-lg z-50"
            >
              <ul>
                <li
                  v-for="(ch, index) in item.children"
                  :key="index"
                  :class="`${
                    index != item.children.length - 1 && 'mb-6'
                  }  cursor-pointer text-gray-600 hover:text-black flex items-center gap-2 group`"
                >
                  <nuxt-link :to="ch.page" @click="item.show = false">
                    {{ ch.name }}</nuxt-link
                  >

                  <svg
                    width="9"
                    height="8"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="opacity-0 group-hover:opacity-100"
                  >
                    <path
                      d="M13.7063 6.70624C14.0969 6.31562 14.0969 5.68124 13.7063 5.29062L8.70625 0.290619C8.31563 -0.100006 7.68125 -0.100006 7.29063 0.290619C6.9 0.681244 6.9 1.31562 7.29063 1.70624L10.5875 4.99999H1C0.446875 4.99999 0 5.44687 0 5.99999C0 6.55312 0.446875 6.99999 1 6.99999H10.5844L7.29375 10.2937C6.90312 10.6844 6.90312 11.3187 7.29375 11.7094C7.68437 12.1 8.31875 12.1 8.70938 11.7094L13.7094 6.70937L13.7063 6.70624Z"
                      fill="black"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 搜尋框 -->
        <div
          class="bg-gray-50 hidden l:flex gap-2 items-center justify-center py-2 px-5 rounded-full l:ml-[48px] xl:ml-[200px]"
        >
          <div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 6.5C13 7.93437 12.5344 9.25938 11.75 10.3344L15.7063 14.2937C16.0969 14.6844 16.0969 15.3188 15.7063 15.7094C15.3156 16.1 14.6812 16.1 14.2906 15.7094L10.3344 11.75C9.25938 12.5375 7.93437 13 6.5 13C2.90937 13 0 10.0906 0 6.5C0 2.90937 2.90937 0 6.5 0C10.0906 0 13 2.90937 13 6.5ZM6.5 11C7.09095 11 7.67611 10.8836 8.22208 10.6575C8.76804 10.4313 9.26412 10.0998 9.68198 9.68198C10.0998 9.26412 10.4313 8.76804 10.6575 8.22208C10.8836 7.67611 11 7.09095 11 6.5C11 5.90905 10.8836 5.32389 10.6575 4.77792C10.4313 4.23196 10.0998 3.73588 9.68198 3.31802C9.26412 2.90016 8.76804 2.56869 8.22208 2.34254C7.67611 2.1164 7.09095 2 6.5 2C5.90905 2 5.32389 2.1164 4.77792 2.34254C4.23196 2.56869 3.73588 2.90016 3.31802 3.31802C2.90016 3.73588 2.56869 4.23196 2.34254 4.77792C2.1164 5.32389 2 5.90905 2 6.5C2 7.09095 2.1164 7.67611 2.34254 8.22208C2.56869 8.76804 2.90016 9.26412 3.31802 9.68198C3.73588 10.0998 4.23196 10.4313 4.77792 10.6575C5.32389 10.8836 5.90905 11 6.5 11Z"
                fill="#646464"
              />
            </svg>
          </div>

          <input
            class="bg-transparent focus:outline-none"
            type="text"
            placeholder="搜尋企業、工作、報導"
          />
        </div>
        <!-- 登入 -->
        <div class="hidden l:flex items-center gap-2 ml-4 cursor-pointer">
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 8C8.06087 8 9.07828 7.57857 9.82843 6.82843C10.5786 6.07828 11 5.06087 11 4C11 2.93913 10.5786 1.92172 9.82843 1.17157C9.07828 0.421427 8.06087 0 7 0C5.93913 0 4.92172 0.421427 4.17157 1.17157C3.42143 1.92172 3 2.93913 3 4C3 5.06087 3.42143 6.07828 4.17157 6.82843C4.92172 7.57857 5.93913 8 7 8ZM5.57188 9.5C2.49375 9.5 0 11.9937 0 15.0719C0 15.5844 0.415625 16 0.928125 16H13.0719C13.5844 16 14 15.5844 14 15.0719C14 11.9937 11.5063 9.5 8.42813 9.5H5.57188Z"
              fill="#1A1A1A"
            />
          </svg>
          <span>登入/註冊</span>
        </div>
      </div>
    </header>
    <!-- 斷點L以下 -->
    <header
      class="w-full bg-white px-6 py-7 rounded-b-3xl drop-shadow-lg absolute l:hidden z-50"
      v-if="openList"
      @click.stop
    >
      <!-- 搜尋 -->
      <div
        class="bg-gray-50 l:hidden gap-2 flex items-center py-2 px-5 rounded-full l:ml-[48px] xl:ml-[228px]"
      >
        <div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 6.5C13 7.93437 12.5344 9.25938 11.75 10.3344L15.7063 14.2937C16.0969 14.6844 16.0969 15.3188 15.7063 15.7094C15.3156 16.1 14.6812 16.1 14.2906 15.7094L10.3344 11.75C9.25938 12.5375 7.93437 13 6.5 13C2.90937 13 0 10.0906 0 6.5C0 2.90937 2.90937 0 6.5 0C10.0906 0 13 2.90937 13 6.5ZM6.5 11C7.09095 11 7.67611 10.8836 8.22208 10.6575C8.76804 10.4313 9.26412 10.0998 9.68198 9.68198C10.0998 9.26412 10.4313 8.76804 10.6575 8.22208C10.8836 7.67611 11 7.09095 11 6.5C11 5.90905 10.8836 5.32389 10.6575 4.77792C10.4313 4.23196 10.0998 3.73588 9.68198 3.31802C9.26412 2.90016 8.76804 2.56869 8.22208 2.34254C7.67611 2.1164 7.09095 2 6.5 2C5.90905 2 5.32389 2.1164 4.77792 2.34254C4.23196 2.56869 3.73588 2.90016 3.31802 3.31802C2.90016 3.73588 2.56869 4.23196 2.34254 4.77792C2.1164 5.32389 2 5.90905 2 6.5C2 7.09095 2.1164 7.67611 2.34254 8.22208C2.56869 8.76804 2.90016 9.26412 3.31802 9.68198C3.73588 10.0998 4.23196 10.4313 4.77792 10.6575C5.32389 10.8836 5.90905 11 6.5 11Z"
              fill="#646464"
            />
          </svg>
        </div>

        <input
          class="bg-transparent focus:outline-none"
          type="text"
          placeholder="搜尋企業、工作、報導"
        />
      </div>
      <!-- nav -->
      <div class="flex flex-col gap-8 mt-8 pl-3">
        <div v-for="item in tag" :key="item.name">
          <p
            :class="`${
              item.show ? '' : 'text-gray-600'
            } flex items-center gap-1`"
            @click.stop="openChildren(item)"
          >
            {{ item.name }}
            <svg
              width="9"
              height="5"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-if="item.show"
            >
              <path
                d="M6.29609 0.292969C6.68672 -0.0976562 7.32109 -0.0976562 7.71172 0.292969L13.7117 6.29297C14.1023 6.68359 14.1023 7.31797 13.7117 7.70859C13.3211 8.09922 12.6867 8.09922 12.2961 7.70859L7.00234 2.41484L1.70859 7.70547C1.31797 8.09609 0.683594 8.09609 0.292969 7.70547C-0.0976562 7.31484 -0.0976562 6.68047 0.292969 6.28984L6.29297 0.289844L6.29609 0.292969Z"
                fill="black"
              />
            </svg>
            <svg
              width="9"
              height="5"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-else
            >
              <path
                d="M6.29609 7.70859C6.68672 8.09922 7.32109 8.09922 7.71172 7.70859L13.7117 1.70859C14.1023 1.31797 14.1023 0.683594 13.7117 0.292969C13.3211 -0.0976562 12.6867 -0.0976562 12.2961 0.292969L7.00234 5.58672L1.70859 0.296093C1.31797 -0.0945315 0.683594 -0.0945315 0.292969 0.296093C-0.0976562 0.686718 -0.0976562 1.32109 0.292969 1.71172L6.29297 7.71172L6.29609 7.70859Z"
                fill="black"
              />
            </svg>
          </p>
          <div>
            <div
              v-if="item.show"
              class="flex flex-col gap-8 mt-8 text-gray-600"
            >
              <p
                v-for="(ch, index) in item.children"
                :key="index"
                class="text-sm pl-1"
              >
                <nuxt-link
                  :to="ch.page"
                  @click="
                    item.show = false;
                    openList = false;
                  "
                >
                  {{ ch.name }}</nuxt-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 登入 -->
      <div class="flex l:hidden items-center gap-2 pl-3 mt-8">
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 8C8.06087 8 9.07828 7.57857 9.82843 6.82843C10.5786 6.07828 11 5.06087 11 4C11 2.93913 10.5786 1.92172 9.82843 1.17157C9.07828 0.421427 8.06087 0 7 0C5.93913 0 4.92172 0.421427 4.17157 1.17157C3.42143 1.92172 3 2.93913 3 4C3 5.06087 3.42143 6.07828 4.17157 6.82843C4.92172 7.57857 5.93913 8 7 8ZM5.57188 9.5C2.49375 9.5 0 11.9937 0 15.0719C0 15.5844 0.415625 16 0.928125 16H13.0719C13.5844 16 14 15.5844 14 15.0719C14 11.9937 11.5063 9.5 8.42813 9.5H5.57188Z"
            fill="#646464"
          />
        </svg>
        <span class="text-gray-600">登入/註冊</span>
      </div>
    </header>
    <slot />
    <footer
      class="bg-gray-800 w-full xs:px-4 s:px-6 m:px-8 l:px-[150px] xl:px-[300px] py-14"
    >
      <!-- logo -->
      <nuxt-link to="/">
        <div class="flex cursor-pointer">
          <div class="flex after:content-['|'] after:text-gray-600 after:mx-3">
            <img src="../assets/images/logo.svg" alt="" />
          </div>
          <img src="../assets/images/幸福企業.svg" alt="" />
        </div>
      </nuxt-link>

      <!-- list -->
      <div class="flex flex-col l:flex-row justify-between">
        <div v-for="item in footerList" :key="item.name">
          <h3 class="mb-5 text-gray-50 font-bold flex items-center gap-1 mt-7">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5" cy="5" r="4" stroke="#F6F6F6" stroke-width="2" />
            </svg>

            {{ item.name }}
          </h3>
          <div>
            <p
              v-for="(ch, index) in item.children"
              :key="index"
              :class="`${
                index !== item.children.length - 1 && 'mb-2'
              } text-sm text-gray-150 pl-4`"
            >
              {{ ch }}
            </p>
          </div>
        </div>
        <div class="flex items-end mt-5 m:mt-0 justify-end">
          <div
            class="w-12 h-12 bg-white rounded-full flex justify-center items-center cursor-pointer"
            @click="scrollToTop"
          >
            <svg
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.70615 0.293701C6.31553 -0.0969238 5.68115 -0.0969238 5.29053 0.293701L0.290527 5.2937C-0.100098 5.68433 -0.100098 6.3187 0.290527 6.70933C0.681152 7.09995 1.31553 7.09995 1.70615 6.70933L4.9999 3.41245V13C4.9999 13.5531 5.44678 14 5.9999 14C6.55303 14 6.9999 13.5531 6.9999 13V3.41245L10.2937 6.7062C10.6843 7.09683 11.3187 7.09683 11.7093 6.7062C12.0999 6.31558 12.0999 5.6812 11.7093 5.29058L6.70928 0.290576L6.70615 0.293701Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
      <p class="text-sm text-gray-150 mt-10 font-en">
        © 1111 人力銀行 2024 幸福企業 All Rights Reserved.
      </p>
    </footer>
  </div>
</template>

<script setup>
const openList = ref(false);
const tag = ref([
  {
    name: "年度盛事",
    show: false,
    children: [
      {
        name: "票選說明",
        page: "/year/voteManual",
      },
      {
        name: "立即投票",
        page: "/year/vote",
      },
      {
        name: "幸福金天天抽",
        page: "/year/happiness",
      },
      {
        name: "歷屆得獎名單",
        page: "/year/winnerList",
      },
    ],
  },
  // {
  //   name: "品牌報名",
  //   show: false,
  //   children: [
  //     {
  //       name: "企業報名",
  //       page: "/brand/registration",
  //     },
  //     {
  //       name: "網友推薦",
  //       page: "/brand/recommend",
  //     },
  //   ],
  // },
  {
    name: "幸福職涯",
    show: false,
    children: [
      {
        name: "知名品牌",
        page: "/career/famous",
      },
      {
        name: "幸福職缺",
        page: "/career/vacancies",
      },
    ],
  },
  {
    name: "幸福NEWS",
    show: false,
    children: [
      {
        name: "企業報導/ESG",
        page: "/news/report",
      },
      {
        name: "幸福特刊",
        page: "/news/journal",
      },
      {
        name: "媒體露出",
        page: "/news/media",
      },
    ],
  },
]);
const footerList = ref([
  {
    name: "關於幸福企業",
    children: ["加入會員", "徵才刊登", "FB 粉絲團", "隱私權保護"],
  },
  { name: "幸福企業投票", children: ["活動說明", "歷屆得獎名單"] },
  { name: "其他服務", children: ["科技島", "求職多國語系", "兼差打工"] },
]);
const closeNav = () => {
  tag.value.forEach((i) => (i.show = false));
  openList.value = false;
};

const openChildren = (item) => {
  // item.show = !item.show;

  tag.value.forEach((i) => {
    i.name === item.name ? (i.show = !i.show) : (i.show = false);
  });
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style lang="scss" scoped>
.el-menu--horizontal.el-menu {
  border: none;
}

::v-deep {
  .el-menu--horizontal > .el-sub-menu.is-active .el-sub-menu__title {
    border-bottom: none;
  }

  .el-menu--horizontal > .el-sub-menu:hover .el-sub-menu__title {
    color: #303133;
  }
  .el-menu--popup {
    min-width: 164px;
    border-radius: 20px !important;
  }
  .el-menu .el-menu-item:hover {
    background: #303133 !important;
  }
}
</style>
