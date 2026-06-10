/**
 * WME-AIAP 萬芳教學部 AI 自動化平台
 * 互動式前端腳本 - 營造溫暖手繪與微小動態互動
 */

document.addEventListener('DOMContentLoaded', () => {
  setupHandDrawnMorphing();
  setupButtonFeedback();
});

/**
 * 手繪線條動態微幅變形效果
 * 當滑鼠移入具有手繪框線的區塊時，動態改變其 border-radius，
 * 模擬手繪線條因為手震或重新繪製產生的細微變化，提升「手繪/教學」的趣味性。
 */
function setupHandDrawnMorphing() {
  const sketchyItems = document.querySelectorAll('.tool-card, .main-header, .hero-image-wrapper, .hero-tip');
  
  sketchyItems.forEach(item => {
    // 監聽滑鼠移入
    item.addEventListener('mouseenter', () => {
      morphBorder(item);
    });
    
    // 監聽滑鼠移動，產生持續的微幅手繪震盪感
    item.addEventListener('mousemove', throttle(() => {
      morphBorder(item);
    }, 150));

    // 監聽滑鼠移出，還原 CSS 原本設定的圓角
    item.addEventListener('mouseleave', () => {
      item.style.borderRadius = '';
    });
  });
}

function morphBorder(element) {
  // 生成隨機的不規則邊角比例 (15px ~ 45px 左右)
  const r1 = Math.floor(Math.random() * 20) + 15;
  const r2 = Math.floor(Math.random() * 25) + 30;
  const r3 = Math.floor(Math.random() * 20) + 15;
  const r4 = Math.floor(Math.random() * 20) + 25;
  
  const r5 = Math.floor(Math.random() * 20) + 25;
  const r6 = Math.floor(Math.random() * 20) + 15;
  const r7 = Math.floor(Math.random() * 25) + 30;
  const r8 = Math.floor(Math.random() * 20) + 15;
  
  element.style.borderRadius = `${r1}px ${r2}px ${r3}px ${r4}px / ${r5}px ${r6}px ${r7}px ${r8}px`;
}

/**
 * 點擊按鈕的縮放回饋效果
 */
function setupButtonFeedback() {
  const buttons = document.querySelectorAll('.card-btn');
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      // 在控制台輸出 friendly log
      console.log(`%c[WME-AIAP] 導向工具網頁: ${button.getAttribute('href')}`, 'color: #e07a5f; font-weight: bold;');
      
      // 可以在此處擴充像是紙飛機飛出的特效，這裡先以按鈕點擊後的實體按壓與流暢外連為主
    });
  });
}

/**
 * 簡易 Throttle 節流函式
 */
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}
