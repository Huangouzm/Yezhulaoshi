(() => {
  const time = document.getElementById("clock-time");
  const date = document.getElementById("clock-date");
  const year = document.getElementById("year");
  const weekdays = ["日", "一", "二", "三", "四", "五", "六"];
  const pad = (value) => String(value).padStart(2, "0");

  function updateClock() {
    const now = new Date();
    time.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
    time.dateTime = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
    date.textContent = `${pad(now.getMonth() + 1)}.${pad(now.getDate())} 周${weekdays[now.getDay()]}`;
    time.title = now.toLocaleString("zh-CN");
    year.textContent = now.getFullYear();
  }

  updateClock();
  setInterval(updateClock, 20000);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) updateClock();
  });

  const copyButton = document.querySelector(".copy-button");
  const copyStatus = document.querySelector(".copy-status");
  let statusTimer;

  if (navigator.clipboard && window.isSecureContext) {
    copyButton.hidden = false;
    copyButton.addEventListener("click", async () => {
      clearTimeout(statusTimer);
      try {
        await navigator.clipboard.writeText("zhengming.huang@seu.edu.cn");
        copyStatus.textContent = "邮箱已复制";
      } catch {
        copyStatus.textContent = "请长按或选中邮箱复制";
      }
      statusTimer = setTimeout(() => { copyStatus.textContent = ""; }, 3500);
    });
  }
})();
