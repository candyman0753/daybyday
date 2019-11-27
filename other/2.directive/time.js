Vue.directive("time", {
  bind(el, binding) {
    el.innerHTML = Time.getFormatTime(binding.value);
    el._updateTimer = setInterval(() => {
      el.innerHTML = Time.getFormatTime(binding.value);
    }, 6000);
  },
  unbind(el) {
    clearInterval(el._updateTimer);
    delete el._updateTimer;
  }
});
Vue.directive("birthday", {
  bind(el, binding) {
    el.innerHTML = Time.getFormatBirth(binding.value, binding.modifiers.more);
  }
});
const Time = {
  // 当前时间戳
  getUnix() {
    const date = new Date();
    return date.getTime();
  },
  // 当天时间戳
  getDayUnix() {
    const date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
  },
  // yyyy-mm-dd
  getDateUnix(time) {
    const date = new Date(time);
    let year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate();
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    return `${year}-${month}-${day}`;
  },
  getFormatTime(time) {
    let now = this.getUnix(),
      today = this.getDayUnix(),
      tip = "";
    const timer = (now - time) / 1000;
    const minutes = Math.floor(timer / 60),
      hours = Math.floor(timer / 3600),
      day = Math.floor(timer / 3600 / 24);

    if (timer <= 0 || minutes <= 0) {
      tip = "刚刚";
    } else if (minutes < 60) {
      tip = `${minutes}分钟前`;
    } else if (hours >= 0 && time - today >= 0) {
      tip = `${hours}小时前`;
    } else if (day <= 31) {
      tip = `${day}天前`;
    } else {
      tip = this.getDateUnix(time);
    }
    return tip;
  },
  getFormatBirth(time, more = false) {
    const now = this.getUnix(),
      brithDay = new Date(time).getTime();
    let timer = now - brithDay,
      totalday = Math.floor(timer / (1000 * 60 * 60 * 24)),
      year = Math.floor(totalday / 365),
      month = Math.floor(Math.abs(totalday / 31 - year * 12)),
      day = Math.floor(totalday - year * 365 - month * 31);

    if (!more) return `已出生${totalday}天`;

    if (day >= 30) {
      month++;
      day = 0;
    } else if (month === 12) {
      month = 0;
      year++;
    }
    return `已出生${year}年${month}个月${day}天`;
  }
};
