<template>
  <div class="bg-gradient-to-br from-white to-secondary-100">
    <div class="container mx-auto pt-14 max-w-screen-w px-4 m:px-8 l:px-0">
      <h1
        class="text-[40px] s:text-5xl flex gap-3 font-bold text-gray-900 mb-5"
      >
        立即投票<span
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
          >投票提醒：每間公司每天只能投一次票，投票數量無限制。</span
        >
      </div>
    </div>
    <!-- 幸福楷模 -->
    <div class="mt-14 pt-14 pb-16 back bg-white-40%">
      <div class="container mx-auto max-w-screen-w">
        <h1 class="text-center text-3xl font-bold mb-8">幸福楷模</h1>
        <Swiper
          v-bind="swiperConfig"
          :slides-per-view="6"
          :effect="'creative'"
          :modules="[SwiperNavigation, SwiperPagination]"
          navigation
          :space-between="24"
        >
          <SwiperSlide v-for="item in logo" :key="item.title">
            <div class="bg-white rounded-[20px] px-5 py-10 back">
              <div>
                <img
                  :src="item.img"
                  alt=""
                  class="w-20 h-20 border rounded-[20px] object-contain mx-auto"
                />
                <h3 class="text-center font-bold mt-5 text-nowrap">
                  {{ item.title }}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <!-- 搜尋 -->
    <div class="container mx-auto pt-20 max-w-screen-w flex justify-center">
      <div class="bg-white pl-6 pr-[6px] py-[6px] rounded-full flex flex-wrap">
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

        <span class="flex items-center gap-1 text-gray-600 ml-8"
          >全部類別<svg
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
          class="border rounded-full py-[10px] px-4 bg-gray-50 s:ml-5"
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
    <!-- 搜尋結果 -->
    <div class="container mx-auto max-w-screen-w px-4 m:px-8 l:px-0">
      <div class="grid grid-cols-1 m:grid-cols-2 l:grid-cols-3 gap-6">
        <div
          v-for="item in searchData"
          :key="item.title"
          class="bg-white rounded-[20px] p-12 back"
        >
          <div>
            <img
              :src="item.img"
              alt=""
              class="w-20 h-20 border rounded-[20px] object-contain mx-auto"
            />
            <h3 class="text-center font-bold mt-2 text-nowrap">
              {{ item.title }}
            </h3>
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mx-auto mt-6 mb-10"
          >
            <path
              d="M12.5714 6.85714C14.4643 6.85714 16 5.32143 16 3.42857C16 1.53571 14.4643 0 12.5714 0C10.6786 0 9.14286 1.53571 9.14286 3.42857C9.14286 3.57143 9.15 3.71429 9.16786 3.85357L5.80714 5.53214C5.19286 4.93571 4.35357 4.57143 3.42857 4.57143C1.53571 4.57143 0 6.10714 0 8C0 9.89286 1.53571 11.4286 3.42857 11.4286C4.35357 11.4286 5.19286 11.0643 5.80714 10.4679L9.16786 12.1464C9.15 12.2857 9.14286 12.425 9.14286 12.5714C9.14286 14.4643 10.6786 16 12.5714 16C14.4643 16 16 14.4643 16 12.5714C16 10.6786 14.4643 9.14286 12.5714 9.14286C11.6464 9.14286 10.8071 9.50714 10.1929 10.1036L6.83214 8.425C6.85 8.28571 6.85714 8.14643 6.85714 8C6.85714 7.85357 6.85 7.71429 6.83214 7.575L10.1929 5.89643C10.8071 6.49286 11.6464 6.85714 12.5714 6.85714Z"
              fill="#646464"
            />
          </svg>
          <p class="line-clamp-3 text-gray-600">{{ item.text }}</p>
          <div class="flex justify-between mt-20">
            <button
              class="border px-12 py-3 rounded-full ml-2 hover:bg-gray-50"
            >
              看職缺
            </button>
            <button
              class="bg-primary-500 px-12 py-3 text-white rounded-full ml-2 hover:bg-primary-600"
            >
              投一票
            </button>
          </div>
        </div>
      </div>
      <div class="pt-20 pb-32 px-9 s:px-10 m:px-12">
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
import img1 from "@/assets/images/Image.svg";
import img2 from "@/assets/images/Image-1.svg";
import img3 from "@/assets/images/Image-2.svg";
import img4 from "@/assets/images/Image-3.svg";
import img5 from "@/assets/images/Image-4.svg";
import img6 from "@/assets/images/Image-5.svg";
import otis from "@/assets/images/otis.svg";
import apex from "@/assets/images/apex.svg";
import takisawa from "@/assets/images/takisawa.svg";
import panasonic from "@/assets/images/panasonic.svg";
import sticky from "@/assets/images/台灣表面黏著.svg";
import one from "@/assets/images/一風堂.svg";
import Company from "@/assets/images/Company.svg";
import ad1 from "@/assets/images/Ad.png";
import ad2 from "@/assets/images/Ad-1.png";

