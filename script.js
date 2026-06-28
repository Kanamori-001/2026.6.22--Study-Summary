
const pageTopBtn = document.getElementById("page-top");
//対象はページトップのボタン

pageTopBtn.setAttribute("class",window.scrollY>50 ?"show" :"hide");
//ページ表示時の動作を指定

window.addEventListener("scroll", () => {
  pageTopBtn.setAttribute("class",window.scrollY>50 ?"show" :"hide");
})
//スクロールした際のボタンの挙動を設定。if文を"？"と"："で省略

pageTopBtn.addEventListener("click",()=>{
  window.scrollTo({
    top:0, 
    behavior:"smooth"});
  });
//ボタンをクリックした際の挙動を設定。"smooth"で挙動を滑らかに