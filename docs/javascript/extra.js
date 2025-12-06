function addScript(src, options = {}) {
  const script = document.createElement('script');
  script.src = src;
  
  if (options.async) script.async = true;
  if (options.defer) script.defer = true;
  if (options.websiteId) script.setAttribute('data-website-id', options.websiteId);
  
  document.head.appendChild(script);
}
addScript('https://umami.netna.cn/xQ2lY4vJ8sH6wZ4wJ0', { async: true, defer: true, websiteId: '4fdf3fb3-5d97-4b10-95e1-ae9d51c995d6' });
addScript('https://umami.moieo.net/E80onPjAXW5H', { async: true, defer: true, websiteId: 'bec526a0-7d42-4eb8-a326-b913cf8d8ee1' });
addScript('https://019a0472-bd9f-7a1c-bf96-b9554cc39454.spst2.com/ustat.js', { async: true });

// window.addEventListener("load", () => {
//   // 创建样式
//   const style = document.createElement("style");
//   style.textContent = `
//                 .slide-popup {
//                     position: fixed;
//                     top: -100px; /* 初始位置在视口上方 */
//                     left: 50%;
//                     transform: translateX(-50%);
//                     background-color: rgba(255, 255, 255, 0.7);
//                     color: #333;
//                     padding: 15px 30px;
//                     border-radius: 0 0 8px 8px;
//                     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
//                     font-size: 16px;
//                     font-family: sans-serif;
//                     z-index: 9999;
//                     transition: top 0.5s ease; /* 顶部位置过渡动画 */
//                 }
//                 .slide-popup.show {
//                     top: 0; /* 显示时滑到顶部 */
//                 }
//             `;
//   document.head.appendChild(style);

//   // 创建弹窗元素
//   const popup = document.createElement("div");
//   popup.className = "slide-popup";
  
//   // 多条欢迎信息
//   const welcomeMessages = [
//     "欢迎访问 (◕‿◕)✨",
//     "你好呀~ ヾ(≧▽≦*)o",
//     "很高兴见到你 (｡◕‿◕｡)",
//     "欢迎来到这里 ♪(´▽｀)",
//     "希望你在这里玩得开心 (＾◡＾)",
//     "感谢你的访问 ╰(*°▽°*)╯",
//     "愿你今天心情愉快 (◠‿◠)",
//     "欢迎探索这个世界 ✧(≖ ◡ ≖✿)",
//     "今天也要加油哦 (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
//     "遇见你真好 (´∀｀)♡",
//     "一起来学习吧 ٩(◕‿◕)۶",
//     "祝你收获满满 (✿◠‿◠)",
//     "新的一天开始啦 ☀️(◡ ‿ ◡)",
//     "保持好心情哦 (◕‿◕)♡",
//     "你是最棒的 ✨(ﾉ◕ヮ◕)ﾉ",
//     "愿知识与你同在 📚(◠‿◠)",
//     "今天想学点什么呢 (｡◕‿◕｡)？",
//     "让我们一起进步吧 💪(◕‿◕)",
//     "好奇心是最好的老师 🔍(◡ ‿ ◡)",
//     "每一天都是新的开始 🌟(◕‿◕)✨"
//   ];
  
//   // 随机选择一条信息
//   const randomMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
//   popup.textContent = randomMessage;
  
//   document.body.appendChild(popup);

//   // 页面加载后显示弹窗（滑入动画）
//   setTimeout(() => {
//     popup.classList.add("show");
//   }, 10);

//   // 3秒后关闭弹窗（向上缩回动画）
//   setTimeout(() => {
//     popup.classList.remove("show");
//     // 动画结束后移除元素
//     popup.addEventListener(
//       "transitionend",
//       () => {
//         popup.remove();
//       },
//       { once: true }
//     );
//   }, 3000);
// });