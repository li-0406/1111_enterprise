<template>
  <div class="bg-gradient-to-br from-white to-secondary-100">
    <div class="container mx-auto pt-14 max-w-screen-w px-4 l:px-0">
      <h1
        class="text-[40px] s:text-5xl flex gap-3 font-bold text-gray-900 mb-5"
      >
        媒體露出<span
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
      <div>
        <span class="text-xl text-gray-600"
          >「2023幸福企業頒獎典禮」17日於台北寒舍艾美酒店盛大舉行。<br />
          今年票選活動吸引近3,200家企業共襄盛 舉，438家企業獲金獎肯定。</span
        >
      </div>
      <!-- 影片 -->
      <iframe
        height="700"
        src="https://www.youtube.com/embed/soZZpV09lkk?si=dEeNlA4M4wK3LJAQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        class="w-full rounded-3xl mt-14 mb-20 h-[182px] s:h-[382px] m:h-[509px] l:h-[700px]"
      ></iframe>
      <!-- 媒體見證 -->
      <div class="border-b flex justify-between items-center">
        <div class="border-b-4 border-black">
          <h1 class="text-3xl font-bold">媒體見證</h1>
        </div>

        <span class="text-gray-500 flex items-center gap-2"
          >看更多<svg
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
      <div class="grid grid-cols-1 m:grid-cols-2 gap-6 mt-12">
        <div v-for="item in witness" :key="item.title" class="grid grid-cols-3">
          <div class="col-span-2">
            <p class="text-secondary-500 text-sm">{{ item.type }}</p>
            <h1 class="text-lg font-bold">{{ item.title }}</h1>
            <p class="text-gray-600 line-clamp-2">{{ item.text }}</p>
          </div>
          <img
            :src="item.img"
            alt=""
            class="h-[79px] s:h-[132px] w-[132px] s:w-[220px] object-cover rounded-xl s:rounded-3xl mx-auto my-auto"
          />
        </div>
      </div>
      <!-- 社群媒體 -->
      <div class="border-b flex justify-between items-center pt-20">
        <div class="border-b-4 border-black">
          <h1 class="text-3xl font-bold">社群媒體</h1>
        </div>

        <span class="text-gray-500 flex items-center gap-2"
          >看更多<svg
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

      <div
        class="grid grid-cols-1 s:grid-cols-2 m:grid-cols-3 l:grid-cols-4 pt-12 pb-32 gap-6"
      >
        <div
          v-for="item in faceBookSrc"
          :key="item"
          class="rounded-3xl bg-white h-[428px] p-5"
        >
          <iframe
            class="w-full h-full"
            name="f1ca0e7fc8d50be5b"
            width="auto"
            data-testid="fb:post Facebook Social Plugin"
            title="fb:post Facebook Social Plugin"
            frameborder="0"
            allowtransparency="true"
            allowfullscreen=""
            scrolling="no"
            allow="encrypted-media"
            :src="item"
            style="border: none; visibility: visible"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const witness = reactive([
  {
    type: "雅虎奇摩",
    title: "新世代最嚮往！長庚、新光、慈濟等7醫院獲「幸福企業」榮耀",
    text: "1111人力銀行「2023幸福企業」日前舉辦頒獎典禮，包括新光醫院、長庚醫院、花蓮慈醫等七家院所獲得金獎殊榮，成為新世代最嚮往企業之一。",
    img: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjkvTTlObW9R",
  },
  {
    type: "工商時報",
    title: "2023幸福企業獎 亞泥從3千家脫穎而出 奪金獎",
    text: "全方位打造幸福職場不遺餘力，亞泥獲1111人力銀行頒發2023幸福企業金獎，亞泥表示，未來會持續努力打造積極、靈活、友善的職場環境，與所有同仁攜手，擁抱挑戰，迎接機遇，共同創造更美好的明天。",
    img: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjkvOEwxdENk",
  },
  {
    type: "經濟日報",
    title: "肉多多再奪幸福企業餐飲金獎 提撥預算落實ESG",
    text: "1111人力銀行舉辦的「2023幸福企業票選活動，逾3200家廠商參與，經由初選、選網路票選、秘密客評比，最後產出名單。",
    img: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjkvQ1JmYVAx",
  },
  {
    type: "工商時報",
    title: "不只豬排吃起來幸福 吉豚屋更首獲2023幸福企業金獎殊榮！",
    text: "日本地區最大平價豬排連鎖店〈吉豚屋〉由台隆集團於2015年引進台灣，除了致力於讓大家品嚐到最完美品質的炸豬排餐點，企業運營也以打造「幸福企業」為目標。",
    img: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAyMjkvc1BZN0dh",
  },
  {
    type: "中時新聞網",
    title: "「永」夠幸福！永慶房屋獲1111人力銀行幸福企業4連霸",
    text: "房仲第一品牌永慶房屋獲獎好消息不斷，繼今年7月贏得HR Asia「亞洲最佳企業雇主獎」六連霸殊榮後，11/17再獲得由1111人力銀行舉辦的「2023幸福企業」金獎肯定，今年已是永慶房屋第四度獲獎，幸福職場倍獲肯定！",
    img: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAzMDQvRmdGanBQ",
  },
  {
    type: "雅虎奇摩",
    title: "打造幸福職場 桃園機場榮獲2023年幸福企業金獎",
    text: "由知名人力銀行所舉辦的「2023年幸福企業票選活動」，於11月17日舉行頒獎典禮，機場公司受到網友肯定，第三度獲頒「幸福企業金獎」，由副總經理李俊德代表受獎。",
    img: "https://happiness-cms.1111.com.tw/images/0/0/MjAyNDAzMDQvUjZHcnQz",
  },
]);

const faceBookSrc = reactive([
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%2F%3Ffbid%3D728894399281746%26set%3Dpcb.728801145957738%26locale%3Dzh_TW&amp;show_text=true&amp;width=auto",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%2F%3Ffbid%3D730545639112055%26set%3Da.555315956635025%26locale%3Dzh_TW&amp;show_text=true&amp;width=auto",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%2F%3Ffbid%3D801920621740691%26set%3Dpcb.801921251740628%26locale%3Dzh_TW&amp;show_text=true&amp;width=auto",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%2F%3Ffbid%3D771972311611800%26set%3Dpcb.772021268273571%26locale%3Dzh_TW&amp;show_text=true&amp;width=auto",
]);
</script>
