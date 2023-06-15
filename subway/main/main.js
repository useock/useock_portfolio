const toggleBtn = document.querySelector('.mobile_menu');
const menu = document.querySelector('.mobile_menubox');

toggleBtn.addEventListener('click', () =>{
    menu.classList.toggle('active');
});

// 해상도에 따른 제이쿼리 적용 & 스크롤 내릴시 margin 값 적용
// $(window).resize(function(){ 
//     if (window.innerWidth > 1024) {  // 다바이스 크기가 1024이상일때 
    
//         $(window).scroll(function(){
//             $("#sub2_button").css("margin-top",Math.max(-200,0-$(this).scrollTop()));
//         });
    
//     }
// }).resize();








// 버튼 누르면 슬라이드
// document.querySelector('.button_2').addEventListener('click', function(){document.querySelector('.incon_1').style.transform = 'translate(-90vw)'
// });

// document.querySelector('.button_3').addEventListener('click', function(){document.querySelector('.incon_1').style.transform = 'translate(-180vw)'
// });

// document.querySelector('.button_1').addEventListener('click', function(){document.querySelector('.incon_1').style.transform = 'translate(0vw)'
// });
