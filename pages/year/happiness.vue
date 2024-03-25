<template>
  <div class="bg-gradient-to-br from-white to-secondary-100">
    <!-- <canvas id="confetti"></canvas> -->
    <div
      class="container mx-auto pt-14 max-w-screen-w px-4 s:px-6 m:px-8 l:px-0"
    >
      <h1
        class="text-[40px] s:text-5xl flex gap-3 font-bold text-gray-900 mb-5"
      >
        2024 投票天天抽幸福金<span
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
          >參與幸福企業投票，每週一至五天天抽
          <span class="text-primary-500">10名 500元</span> 幸運兒！</span
        >
      </div>
    </div>
    <!-- 會員投票獎勵 -->
    <div class="mt-14 pt-14 pb-16 back bg-white-40%">
      <div
        class="container mx-auto max-w-screen-w m:flex justify-between px-4 s:px-6 m:px-8 l:px-0"
      >
        <div>
          <h1 class="text-3xl font-bold mb-8">會員投票獎勵活動辦法</h1>
          <ul class="list-decimal pl-4 text-gray-600 text-lg">
            <li>
              主辦單位將於 05/01 (三) ~ 08/15 (四)，每週一至五天天抽 10名 500元
              幸運兒。
            </li>
            <li>凡參與投票活動之網友皆具有抽獎資格，但每人限兌領乙次。</li>
            <li>
              中獎名單將公佈於活動網頁，中獎者須主動聯絡負責窗口，1111人力銀行不另行通知。
            </li>
            <li>
              兌領時間為 05/10 (五) ~ 09/06 (五)
              止，逾期未兌領視同放棄恕不接受個人因素補領。
            </li>
            <li>中獎人須依中華民國機會中獎相關規範提供個人資料以利兌領。</li>
            <li>1111人力銀行保有活動修改及最終解釋權。</li>
            <li>有關中獎兌領事宜請洽 (02)8787-1111 #8869 李先生</li>
          </ul>
        </div>
        <div>
          <img src="@/assets/images/Illustration.svg" alt="" />
        </div>
      </div>
    </div>
    <!-- 搜尋 -->
    <div class="container mx-auto pt-20 max-w-screen-w flex justify-center">
      <div class="bg-white pl-6 pr-[6px] py-[6px] rounded-full flex flex-wrap">
        <span class="flex items-center gap-1 text-gray-600"
          >選擇日期 (起)<svg
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
          >選擇日期 (迄)<svg
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
    <!-- 搜尋結果 -->
    <div
      class="container mx-auto pt-20 max-w-screen-w flex flex-col gap-6 px-4 s:px-6 m:px-8 l:px-0"
    >
      <div
        v-for="(item, index) in searchData"
        :key="index"
        class="bg-white p-4 m:py-10 m:px-14 m:flex justify-between rounded-[30px] back items-center"
      >
        <div class="text-[20px] font-bold flex items-center gap-5">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.0547 27.0141C26.5008 24.3141 23.5828 22.5 20.25 22.5H15.75C12.4172 22.5 9.49922 24.3141 7.94531 27.0141C10.4203 29.7703 14.0063 31.5 18 31.5C21.9937 31.5 25.5797 29.7633 28.0547 27.0141ZM0 18C0 13.2261 1.89642 8.64773 5.27208 5.27208C8.64773 1.89642 13.2261 0 18 0C22.7739 0 27.3523 1.89642 30.7279 5.27208C34.1036 8.64773 36 13.2261 36 18C36 22.7739 34.1036 27.3523 30.7279 30.7279C27.3523 34.1036 22.7739 36 18 36C13.2261 36 8.64773 34.1036 5.27208 30.7279C1.89642 27.3523 0 22.7739 0 18ZM18 19.125C19.3427 19.125 20.6303 18.5916 21.5797 17.6422C22.5291 16.6928 23.0625 15.4052 23.0625 14.0625C23.0625 12.7198 22.5291 11.4322 21.5797 10.4828C20.6303 9.53337 19.3427 9 18 9C16.6573 9 15.3697 9.53337 14.4203 10.4828C13.4709 11.4322 12.9375 12.7198 12.9375 14.0625C12.9375 15.4052 13.4709 16.6928 14.4203 17.6422C15.3697 18.5916 16.6573 19.125 18 19.125Z"
              fill="#D9A479"
            />
          </svg>
          {{ item.name }}
        </div>
        <div class="m:flex gap-6 text-lg">
          <p class="text-secondary-500 text-lg">{{ item.phone }}</p>
          <p class="text-gray-600 text-lg">{{ item.area }}</p>
          <p class="text-gray-600 text-lg">09/01/2023</p>
          <p class="text-primary-500 font-bold text-lg">恭喜獲得 500元</p>
        </div>
      </div>
    </div>
    <!-- 領獎說明 -->
    <div
      class="container mx-auto pt-20 max-w-screen-w px-4 s:px-6 m:px-8 l:px-0"
    >
      <h1 class="text-3xl font-bold">領獎說明</h1>
      <ul class="list-decimal text-lg text-gray-600 mt-8 pl-5 pb-28">
        <li>
          主辦單位將於 05/01 (三) ~ 08/15 (四)，每週一至五天天抽 10名 500元
          幸運兒。
        </li>
        <li>凡參與投票活動之網友皆具有抽獎資格，但每人限兌領乙次。</li>
        <li>
          天天抽幸福金活動，兌領時間為 05/10 (五) ~ 09/06 (五)
          止，得獎資訊將以網站得獎名單公告為主，恕不另行通知。逾期未兌領視同放棄，恕不接受個人因素補領，亦不得由他人代領。
        </li>
        <li>
          得獎者領獎連結：<span class="text-primary-500 underline"
            >點我申請</span
          >
        </li>
        <li>
          得獎者領獎須提供：
          姓名、電話、得獎日期…等資訊，以利核對身份；並於附件提供以下審核資料：
          (1) 機會中獎暨勞務報酬單 點我下載 、(2) 身分證正反面、(3)
          個人帳戶資料、(4) 存摺封面。
        </li>
        <li>
          得獎者須於中獎日期公布後 2周內繳交以上申請資料。(例如：06/05中獎者需於
          06/19前交件；06/06中獎者需於 06/20前交件；依此類推)
        </li>
        <li>
          若因申請資料不齊全未通過審核，需於收到缺件通知後
          1周內完成補件。(活動單位申請資料審核時間約 3~7個工作天；補件資料審核約
          3~7個工作天。)
          通過審核後會回傳確認信，若無收到確認信，請主動來信詢問。
        </li>
        <li>
          獎金將依得獎者提交資料的申請月份，隔月月底前陸續給獎(匯款)
          (例如：6/30完成審核，則 7月底發放；07/01完成審核，則
          8月底發放；依此類推)，並應依中華民國政府所得稅規定，申報收入並依法扣繳。
        </li>
        <li>
          凡參加本活動之會員，應同意無償授權其個人履歷之肖像、圖片、文章或影音等資料，活動單位有權在合理範圍內修訂，保留修改標題及內文權限，並同意於
          1111人力銀行及所屬各子網使用，或對外公佈，以昭大信。得獎將不另行通知得獎者，不同意者將視同放棄得獎資格。主辦單位得因本活動的需要，依個人資料保護相關規定，於中華民國境內蒐集、處理、利用其個人資料。如參加者拒絕提供相關個人資料，可能導致對參加者依本活動得享有的各項權益及福利的相關權益有所影響，主辦單位不負相關責任。
        </li>
        <li>
          本活動相關細節，主辦單位得隨時修正之。參加者同意完全依照及遵守本活動的更動決定，絕無異議，本活動如有未盡事宜，悉依中華民國法律或主辦單位相關規定及解釋辦理，且不另行通知。
        </li>
        <li>
          有任何活動問題請來信活動信箱
          <span class="text-primary-500 underline"
            >wadelee@staff.1111.com.tw</span
          >
          詢問。
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  if (process.client) {
    var retina = window.devicePixelRatio;
    // Local WindowAnimationTiming interface
    var rAF = window.requestAnimationFrame;
    var cAF = window.cancelAnimationFrame || window.cancelRequestAnimationFrame;
  }

  // Math shorthands
  const PI = Math.PI;
  const sqrt = Math.sqrt;
  const round = Math.round;
  const random = Math.random;
  const cos = Math.cos;
  const sin = Math.sin;

  const _now =
    Date.now ||
    function () {
      return new Date().getTime();
    };

  // Local WindowAnimationTiming interface polyfill
  (function (w) {
    /**
     * Fallback implementation.
     */
    var prev = _now();
    function fallback(fn) {
      var curr = _now();
      var ms = Math.max(0, 16 - (curr - prev));
      var req = setTimeout(fn, ms);
      prev = curr;
      return req;
    }

    /**
     * Cancel.
     */
    if (process.client) {
      var cancel =
        w.cancelAnimationFrame ||
        w.webkitCancelAnimationFrame ||
        w.clearTimeout;
      rAF =
        w.requestAnimationFrame || w.webkitRequestAnimationFrame || fallback;
    }

    cAF = function (id) {
      cancel.call(w, id);
    };
  })(window);

  document.addEventListener("DOMContentLoaded", function () {
    var speed = 50,
      duration = 1.0 / speed,
      confettiRibbonCount = 11,
      ribbonPaperCount = 30,
      ribbonPaperDist = 8.0,
      ribbonPaperThick = 8.0,
      confettiPaperCount = 95,
      DEG_TO_RAD = PI / 180,
      RAD_TO_DEG = 180 / PI,
      colors = [
        ["#df0049", "#660671"],
        ["#00e857", "#005291"],
        ["#2bebbc", "#05798a"],
        ["#ffd200", "#b06c00"],
      ];

    function Vector2(_x, _y) {
      (this.x = _x), (this.y = _y);
      this.Length = function () {
        return sqrt(this.SqrLength());
      };
      this.SqrLength = function () {
        return this.x * this.x + this.y * this.y;
      };
      this.Add = function (_vec) {
        this.x += _vec.x;
        this.y += _vec.y;
      };
      this.Sub = function (_vec) {
        this.x -= _vec.x;
        this.y -= _vec.y;
      };
      this.Div = function (_f) {
        this.x /= _f;
        this.y /= _f;
      };
      this.Mul = function (_f) {
        this.x *= _f;
        this.y *= _f;
      };
      this.Normalize = function () {
        var sqrLen = this.SqrLength();
        if (sqrLen != 0) {
          var factor = 1.0 / sqrt(sqrLen);
          this.x *= factor;
          this.y *= factor;
        }
      };
      this.Normalized = function () {
        var sqrLen = this.SqrLength();
        if (sqrLen != 0) {
          var factor = 1.0 / sqrt(sqrLen);
          return new Vector2(this.x * factor, this.y * factor);
        }
        return new Vector2(0, 0);
      };
    }
    Vector2.Lerp = function (_vec0, _vec1, _t) {
      return new Vector2(
        (_vec1.x - _vec0.x) * _t + _vec0.x,
        (_vec1.y - _vec0.y) * _t + _vec0.y
      );
    };
    Vector2.Distance = function (_vec0, _vec1) {
      return sqrt(Vector2.SqrDistance(_vec0, _vec1));
    };
    Vector2.SqrDistance = function (_vec0, _vec1) {
      var x = _vec0.x - _vec1.x;
      var y = _vec0.y - _vec1.y;
      return x * x + y * y + z * z;
    };
    Vector2.Scale = function (_vec0, _vec1) {
      return new Vector2(_vec0.x * _vec1.x, _vec0.y * _vec1.y);
    };
    Vector2.Min = function (_vec0, _vec1) {
      return new Vector2(
        Math.min(_vec0.x, _vec1.x),
        Math.min(_vec0.y, _vec1.y)
      );
    };
    Vector2.Max = function (_vec0, _vec1) {
      return new Vector2(
        Math.max(_vec0.x, _vec1.x),
        Math.max(_vec0.y, _vec1.y)
      );
    };
    Vector2.ClampMagnitude = function (_vec0, _len) {
      var vecNorm = _vec0.Normalized;
      return new Vector2(vecNorm.x * _len, vecNorm.y * _len);
    };
    Vector2.Sub = function (_vec0, _vec1) {
      return new Vector2(
        _vec0.x - _vec1.x,
        _vec0.y - _vec1.y,
        _vec0.z - _vec1.z
      );
    };

    function EulerMass(_x, _y, _mass, _drag) {
      this.position = new Vector2(_x, _y);
      this.mass = _mass;
      this.drag = _drag;
      this.force = new Vector2(0, 0);
      this.velocity = new Vector2(0, 0);
      this.AddForce = function (_f) {
        this.force.Add(_f);
      };
      this.Integrate = function (_dt) {
        var acc = this.CurrentForce(this.position);
        acc.Div(this.mass);
        var posDelta = new Vector2(this.velocity.x, this.velocity.y);
        posDelta.Mul(_dt);
        this.position.Add(posDelta);
        acc.Mul(_dt);
        this.velocity.Add(acc);
        this.force = new Vector2(0, 0);
      };
      this.CurrentForce = function (_pos, _vel) {
        var totalForce = new Vector2(this.force.x, this.force.y);
        var speed = this.velocity.Length();
        var dragVel = new Vector2(this.velocity.x, this.velocity.y);
        dragVel.Mul(this.drag * this.mass * speed);
        totalForce.Sub(dragVel);
        return totalForce;
      };
    }

    function ConfettiPaper(_x, _y) {
      this.pos = new Vector2(_x, _y);
      this.rotationSpeed = random() * 600 + 800;
      this.angle = DEG_TO_RAD * random() * 360;
      this.rotation = DEG_TO_RAD * random() * 360;
      this.cosA = 1.0;
      this.size = 5.0;
      this.oscillationSpeed = random() * 1.5 + 0.5;
      this.xSpeed = 40.0;
      this.ySpeed = random() * 60 + 50.0;
      this.corners = new Array();
      this.time = random();
      var ci = round(random() * (colors.length - 1));
      this.frontColor = colors[ci][0];
      this.backColor = colors[ci][1];
      for (var i = 0; i < 4; i++) {
        var dx = cos(this.angle + DEG_TO_RAD * (i * 90 + 45));
        var dy = sin(this.angle + DEG_TO_RAD * (i * 90 + 45));
        this.corners[i] = new Vector2(dx, dy);
      }
      this.Update = function (_dt) {
        this.time += _dt;
        this.rotation += this.rotationSpeed * _dt;
        this.cosA = cos(DEG_TO_RAD * this.rotation);
        this.pos.x +=
          cos(this.time * this.oscillationSpeed) * this.xSpeed * _dt;
        this.pos.y += this.ySpeed * _dt;
        if (this.pos.y > ConfettiPaper.bounds.y) {
          this.pos.x = random() * ConfettiPaper.bounds.x;
          this.pos.y = 0;
        }
      };
      this.Draw = function (_g) {
        if (this.cosA > 0) {
          _g.fillStyle = this.frontColor;
        } else {
          _g.fillStyle = this.backColor;
        }
        _g.beginPath();
        _g.moveTo(
          (this.pos.x + this.corners[0].x * this.size) * retina,
          (this.pos.y + this.corners[0].y * this.size * this.cosA) * retina
        );
        for (var i = 1; i < 4; i++) {
          _g.lineTo(
            (this.pos.x + this.corners[i].x * this.size) * retina,
            (this.pos.y + this.corners[i].y * this.size * this.cosA) * retina
          );
        }
        _g.closePath();
        _g.fill();
      };
    }
    ConfettiPaper.bounds = new Vector2(0, 0);

    function ConfettiRibbon(
      _x,
      _y,
      _count,
      _dist,
      _thickness,
      _angle,
      _mass,
      _drag
    ) {
      this.particleDist = _dist;
      this.particleCount = _count;
      this.particleMass = _mass;
      this.particleDrag = _drag;
      this.particles = new Array();
      var ci = round(random() * (colors.length - 1));
      this.frontColor = colors[ci][0];
      this.backColor = colors[ci][1];
      this.xOff = cos(DEG_TO_RAD * _angle) * _thickness;
      this.yOff = sin(DEG_TO_RAD * _angle) * _thickness;
      this.position = new Vector2(_x, _y);
      this.prevPosition = new Vector2(_x, _y);
      this.velocityInherit = random() * 2 + 4;
      this.time = random() * 100;
      this.oscillationSpeed = random() * 2 + 2;
      this.oscillationDistance = random() * 40 + 40;
      this.ySpeed = random() * 40 + 80;
      for (var i = 0; i < this.particleCount; i++) {
        this.particles[i] = new EulerMass(
          _x,
          _y - i * this.particleDist,
          this.particleMass,
          this.particleDrag
        );
      }
      this.Update = function (_dt) {
        var i = 0;
        this.time += _dt * this.oscillationSpeed;
        this.position.y += this.ySpeed * _dt;
        this.position.x += cos(this.time) * this.oscillationDistance * _dt;
        this.particles[0].position = this.position;
        var dX = this.prevPosition.x - this.position.x;
        var dY = this.prevPosition.y - this.position.y;
        var delta = sqrt(dX * dX + dY * dY);
        this.prevPosition = new Vector2(this.position.x, this.position.y);
        for (i = 1; i < this.particleCount; i++) {
          var dirP = Vector2.Sub(
            this.particles[i - 1].position,
            this.particles[i].position
          );
          dirP.Normalize();
          dirP.Mul((delta / _dt) * this.velocityInherit);
          this.particles[i].AddForce(dirP);
        }
        for (i = 1; i < this.particleCount; i++) {
          this.particles[i].Integrate(_dt);
        }
        for (i = 1; i < this.particleCount; i++) {
          var rp2 = new Vector2(
            this.particles[i].position.x,
            this.particles[i].position.y
          );
          rp2.Sub(this.particles[i - 1].position);
          rp2.Normalize();
          rp2.Mul(this.particleDist);
          rp2.Add(this.particles[i - 1].position);
          this.particles[i].position = rp2;
        }
        if (
          this.position.y >
          ConfettiRibbon.bounds.y + this.particleDist * this.particleCount
        ) {
          this.Reset();
        }
      };
      this.Reset = function () {
        this.position.y = -random() * ConfettiRibbon.bounds.y;
        this.position.x = random() * ConfettiRibbon.bounds.x;
        this.prevPosition = new Vector2(this.position.x, this.position.y);
        this.velocityInherit = random() * 2 + 4;
        this.time = random() * 100;
        this.oscillationSpeed = random() * 2.0 + 1.5;
        this.oscillationDistance = random() * 40 + 40;
        this.ySpeed = random() * 40 + 80;
        var ci = round(random() * (colors.length - 1));
        this.frontColor = colors[ci][0];
        this.backColor = colors[ci][1];
        this.particles = new Array();
        for (var i = 0; i < this.particleCount; i++) {
          this.particles[i] = new EulerMass(
            this.position.x,
            this.position.y - i * this.particleDist,
            this.particleMass,
            this.particleDrag
          );
        }
      };
      this.Draw = function (_g) {
        for (var i = 0; i < this.particleCount - 1; i++) {
          var p0 = new Vector2(
            this.particles[i].position.x + this.xOff,
            this.particles[i].position.y + this.yOff
          );
          var p1 = new Vector2(
            this.particles[i + 1].position.x + this.xOff,
            this.particles[i + 1].position.y + this.yOff
          );
          if (
            this.Side(
              this.particles[i].position.x,
              this.particles[i].position.y,
              this.particles[i + 1].position.x,
              this.particles[i + 1].position.y,
              p1.x,
              p1.y
            ) < 0
          ) {
            _g.fillStyle = this.frontColor;
            _g.strokeStyle = this.frontColor;
          } else {
            _g.fillStyle = this.backColor;
            _g.strokeStyle = this.backColor;
          }
          if (i == 0) {
            _g.beginPath();
            _g.moveTo(
              this.particles[i].position.x * retina,
              this.particles[i].position.y * retina
            );
            _g.lineTo(
              this.particles[i + 1].position.x * retina,
              this.particles[i + 1].position.y * retina
            );
            _g.lineTo(
              (this.particles[i + 1].position.x + p1.x) * 0.5 * retina,
              (this.particles[i + 1].position.y + p1.y) * 0.5 * retina
            );
            _g.closePath();
            _g.stroke();
            _g.fill();
            _g.beginPath();
            _g.moveTo(p1.x * retina, p1.y * retina);
            _g.lineTo(p0.x * retina, p0.y * retina);
            _g.lineTo(
              (this.particles[i + 1].position.x + p1.x) * 0.5 * retina,
              (this.particles[i + 1].position.y + p1.y) * 0.5 * retina
            );
            _g.closePath();
            _g.stroke();
            _g.fill();
          } else if (i == this.particleCount - 2) {
            _g.beginPath();
            _g.moveTo(
              this.particles[i].position.x * retina,
              this.particles[i].position.y * retina
            );
            _g.lineTo(
              this.particles[i + 1].position.x * retina,
              this.particles[i + 1].position.y * retina
            );
            _g.lineTo(
              (this.particles[i].position.x + p0.x) * 0.5 * retina,
              (this.particles[i].position.y + p0.y) * 0.5 * retina
            );
            _g.closePath();
            _g.stroke();
            _g.fill();
            _g.beginPath();
            _g.moveTo(p1.x * retina, p1.y * retina);
            _g.lineTo(p0.x * retina, p0.y * retina);
            _g.lineTo(
              (this.particles[i].position.x + p0.x) * 0.5 * retina,
              (this.particles[i].position.y + p0.y) * 0.5 * retina
            );
            _g.closePath();
            _g.stroke();
            _g.fill();
          } else {
            _g.beginPath();
            _g.moveTo(
              this.particles[i].position.x * retina,
              this.particles[i].position.y * retina
            );
            _g.lineTo(
              this.particles[i + 1].position.x * retina,
              this.particles[i + 1].position.y * retina
            );
            _g.lineTo(p1.x * retina, p1.y * retina);
            _g.lineTo(p0.x * retina, p0.y * retina);
            _g.closePath();
            _g.stroke();
            _g.fill();
          }
        }
      };
      this.Side = function (x1, y1, x2, y2, x3, y3) {
        return (x1 - x2) * (y3 - y2) - (y1 - y2) * (x3 - x2);
      };
    }
    ConfettiRibbon.bounds = new Vector2(0, 0);
    confetti = {};
    confetti.Context = function (id) {
      var i = 0;
      var canvas = document.getElementById(id);
      var canvasParent = canvas.parentNode;
      var canvasWidth = canvasParent.offsetWidth;
      var canvasHeight = canvasParent.offsetHeight;
      canvas.width = canvasWidth * retina;
      canvas.height = canvasHeight * retina;
      var context = canvas.getContext("2d");
      var interval = null;
      var confettiRibbons = new Array();
      ConfettiRibbon.bounds = new Vector2(canvasWidth, canvasHeight);
      for (i = 0; i < confettiRibbonCount; i++) {
        confettiRibbons[i] = new ConfettiRibbon(
          random() * canvasWidth,
          -random() * canvasHeight * 2,
          ribbonPaperCount,
          ribbonPaperDist,
          ribbonPaperThick,
          45,
          1,
          0.05
        );
      }
      var confettiPapers = new Array();
      ConfettiPaper.bounds = new Vector2(canvasWidth, canvasHeight);
      for (i = 0; i < confettiPaperCount; i++) {
        confettiPapers[i] = new ConfettiPaper(
          random() * canvasWidth,
          random() * canvasHeight
        );
      }
      this.resize = function () {
        canvasWidth = canvasParent.offsetWidth;
        canvasHeight = canvasParent.offsetHeight;
        canvas.width = canvasWidth * retina;
        canvas.height = canvasHeight * retina;
        ConfettiPaper.bounds = new Vector2(canvasWidth, canvasHeight);
        ConfettiRibbon.bounds = new Vector2(canvasWidth, canvasHeight);
      };
      this.start = function () {
        this.stop();
        var context = this;
        this.update();
      };
      this.stop = function () {
        cAF(this.interval);
      };
      this.update = function () {
        var i = 0;
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (i = 0; i < confettiPaperCount; i++) {
          confettiPapers[i].Update(duration);
          confettiPapers[i].Draw(context);
        }
        for (i = 0; i < confettiRibbonCount; i++) {
          confettiRibbons[i].Update(duration);
          confettiRibbons[i].Draw(context);
        }
        this.interval = rAF(function () {
          confetti.update();
        });
      };
    };
    var confetti = new confetti.Context("confetti");
    console.log(confetti);
    confetti.start();
    window.addEventListener("resize", function (event) {
      console.log(213);
      confetti.resize();
    });
  });
});
const searchData = reactive([
  { name: "陳Ｏ修", area: "台北市", phone: "0928-***-216" },
  { name: "張Ｏ玉", area: "台北市", phone: "0922-***-406" },
  { name: "楊Ｏ彥", area: "基隆市", phone: "0987-***-446" },
  { name: "張Ｏ德", area: "屏東縣", phone: "0979-***-156" },
  { name: "姜Ｏ瑜", area: "新竹縣", phone: "0928-***-406" },
  { name: "陳Ｏ修", area: "高雄市", phone: "0912-***-226" },
]);
</script>

<style lang="scss" scoped>
.back {
  box-shadow: 0px 0px 20px 0px #0000000d;
}
#confetti {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
</style>