const logo = reactive([
  {
    img: img1,
    title: "DHL Express 台灣",
  },
  {
    img: img2,
    title: "瑞嘉軟體科技ONElab...",
  },
  {
    img: img3,
    title: "綠茵生技",
  },
  {
    img: img4,
    title: "福壽實業",
  },
  {
    img: img5,
    title: "IKEA",
  },
  {
    img: img6,
    title: "新光保全",
  },
]);
const tag = reactive([
  "#力麗觀光",
  "#三立電視台",
  "#力晶",
  "#工研院",
  "#中華電信",
]);
const searchData = reactive([
  {
    title: "DHL Express 台灣",
    text: "在DHL這個最國際化的公司，我們提供的不僅僅是一份工作，我們將員工視為最重要資產，透過Respect & Results 的領導文化，打造員工受尊重與激勵的工作環境，並提供員工全面的照顧與保障。",
    img: img1,
  },
  {
    title: "台灣一風堂股份有限公司",
    text: "勞保,健保,加班費,週休二日,陪產檢及陪產假,育嬰假,生理假,特別休假,產假,產檢假,員工體檢,勞退提撥金,職災保險,年節獎金,年終獎金,三節獎金,禮品,激勵獎金,意外險,員工及眷屬住院慰問金,免費供餐,員工（調職）搬家安家費,房屋（租賃）補助,國內旅遊,員工聚餐,春酒,員工結婚補助,生育補助,員工及眷屬喪葬補助,員工購物優惠,國內、外旅遊補助,需穿著員工制服,員工在職教育訓練,良好升遷制度,除勞基法基本保障外，",
    img: one,
  },
  {
    title: "台灣表面黏著科技股份有限公司",
    text: "勞保,健保,加班費,週休二日,陪產檢及陪產假,育嬰假,生理假,特別休假,產假,產檢假,員工體檢,勞退提撥金,職災保險,年節獎金,年終獎金,三節獎金,禮品,激勵獎金,意外險,員工及眷屬住院慰問金,免費供餐,員工（調職）搬家安家費,房屋（租賃）補助,國內旅遊,員工聚餐,春酒,員工結婚補助,生育補助,員工及眷屬喪葬補助,員工購物優惠,國內、外旅遊補助,需穿著員工制服,員工在職教育訓練,良好升遷制度,除勞基法基本保障外，",
    img: sticky,
  },
  {
    title: "台灣積層工業股份有限公司",
    text: "勞保,健保,加班費,週休二日,陪產檢及陪產假,育嬰假,生理假,特別休假,產假,產檢假,員工體檢,勞退提撥金,職災保險,年節獎金,年終獎金,三節獎金,禮品,激勵獎金,意外險,員工及眷屬住院慰問金,免費供餐,員工（調職）搬家安家費,房屋（租賃）補助,國內旅遊,員工聚餐,春酒,員工結婚補助,生育補助,員工及眷屬喪葬補助,員工購物優惠,國內、外旅遊補助,需穿著員工制服,員工在職教育訓練,良好升遷制度,除勞基法基本保障外，",
    img: Company,
  },
  {
    title: "台灣松下營造股份有限公司",
    text: "中秋禮金、端午禮金各$3,000元 生日禮金$1,000元保障年終獎金或獲利獎金13%~22%定期員工聚餐尾牙或春酒結婚禮金生育津貼健檢補助家庭日聚餐優惠5折定期發放員工用餐優惠券",
    img: panasonic,
  },
  {
    title: "台灣瀧澤科技股份有限公司",
    text: "勞保,健保,加班費,週休二日,陪產檢及陪產假,育嬰假,生理假,特別休假,產假,產檢假,員工體檢,勞退提撥金,職災保險,年節獎金,年終獎金,三節獎金,禮品,激勵獎金,意外險,員工及眷屬住院慰問金,免費供餐,員工（調職）搬家安家費,房屋（租賃）補助,國內旅遊,員工聚餐,春酒,員工結婚補助,生育補助,員工及眷屬喪葬補助,員工購物優惠,國內、外旅遊補助,需穿著員工制服,員工在職教育訓練,良好升遷制度,除勞基法基本保障外，",
    img: takisawa,
  },
  {
    title: "台灣精銳科技股份有限公司",
    text: "沒有快樂的員工就沒有滿意的客戶，精銳科技致力提供員工良好的工作環境與薪酬福利  一. 薪酬制度 ☆ 具市場競爭力與公平的薪酬制度；含底薪津貼、績效獎金等、依員工貢獻度及公司營運成果參與紅利分享，體現員工利潤共享理念。  二. 貼心的員工福利及活動 ☆ 優於勞基法之年休假(自加入第一年即最低享有14天年假) ☆ 優於法律要求水準的團險",
    img: apex,
  },
  {
    title: "台灣奧的斯電梯股份有限公司",
    text: "勞保,健保,加班費,週休二日,陪產檢及陪產假,育嬰假,生理假,特別休假,產假,產檢假,員工體檢,勞退提撥金,職災保險,年節獎金,年終獎金,三節獎金,禮品,激勵獎金,意外險,員工及眷屬住院慰問金,免費供餐,員工（調職）搬家安家費,房屋（租賃）補助,國內旅遊,員工聚餐,春酒,員工結婚補助,生育補助,員工及眷屬喪葬補助,員工購物優惠,國內、外旅遊補助,需穿著員工制服,員工在職教育訓練,良好升遷制度,除勞基法基本保障外，",
    img: otis,
  },
  {
    title: "台灣中小企業銀行/台企銀/台灣企銀",
    text: "子女教育補助,需穿著員工制服,員工團保,育嬰假,分紅入股,意外險,員工在職教育訓練,員工購屋低利貸款,陪產檢及陪產假,健保,勞保,週休二日,年節獎金,員工撫恤,加班費,生理假,員工體檢,◆ 分紅 / 配股",
    img: Company,
  },
]);
const ad = reactive([ad1, ad2]);

const swiperConfig = ref({
  breakpoints: {
    345: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
    1850: {
      slidesPerView: 6,
    },
  },
});

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
</script>

<style lang="scss" scoped>
.back {
  box-shadow: 0px 0px 20px 0px #0000000d;
}
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
