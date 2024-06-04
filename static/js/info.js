// by 冷色调的夏天

// var lsjQuery = jQuery;
// lsjQuery(document).ready(function () {
//     if (typeof lsjQuery.fn.layerSlider == "undefined") {
//         lsShowNotice('layerslider_1', 'jquery');
//     } else {
//         lsjQuery("#layerslider_4").layerSlider({
//             responsiveUnder: 800,
//             layersContainer: 600,
//             skinsPath: './layerslider/skins/',
//             autoStart: true,
//             navStartStop: false,
//             responsive: false,
//             hoverPrevNext: false,
//             thumbnailNavigation: false
//         });
//     }
// });
// lsjQuery('#layerslider_4').layerSlider('pause');

// window.onload = function () {
//     var odiv = document.getElementById('div1');
//     var oul = odiv.getElementsByTagName('ul')[0];
//     var ali = oul.getElementsByTagName('li');
//     var spa = -2;
//     oul.innerHTML = oul.innerHTML + oul.innerHTML;
//     oul.style.width = ali[0].offsetWidth * ali.length + 'px';
//     function move() {
//         if (oul.offsetLeft < -oul.offsetWidth / 2) {
//             oul.style.left = '0';
//         }
//         if (oul.offsetLeft > 0) {
//             oul.style.left = -oul.offsetWidth / 2 + 'px'
//         }
//         oul.style.left = oul.offsetLeft + spa + 'px';
//     }
//     var timer = setInterval(move, 30)
function checkPwd() {
    console.log(111);
    var passwd = document.getElementById("passwd");
    if (passwd.value == "520jujon") {
        location.href = "/static/pdf/ravelle_man.pdf";
    } else {
        alert("输入提取码有误，请联系淘宝客服获取!");
    }
}
//     odiv.onmousemove = function () { clearInterval(timer); }
//     odiv.onmouseout = function () { timer = setInterval(move, 30) };
//     // document.getElementsByTagName('a')[0].onclick = function(){
//     //     spa=-2;
//     // }
//     // document.getElementsByTagName('a')[1].onclick = function(){
//     //     spa=2;
//     // }
// }

console.info(`%c
                                                                                                   
##      ##             #                     ##        #           
              #######            ##      #              ##         #        # ## #      #           
          ##########               #    ##              ##   ## #  ##       # ## #      #           
          #   #                    #    #              ###   #  #   #       # ## #      #           
          #  ######               ##    ##          #### #   #  #   #       ######      ##          
         ##       #             ###     ###        ##    #   #  #  ##        #####      ##          
          #     ###            ##  #   #  ##           ###   ## ## ##         ##   ########         
          #   ##               #   ##  ## ##          ####    ######           #          #         
          #  #                 #   #   ##  #        ##   #      ##             #          ##        
          #  #    ##           #   #   #   #       ##   ##      ##         ########     ####        
          #  #  ##             #   #   #   #          ###    ########      #####   ######  #        
          #  #  #              ### #   #  ##         ##                        #           #        
          #  #                  #####  ###          #   #          #           #          ##        
          #  #   #                 ##  #                # #   #    #           #       #####        
          #  #   ##                 # ##                # #   ######           #   ####   #         
          #  #    #                 ###              #  ###    #   #           #          #         
          #   #                      ##              #  #      #   #           #          #         
          #          #                ##             #  #      #   #           #         ##         
           ###########                 ###           ## ##     #####           #       ###          
                                         ###          #######   ###            #     ##             
                                                            #                 ##                    
        
        巨匠(jujon.cn)，招聘ROS/c++开发工程师 https://jujon.cn ,欢迎加入JUJON!
`, 'color:#FF6E00;')