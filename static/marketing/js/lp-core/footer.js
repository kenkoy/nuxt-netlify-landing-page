/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

var devMobile = jQuery.browser.mobile;
//console.log("mobile? = " + devMobile);

$(document).ready(function() {		
          
        var bodyId = document.body.id;
        var stripElement = document.getElementById('strip');
        var lastElement = document.getElementById('terms');
        var formElement = document.getElementById('sign-up-form');
        var loginBtn = document.getElementById('login-btn');
        var signupBtn = document.getElementById('signup-btn');
        var homeBtn = document.getElementById('home-btn');
        var footerContent = document.getElementsByClassName('footer-content');
        var lang_code = window.lang_code;
        var country_code = window.country_code;
        var domain;
        //Add Compliance Text
        /*if (bodyId == 'en-gb' && country_code == 'gb') {*/

        if (bodyId == 'ja-jp') {

            domain = 'verajohn.com';

        } else if (bodyId == 'nb-no') {

            domain = 'casino.verajohn.com/no';             

        } else if (bodyId == 'fi-fi') {              

            domain = 'casino.verajohn.com/fi';  

        } else if (bodyId == 'de-de') {             

            domain = 'casino.verajohn.com/de';  

        } else if (bodyId == 'sv-se') {

            domain = 'verajohn.se'; 

        } else if (bodyId == 'pt-br') {

            domain = 'casino.verajohn.com/pt-br';    

        } else { 

           domain = 'casino.verajohn.com';                

        }
    
        console.log ('bodyId: ' + bodyId + ' / lang_code: ' + lang_code + ' / country_code: ' + country_code);

        //Affiliate Tracking 
        var url = window.location.href;
        var affParameters = url ? url.split('?')[1] : window.location.search.slice(1);
        
        if (affParameters == undefined){
         affParameters = "";
        } else {
         affParameters = '/?'+affParameters;
        }
        
        //console.log("affiliate: "+affParameters);

        // Add Form
        if (formElement != null) {
            initSignUpForm(formElement, bodyId);
        }	

        //Vertical Center Containers
        $('.strip-container').flexVerticalCenter();	
        $('.form-container').flexVerticalCenter();


        // Add Domain Urls to buttons
        if (loginBtn != null) {
            loginBtn.setAttribute("href", "https://"+domain+affParameters+"#signin");
        }
        if (signupBtn != null) {
            signupBtn.setAttribute("href", "https://"+domain+affParameters+"#join");
        }
        if (homeBtn != null) {
            homeBtn.setAttribute("href", "https://"+domain+affParameters);  //on LP3 There is a script that caters for the class buttons
        }        
        
    
        // Add Footer // https://htmlformatter.com / https://www.willpeavy.com/tools/minifier/
        if (bodyId == 'ja-jp') {
            
            //For Japan Acquistion wants that the Join button redirects to the signup proccess instead! 
            //Change login button url to register if button does not say sign in or home or login
            var checkHomeButtonText = loginBtn.innerHTML.search(/サインイン|ホーム|ログイン/);
            //console.log(checkHomeButtonText)          
            if(checkHomeButtonText === -1){
              loginBtn.setAttribute("href", "https://"+domain+affParameters+"#join");  
            } 
            
            //If Mobile
            if (devMobile) {
                //remove first Forwardslash from affParameters variable due to new link
                var affParametersNFS = affParameters.substring(1);

                if (signupBtn != null) {
                    signupBtn.setAttribute("href", "https://mobile."+domain+"/registration-cc/steps/1"+affParametersNFS);
                }
                if(checkHomeButtonText === -1){
                    loginBtn.setAttribute("href", "https://mobile."+domain+"/registration-cc/steps/1"+affParametersNFS); 
                }        
            } 

            $('<footer id="footer" class="animated fadeIn"> <div class="container-fluid pp"> <div class="container">  <div class="row"> <div class="col-12"> <div class="payment-providers"></div></div></div></div><div class="container-fluid"> <div class="row"> <div class="icons text-center"> <div class="icon"> <a href="https://www.'+domain+'/about/responsible-gaming'+affParameters+'" target="blank"> <div class="age"></div></a> </div><div class="icon"> <a href="https://www.gamstop.co.uk" target="blank"> <div class="gamstop"></div></a> </div><div class="icon"> <a href="https://www.begambleaware.org" target="blank"> <div class="bga"></div></a> </div><div class="icon"> <a href="https://www.gamblingtherapy.org/en" target="blank"> <div class="gt"></div></a> </div><div class="icon"> <a href="https://secure.gamblingcommission.gov.uk/PublicRegister/Search/Detail/39408" target="blank"> <div class="ukgc"></div></a> </div><div class="icon"> <a href="#" target="blank"> <div class="curacao"></div></a> </div><div class="icon"> <a href="https://www.gamcare.org.uk" target="blank"> <div class="gamcare"></div></a> </div></div></div><div class="row"> <div class="footer-content col-12 text-center"></div></div></div></footer>').insertAfter(lastElement);	
		} else {
            $('<footer id="footer" class="animated fadeIn"> <div class="container-fluid pp"> <div class="container"> <div class="row"> <div class="col-12"> <div class="payment-providers"></div></div></div></div></div><div class="container-fluid"> <div class="row"> <div class="icons text-center"> <div class="icon"> <a href="https://'+domain+'/about/responsible-gaming'+affParameters+'" target="blank"> <div class="age"></div></a> </div><div class="icon"> <a href="https://www.gamstop.co.uk" target="blank"> <div class="gamstop"></div></a> </div><div class="icon"> <a href="https://www.begambleaware.org" target="blank"> <div class="bga"></div></a> </div><div class="icon"> <a href="https://www.gamblingtherapy.org/en" target="blank"> <div class="gt"></div></a> </div><div class="icon"> <a href="https://secure.gamblingcommission.gov.uk/PublicRegister/Search/Detail/39408" target="blank"> <div class="ukgc"></div></a> </div><div class="icon"> <a href="https://www.authorisation.mga.org.mt/verification.aspx?lang=en&company=c0e82570-bf83-4ecc-bda3-89ecb92d5b0e" target="blank"> <div class="mga"></div></a> </div><div class="icon"> <a href="https://www.gamcare.org.uk" target="blank"> <div class="gamcare"></div></a> </div></div></div><div class="row"> <div class="footer-content col-12 text-center"></div></div></div></footer>').insertAfter(lastElement);
		}		
       
            
        //Add Compliance Text
        if (bodyId == 'en-gb' && country_code == 'gb') {

          $(footerContent).append('<p class="text-center"><a href="https://'+domain+'/about/responsible-gaming'+affParameters+'" target="blank">Gambling can be addictive - please play responsibly</a></p><p style="font-size:14px; text-align:center">This website is operated by Dumarca Gaming Ltd. with registered address at The Emporium, Level 4, St Louis Street, Msida MSD 1421, Malta. <br>This website is regulated by United Kingdom Gambling Commission (UKGC) under license number 039408.</p>');		

          $(stripElement).append('<div class="small-terms"><a href="#terms" class="link-terms-conditions ctac">Full Terms & Conditions Apply.</a></div>');

          $(lastElement).append('<ul><li><a href="https://'+domain+'/about/terms-and-conditions'+affParameters+'">Full General terms and conditions apply.</a></li><li><a href="https://'+domain+'/about/our-casino-bonuses'+affParameters+'">Casino bonus information.</a></li><li><a href="https://'+domain+'/about/promotions-terms-and-conditions'+affParameters+'">General Promotion Terms.</a></li></ul>');	

        } else if (bodyId == 'ja-jp') {

          $(footerContent).append('<p class="text-center"><a href="https://'+domain+'/about/responsible-gaming'+affParameters+'" target="blank">ギャンブルには中毒性があります。 自己責任を持ってプレイしてください。</a></p><p style="font-size:14px; text-align:center">当ウェブサイトは、キュラソー政府の商業登記に登録されている、番号149132のBreckenridge Curacao B.V.（登録住所：Emancipatie Boulevard, Dominico F. “Don” Martina 31, Willemstad, Curaçao）により運営されています。<br>Breckenridge Curaçao B.V.はキュラソー州知事により発行されたMaster Gaming License #5536/JAZに基づく C.I.L Curacao Interavtive Licensing N.V. により付与されたサブライセンスを通して正式な許可を所持しています</p>');

          $(stripElement).append('<div class="small-terms"><a href="#terms" class="link-terms-conditions ctac">利用規約</a>に同意します。</a></div>');	  

          $(lastElement).append('<ul><li>通常の<a href="https://'+domain+'/about/terms-and-conditions'+affParameters+'">利用規約</a>と<a href="https://'+domain+'/about/promotions-terms-and-conditions'+affParameters+'">キャンペーン一般利用規約</a>が適用されます。</li></ul>');	

          // Before Terms Payments			 
          $('<div class="container-fluid pp"> <div class="container"> <div class="row"> <div class="col-12"> <div class="payment-providers"></div></div></div></div>').insertBefore(lastElement);
          $('footer .payment-providers').remove();


        } else if (bodyId == 'nb-no') {

          $(footerContent).append('<p class="text-center"><a href="https://'+domain+'/about/responsible-gaming'+affParameters+'" target="blank">Gambling kan være vanedannende – spill ansvarsfullt</a></p><p style="font-size:14px; text-align:center">Operatøren for dette nettstedet er Dumarca Gaming Ltd. med registrert adresse: The Emporium, Level 4, St Louis Street, Msida MSD 1421, Malta. <br>Denne nettsiden er regulert av The Malta Gaming Authority og opererer under følgende lisens: <a href="https://www.authorisation.mga.org.mt/verification.aspx?lang=en&company=c0e82570-bf83-4ecc-bda3-89ecb92d5b0e" target="blank">MGA/CRP/169/2009</a> utstedes på 13/05/2020</p>');

          $(stripElement).append('<div class="small-terms"><a href="#terms" class="link-terms-conditions ctac">Vilkår og betingelser gjelder.</a></div>');

          $(lastElement).append('<ul><li><a href="https://'+domain+'/about/terms-and-conditions'+affParameters+'">Standard kampanjevilkår og betingelser gjelder.</a></li><li><a href="https://'+domain+'/about/our-casino-bonuses'+affParameters+'">Casinobonus informasjon.</a></li><li><a href="https://'+domain+'/about/promotions-terms-and-conditions'+affParameters+'">Standard kampanjevilkår.</a></li></ul>');	

        } else if (bodyId == 'fi-fi') {              

          $(footerContent).append('<p class="text-center"><a href="https://'+domain+'/about/responsible-gaming'+affParameters+'" target="blank">Pelaaminen voi olla koukuttavaa - pelaathan vastuullisesti</a></p><p style="font-size:14px; text-align:center">Tämän sivun hallinnoija on Dumarca Gaming Ltd. joka on rekisteröity osoitteessa The Emporium, Level 4, St Louis Street, Msida MSD 1421, Malta. <br>Tämä sivusto toimii Malta Gaming Authorityn myöntämien ja valvomien lisenssien alaisuudessa; lisenssinumerolla <a href="https://www.authorisation.mga.org.mt/verification.aspx?lang=en&company=c0e82570-bf83-4ecc-bda3-89ecb92d5b0e" target="blank">MGA/CRP/169/2009</a> myönnetty 13/05/2020</p>');

           $(stripElement).append('<div class="small-terms"><a href="#terms" class="link-terms-conditions ctac">Täydet säännöt ja ehdot pätevät.</a></div>');

          $(lastElement).append('<ul><li><a href="https://'+domain+'/about/terms-and-conditions'+affParameters+'">Yleiset säännöt ja ehdot pätevät.</a></li><li><a href="https://'+domain+'/about/our-casino-bonuses'+affParameters+'">Tietoa kasinobonuksista.</a></li><li><a href="https://'+domain+'/about/promotions-terms-and-conditions'+affParameters+'">Yleiset kampanjasäännöt.</a></li></ul>');	

        } else if (bodyId == 'de-de') {

          $(footerContent).append('<p class="text-center"><a href="https://'+domain+'/about/responsible-gaming'+affParameters+'" target="blank">Glücksspiel kann süchtig machen - bitte verantwortungsvoll spielen</a></p><p style="font-size:14px; text-align:center">Der Betreiber dieser Webseite ist die Dumarca Gaming Ltd. mit der registrierten Adresse The Emporium, Level 4, St Louis Street, Msida MSD 1421, Malta. <br>Diese Webseite ist von der Malta Gaming Authority reguliert und arbeitet mit folgender Lizenz; <a href="https://www.authorisation.mga.org.mt/verification.aspx?lang=en&company=c0e82570-bf83-4ecc-bda3-89ecb92d5b0e" target="blank">MGA/CRP/169/2009</a> ausgegeben am 13/05/2020</p>');

          $(stripElement).append('<div class="small-terms"><a href="#terms" class="link-terms-conditions ctac">Allgemeine Geschäftsbedingungen.</a></div>');

          $(lastElement).append('<ul><li><a href="https://'+domain+'/about/terms-and-conditions'+affParameters+'">Es gelten die allgemeinen Geschäftsbedingungen.</a></li><li><a href="https://'+domain+'/about/our-casino-bonuses'+affParameters+'">Casinobonus-Informationen.</a></li><li><a href="https://'+domain+'/about/promotions-terms-and-conditions'+affParameters+'">Es gelten die allgemeinen Promotions-Teilnahmebedingungen.</a></li></ul>');

        } else if (bodyId == 'sv-se') {

          $(footerContent).append('<p class="text-center"><a href="https://'+domain+'/about/responsible-gaming'+affParameters+'" target="blank">Spel om pengar kan vara beroendeframkallande – spela ansvarsfullt<br>Gå till spelpaus.se</a></p><p class="text-center"><a href="https://'+domain+'/about/privacy-policy'+affParameters+'" target="blank">Integritetspolicy</a></p><p style="font-size:14px; text-align:center">Vera&John erbjuder spel med tillstånd från Spelinspektionen och har licens nummer 18Li7410 (giltigt t o m 2024-01-01). Vera&John Dumarca Gaming Ltd, Organisationsnummer C50898. Kontakta oss på +46812451423 eller support@'+domain+'</p>');

          $(stripElement).append('<div class="small-terms"><br>Spel kan skapa spelberoende, kom ihåg att spela ansvarsfullt<br>Villkor gäller. 18+. <a href="https://www.stodlinjen.se/">Stodlinjen.se</a</div>');

          $(stripElement).append('<div class="small-terms"><a href="#terms" class="link-terms-conditions ctac">Fullständiga regler & villkor gäller.</a></div>');

          $(lastElement).append('<ul><li><a href="https://'+domain+'/about/terms-and-conditions'+affParameters+'">Allmänna regler & villkor gäller.</a></li><li><a href="https://'+domain+'/about/our-casino-bonuses'+affParameters+'">Information om våra casinobonusar.</a></li><li><a href="https://'+domain+'/about/promotions-terms-and-conditions'+affParameters+'">Allmänna kampanjvillkor.</a></li></ul>');

        } else if (bodyId == 'pt-br') {

          $(footerContent).append('<p class="text-center"><a href="https://'+domain+'/about/privacy-policy'+affParameters+'" target="blank">Política de privacidade</a></p><p style="font-size:14px; text-align:center">O operador deste site www.verajohn.com é Dumarca Gaming Ltd., com endereço registrado em 2 São Pio V. Street, Nível 3, Sliema, SLM1426, Malta. Este site é operado com a seguinte licença emitida e regulamentada pela Loterias de Malta e Autoridade de Jogos: MGA / CL1 / 552/2009</p>');

          $(stripElement).append('<div class="small-terms"><a href="#terms" class="link-terms-conditions ctac">TERMOS E CONDIÇÕES</a></div>');

          $(lastElement).append('<ul><li><a href="https://'+domain+'/about/terms-and-conditions'+affParameters+'">Termos e condições</a></li><li><a href="https://'+domain+'/about/our-casino-bonuses'+affParameters+'">Nossos bônus de casino</a></li><li><a href="https://'+domain+'/about/promotions-terms-and-conditions'+affParameters+'">Termos Promocionais Gerais</a></li></ul>');	

        } else { 

          $(footerContent).append('<p class="text-center"><a href="https://'+domain+'/about/responsible-gaming'+affParameters+'" target="blank">Gambling can be addictive - please play responsibly</a></p><p style="font-size:14px; text-align:center">The operator of this website is Dumarca Gaming Ltd. with registered address at The Emporium, Level 4, St Louis Street, Msida MSD 1421, Malta. <br>This website is regulated by the Malta Gaming Authority and operated under the following license: <a href="https://www.authorisation.mga.org.mt/verification.aspx?lang=en&company=c0e82570-bf83-4ecc-bda3-89ecb92d5b0e" target="blank">MGA/CRP/169/2009</a> issued on 13/05/2020</p>');

          $(stripElement).append('<div class="small-terms"><a href="#terms" class="link-terms-conditions ctac">Terms & Conditions Apply.</a></div>');

          $(lastElement).append('<ul><li><a href="https://'+domain+'/about/terms-and-conditions'+affParameters+'">General terms and conditions apply.</a></li><li><a href="https://'+domain+'/about/our-casino-bonuses'+affParameters+'">Casino bonus information.</a></li><li><a href="https://'+domain+'/about/promotions-terms-and-conditions'+affParameters+'">General Promotion Terms.</a></li></ul>');	
        }
            
});// JavaScript Document