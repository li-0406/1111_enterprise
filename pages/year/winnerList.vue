<template>
  <div class="bg-gradient-to-br from-white to-secondary-100">
    <div
      class="container mx-auto pt-14 max-w-screen-w px-4 s:px-6 m:px-8 l:px-0"
    >
      <h1
        class="text-[40px] s:text-5xl flex gap-3 font-bold text-gray-900 mb-5"
      >
        歷屆得獎名單<span
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
          >2023幸褔企業票選逾3200家廠商參與，經由初選、選網路票選、秘密客評比，最終幸福企業活動小組綜合各項評比，取前15~20%頒贈金獎
          (依不同類別而有所差異，因各類別之網路票選得票占比有所落差)。1111
          人力銀行日後依然會持續監督並善盡社會責任，將員工建議提供給予公司，轉換為幸福企業之力量。</span
        >
      </div>
      <!-- 搜尋 -->
      <div class="pt-16 pb-20 flex justify-center">
        <div
          class="bg-white pl-6 pr-[6px] py-[6px] rounded-full flex flex-wrap"
        >
          <span class="flex items-center gap-1 text-gray-600"
            >2023<svg
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
            >金獎<svg
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
      <!-- line -->
      <div class="flex justify-between pb-5 border-b">
        <p class="text-gray-600">共 10 筆結果，依筆劃排序</p>
        <p class="text-primary-500 flex items-center gap-2">
          得獎名單下載<svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 14C2.01562 14 0 11.9844 0 9.5C0 7.5375 1.25625 5.86875 3.00625 5.25313C3.00312 5.16875 3 5.08437 3 5C3 2.2375 5.2375 0 8 0C9.85312 0 11.4688 1.00625 12.3344 2.50625C12.8094 2.1875 13.3844 2 14 2C15.6562 2 17 3.34375 17 5C17 5.38125 16.9281 5.74375 16.8 6.08125C18.625 6.45 20 8.06563 20 10C20 12.2094 18.2094 14 16 14H4.5ZM6.96875 8.78125L9.46875 11.2812C9.7625 11.575 10.2375 11.575 10.5281 11.2812L13.0281 8.78125C13.3219 8.4875 13.3219 8.0125 13.0281 7.72188C12.7344 7.43125 12.2594 7.42813 11.9688 7.72188L10.75 8.94063V4.75C10.75 4.33437 10.4156 4 10 4C9.58438 4 9.25 4.33437 9.25 4.75V8.94063L8.03125 7.72188C7.7375 7.42813 7.2625 7.42813 6.97188 7.72188C6.68125 8.01562 6.67813 8.49063 6.97188 8.78125H6.96875Z"
              fill="#E2605E"
            />
          </svg>
        </p>
      </div>
      <!-- 結果 -->
      <div class="flex flex-col gap-6 l:px-0 mt-12 pb-32">
        <div
          v-for="item in searchData"
          :key="item.name"
          class="bg-white p-4 m:py-6 m:px-14 m:flex justify-between rounded-[30px] back items-center"
        >
          <div class="flex items-center gap-5">
            <img
              :src="item.img"
              alt=""
              class="w-20 h-20 rounded-[20px] border object-contain"
            />
            <h1 class="text-lg font-bold">{{ item.name }}</h1>
          </div>

          <div class="flex gap-6 items-center">
            <p class="text-secondary-500 text-lg m:w-[200px]">
              {{ item.type }}
            </p>
            <p class="text-gray-600 text-lg m:w-[200px]">2023年</p>
            <p class="flex gap-3 items-center text-gray-600 text-lg">
              <img src="@/assets/images/幸福企業徽章.svg" alt="" /> 金獎
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const searchData = reactive([
  {
    name: "21世紀不動產",
    type: "營造建築業",
    img: "https://s3-alpha-sig.figma.com/img/8699/93af/b75cc2af3fe106888f98898f76327a02?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PDcHFdSVeCDIAk8OR6AVDP5am-FNVSAbAiXYAIe8RV421e5l8gYbL0YuaiXUOUHm-AbZFVrWRUrouKWJzV3zG3kryXHth7BfcYuX5deSxiHJpVtBMMrBLUuuAJQF2bkNhz5ID~tLpHg3epZTKHC~e-HFi1DI2aJdgFi8r9WCaHy7YSGwJq3etn2CvINk86cgVvGTEy7jYRfpeZFZ4OvDlYtpT48KYxPtZS1PHJW8FqufzZQyOIGANWaHzltJtIaQt28axw86i41EqDBALvJjf3s6KdPjb9xdaOpnstUtC2Y~wggZuXNqwpcB0cX8XPsYVXjycdQKanVGJP2syy8new__",
  },
  {
    name: "台北富邦商業銀行股份有限公司",
    type: "金融管顧",
    img: "https://s3-alpha-sig.figma.com/img/1de6/dcb2/ceeeabe6e9d73486da151778004adc88?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XOmWnS0QK1usg6ta~hq0lvxmVFiAc48yw~DnLEMAWAe1V5bNNB8oWME5St4T-q8AJHfWaoO4DDOafTOi~GlWpUTyXdIsdHpU3sJMvKYuT4U-KfLaAgVRXcCfd0mfexhbtiDhKG3JLtEjpZIf2BupeU8JCFbdo3w2GdeYFzLbIRXXUFmb~PzBZCF~IaYmYGpVUiQQHhFvFPtkimNC9itJMZ6enVGZjpvxuef4lnrvWHeVMAO-Kg-~xyzOehAJ6Zb0DHcpkYSlPRPz2XzGdYrAduCrzZFvAUjA9iUAzQYZ-6fN~N16aU4o3xDHvNt1CbPa5HbrVWwn9JviccmITjyb7g__",
  },
  {
    name: "日月光半導體製造股份有限公司",
    type: "科技/能源研發",
    img: "https://s3-alpha-sig.figma.com/img/50b5/ea84/991a2430aef588637f4e4af4fd481d64?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aXyot-XOmlZ3kFzgpzZTcID3gsyQTmXQWVhTSpC2RPwiinboa6C4AEhJGGybmVHsRak6mYp4lLhcHPWWugAfhDXf1a4xLPwFb1nd6B~lOhMFetAwajJgTLsjB6YmLi~EHPYJU99~v5z66wit4Qgle2Dv8gy5ryW4EwF7A~5LwZ~4oNHuJEZ0T8YRMLeXC90ucEkczQ1EaYzLOqvqtckZzA9dAc9qT5m5XW-i2t7n63b1URyUKJipGhxHef2yGEeINuT42LoO3OB4UGvNNfKut09E~rAOIZ5CC2bp5sOnxiWOSue50uFURSLHgnWOmJH~NB9dj5lxHU9kzb45fexJXg__",
  },
  {
    name: "台灣高速鐵路股份有限公司(台灣高鐵)",
    type: "貿易流通業",
    img: "https://s3-alpha-sig.figma.com/img/4e68/8cb2/9de7eae6086b7cc75c2ae0173fc8114c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q8Ncu3UsH9Rsi7OGgeLFUoPyAFPcTb2WBOuBEWOZJLNRLjs7RI3yjQPnGl8Fv4kQD4-Lw-DqrYpKoARHSKItDutySn9hzYf5WNrNb5AN7o8Q~vb3uwOSvOpamfSCWG3vN9Pcl47O1VHFOt~u0hHWEGmBWa7s4zDv2hNL5bEA5Cj2cqt4QfPvjRuq-Df0nYhAyJzfJkdAG5F8M7cESRUNWYIeCppzcfbWsRc47lnnMlM5yTF~D3ze4iHu7mA1VFG59SKINKOsMjVp6I2VVJxfifyS4ooXWsYkdnWD7jH41gKJZE9A3NU8l61-GNN0JVKxJRoIzCmwfcurRyUYb6Dg3Q__",
  },
  {
    name: "中麟營造股份有限公司",
    type: "營造建築業",
    img: "https://s3-alpha-sig.figma.com/img/5b29/c22d/492a2d579388bbf3402e761455b4ab0a?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D0Mmv34aDtfQTuTY8HmbwliMmhtGGqmgYNa5qkULaOaJR3qLuClGBjID~9v3bwWI~2sJStYUDHoPbHFuT-Pb5OptgJerUWo18vqjmmIuplvVGbjusMmHIaeU9fLXBOiIcdHJHXpnljvtCmSSq0WDIepuP~OUhQmxxLka2nw-gXSPkD6v2PyLKcApwI-px~uMIaFx~F2tfiMsuVe35JaU5BK71~qBl1ljlWnaImNy5UvEO4lsdQDjDQtfxcQJo2vFbA~naibTh9qgaJSCpW3yff84Wyx8dPCwIwx7jZTKArtQ7PZDSOb2tKhHsc1LWROgsBO67rjM6eO6XW~hNcy4XA__",
  },
  {
    name: "大樹醫藥股份有限公司(大樹連鎖藥局)",
    type: "大傳教育社福業",
    img: "https://s3-alpha-sig.figma.com/img/d3f1/bc0c/1f81888977b8afcbc30987f8d79e59f9?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QU5KK2mif6qKI9c2niniJAYzzMM9j2PXkdh5AoRZBhWHonIuavoYMugoBf9EynoGRgsE4N8QNTjEe6-aY~A9kXuUdOOwKwmA5vnMeABjwr1LT10qALMI2gvDMDA3cPKJ0A9aj7AO58QRsUch7L1qn-Mf1gxDVIBLe2qDRflYEBnt9ehrsK828mmClOw5sBaVT0INjOtbiXHJRowVESnzUGsVhgKsqGFgw9pzX5hp2UO3lJTJcNB-7qIuXp-1SQDLA6PpIT6Ls6SzxWTwk1LBu2VIittIHON-p3v7SxSK32GAUxrEr6~RfM2arWoyETuKu0kPfcmjKfH-rv7SUVwJ3g__",
  },
  {
    name: "台灣設計研究院 TDRI",
    type: "營造建築業",
    img: "https://s3-alpha-sig.figma.com/img/662a/5569/989254e4413fd6364b84e0a50d97a9ea?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XsBX32yOwcyZIfSVZkBZKVwVSSJoT9NwndJ4i-eDm3nkJQpsiYRTw~PwQ2pfkXtcjdl~~eHbjtI2nEXwZBdpc9c7vGqOKp5q4XVyZTS8P6UQI3g7V0Krhq~cG2mrzCQ5uB7mHr3cpS-gx3rEygSZGb6AvYqnW7isezwzMaiG9AdWztZb6r-bGyZwSaDaQR5fAoDLY9FrG-QyXfYQydFwdv4MAA7o2ny5FvARyRyyRqakL70KtlmeKoc6uIe-VMVqfUJCozpOO0if7oSHFn9oOuH93-GSG1nwJbmq8E2ZPZwCEJ2ofX9T6cbw4EIW8UFnM1INnJiokhQIyW3lm9nrQQ__",
  },
  {
    name: "台北萬豪酒店",
    type: "飯店旅宿業",
    img: "https://s3-alpha-sig.figma.com/img/8255/5d4d/1641c9b7e89a38678cab7c90d497b7ab?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mpsoD2qd3TB2gbDeifOeRsehelm1xcUb8FxnbcquN1r64QHcF-dCCD9GKucd4wMWWC8MCfhOqZzpP~yn4ZgZ02yBxmQ3kSt5LZs9QJtyjhXPGm-L37Av6nSAVPKEaKfEW0~NeUn09v7qOLRV1h-8UoeojCnhCVnzkMpRtM904PLZ9Zv27rwrqfCkDpeWTSmghEr4NBTHVAzNWGF2dzukAwwpyqdCGEXNxTF~jn7DAvZz~P49ZU3XiAMMcdb1UiWt-uz8O~A4dGkOLp502VczwPH7IsjBkoK4qLsR035VqVoovnP500UfjC8GZr5Dy-ACm8HNo9Xj~nRUinkDaDaKWg__",
  },
  {
    name: "王品集團",
    type: "餐飲服務業",
    img: "https://s3-alpha-sig.figma.com/img/b1b3/7be8/d9fb169750425a702fb0dbd2ae63047d?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q02-XT8UGgMr7qw~kfwE8zTCAhB-JVnM5Dwf59Ik4ThB-4Y9Ey4AdfDG-UzHbDAGaktgoZUr1ksVFbAnOYFN~GKoofk72A5dRLBmwk4jBkk8DNb07fjHDCzSZ76e4Wt45muq3i-voermnOEFJ1thbW8THSaC5A2kUEqycOZEqEXJJTFHTm~lUlxoW7znsdCrii~Hi5ydd8WCpKSAfFLw-VroRNXsmw4D2ThnQQIAILhb3Wy82IkbkXFX1jmqhSRh6JEnVzVC9ktnIdQMIfDo~pk4w7IspJWPqMjvMe-W9QzPBJr48NiLt-lzhrlD2RDLciLFXbGJXypQiTHR9tuPjA__",
  },
  {
    name: "東南旅遊",
    type: "休閒娛樂服務業",
    img: "https://s3-alpha-sig.figma.com/img/246b/4ade/b4a666242ab49262e2ca8fec519385ef?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JMwXGn5Zg~1O2GIJn-GAr52uv5lsbvcJEL5I3vVnv9bIEVT1DzOZrgRC64Nuf51EGfJNuPR5T878pBsjk18vnyswOA3GihUg1acfzBwQNe-dN6bIRCW1XchvA6sVY4HngcGar-MbaVUNx7yccpjfuAM9dfVD8tInffftdlj9JmxRCK3pB0aXBU1~78CrKRhze7FBd6hOoRQ80Iqf7IY4HNp9tNi-Hbv8h03orJYFyFCiw9Yzk7yo6SmXf6dkI92Z2piTdQcxet394kHe0TAftf58dubUGdhLH0Cez8O4UdC8-Zr6Ie2A2cdjsXkOQR5BTZLJgxYfYWgbPqEwm48wjA__",
  },
]);
</script>

<style lang="scss" scoped>
.back {
  box-shadow: 0px 0px 20px 0px #0000000d;
}
</style>
