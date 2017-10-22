function add_launchpaed_banner() {
    var bannerHTML = `<style>@import url('https://fonts.googleapis.com/css?family=Montserrat');.launchpadbanner-powered-by-launchpad{background: rgba(255, 255, 255, 0.0); right: 12px; width: 172px; position: fixed; height: 27px; margin: 0; bottom: 12px; overflow: hidden;}.launchpadbanner-powered-by-launchpad:hover{height: 100px;}.launchpadbanner-powered-by-launchpad .launchpadbanner-title{background: rgba(255, 255, 255, 0.0); left: 0px; width: 165px; position: absolute; height: 27px; margin: 0; bottom: 0px;}.launchpadbanner-powered-by-launchpad .launchpadbanner-title .launchpadbanner-titleBg{background: rgba(255, 255, 255, 1.0); left: 0px; width: 100%; position: absolute; height: 25px; margin: 0; top: 0px; border-radius: 5px; border-style: solid; border-width: 1; border-color: rgba(65, 33, 240, 1.0);}.launchpadbanner-powered-by-launchpad .launchpadbanner-title .launchpadbanner-label1{background: rgba(255, 255, 255, 0.0); width: 100%; position: relative; height: auto; margin: 0; top: 6px; font-family: 'Montserrat', Verdana, Arial, serif; font-weight: 400; font-style: normal; font-size: 12.0px; color: rgba(65, 33, 240, 1.0); text-align: center; letter-spacing: 0.24px; line-height: 14.0px;}.launchpadbanner-powered-by-launchpad .launchpadbanner-extended{background: rgba(255, 255, 255, 0.0); left: 0px; width: 165px; position: absolute; height: 60px; margin: 0; bottom: 35px;}.launchpadbanner-powered-by-launchpad .launchpadbanner-extended .launchpadbanner-extendedBg{background: rgba(65, 33, 240, 1); left: 0px; width: 165px; position: absolute; height: 100%; margin: 0; bottom: 0px; border-radius: 5px; border-style: solid; border-width: 1; border-color: rgba(65, 33, 240, 1.0);}.launchpadbanner-powered-by-launchpad .launchpadbanner-extended .launchpadbanner-subtitle{background: rgba(255, 255, 255, 0.0); left: 50px; width: auto; position: absolute; height: auto; margin: 0; top: 7px; font-family: 'Montserrat', Verdana, Arial, serif; font-weight: 400; font-style: normal; font-size: 11.0px; color: rgba(255, 255, 255, 1.0); text-align: left; letter-spacing: 0.2px; line-height: 14.0px;}.launchpadbanner-powered-by-launchpad .launchpadbanner-extended .launchpadbanner-launchpadpoweredlogo{background: rgba(255, 255, 255, 0.0); left: 18px; width: 16px; position: absolute; height: 17px; margin: 0; top: 18px;}</style><a href='https://launchpad.animaapp.com?utm_medium=user-website&amp;utm_source=anima&amp;utm_campaign=launchpad-banner'> <div class='launchpadbanner-powered-by-launchpad'> <div class='launchpadbanner-title'> <div class='launchpadbanner-titleBg'></div><div class='launchpadbanner-label1'>&nbsp;Powered by Launchpad</div></div><div class='launchpadbanner-extended'> <div class='launchpadbanner-extendedBg'> </div><div class='launchpadbanner-subtitle'>Designers, launch <br/>websites in Sketch.<br/><u>Start Free</u> </div><img class='launchpadbanner-launchpadpoweredlogo' src='https://s3.amazonaws.com/animaapp/launchpad-static/bannerslaunchpadpoweredlogo@2x.png'/> </div></div></a>`;
    var div = document.createElement('div'); div.innerHTML = bannerHTML; while (div.children.length > 0) { document.body.appendChild(div.children[0]); }
}
add_launchpaed_banner();