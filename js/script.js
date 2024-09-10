window.addEventListener("load", () => {
 const menuItems = document.querySelectorAll(".menu-item");
 //  console.log(menuItems);
 //  console.log(menuItems[0]);
 const contentItems = document.querySelectorAll(".content-item");
 //  console.log(contentItems);

 // 초기 설정: 첫 번째 메뉴 항목과 내용 활성화
 menuItems[0].classList.add("active");
 contentItems[0].classList.add("active");

 menuItems.forEach((item) => {
  item.addEventListener("click", () => {
   // 모든 메뉴 항목의 active 클래스 제거
   menuItems.forEach((menu) => {
    menu.classList.remove("active");
   });

   // 클릭된 메뉴 항목에 active 클래스 추가
   //    console.log(this);
   item.classList.add("active");

   // 모든 콘텐츠 항목 숨기기
   contentItems.forEach((content) => {
    content.classList.remove("active");
   });

   // 클릭된 메뉴에 해당하는 콘텐츠 항목 표시
   //    console.log(item.getAttribute("data-content"));
   const contentId = item.getAttribute("data-content");
   document.getElementById(contentId).classList.add("active");
  });
 });
});
