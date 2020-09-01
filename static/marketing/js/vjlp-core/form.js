// SIGN UP FORM
function initSignUpForm(container, culture) {

  /* Run Preloader System (Jason) */
  $(document.body).prepend('<section id="progress-bar" class="progress-bar progress-bar-striped progress-bar-animated bg-warning sticky-top" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%; z-index:999999999 !important; display:none;"></section>');

  console.log(culture);
  var translations = {
    "en": {
      "email": {
        "placeholder": "Email address",
        "error": "Required"
      },
      "signupMobile": {
        "placeholder": "Mobile phone number",
        "error": "Required"
      },
      "password": {
        "placeholder": "Password",
        "error": "Required"
      },
      "passwordConfirm": {
        "placeholder": "Confirm password",
        "error": "Required"
      },
      "terms": {
        "label": " I've read the <a href=\"#terms\" class=\"link-terms-conditions ctac\">terms and conditions</a>, as I always do!",
      },
      "confirm": {
        "label": " I acknowledge that I do not hold any other account self-excluded or blocked with Dumarca Gaming Ltd. Please contact support if you believe you may hold an account with Dumarca Gaming Ltd and we will assist you in recovering your details."
      },
      "openAccount": "Open my account",
      "currency": "",
      "site": "casino.verajohn.com"
    },
    "sv": {
      "email": {
        "placeholder": "Emailadress",
        "error": "Obligatorisk"
      },
      "signupMobile": {
        "placeholder": "Mobile phone number",
        "error": "Obligatorisk"
      },
      "password": {
        "placeholder": "LÃ¶senord",
        "error": "Obligatorisk"
      },
      "passwordConfirm": {
        "placeholder": "BekrÃ¤fta lÃ¶senord",
        "error": "Obligatorisk"
      },
      "terms": {
        "label": " Jag har lÃ¤st <a href=\"#terms\" class=\"link-terms-conditions ctac\">regler och villkor</a>, som jag alltid gÃ¶r!",
      },
      "confirm": {
        "label": " Jag bekrÃ¤ftar hÃ¤rmed att jag inte har ett tidigare stÃ¤ngt eller blockerat spelkonto hos Dumarca Gaming Ltd. VÃ¤nligen kontakta kundtjÃ¤nst om du tror att du har ett spelkonto sedan tidigare hos Dumarca Gaming Ltd, sÃ¥ ska vi hjÃ¤lpa dig vidare med att Ã¥terstÃ¤lla dina detaljer."
      },
      "openAccount": "Ã–ppna mitt konto",
      "currency": "SEK",
      "site": "verajohn.se"
    },
    "fi": {
      "email": {
        "placeholder": "SÃ¤hkÃ¶posti",
        "error": "Virheellinen sÃ¤hkÃ¶postiosoite."
      },
      "signupMobile": {
        "placeholder": "Mobile phone number",
        "error": "Virheellinen sÃ¤hkÃ¶postiosoite."
      },
      "password": {
        "placeholder": "Salasana",
        "error": "Virheellinen sÃ¤hkÃ¶postiosoite."
      },
      "passwordConfirm": {
        "placeholder": "Vahvista salasana",
        "error": "Virheellinen sÃ¤hkÃ¶postiosoite."
      },
      "terms": {
        "label": " Olen lukenut <a href=\"#terms\" class=\"link-terms-conditions ctac\">SÃ¤Ã¤nnÃ¶t & ehdot</a>, kuten aina!",
      },
      "confirm": {
        "label": " Tiedostan, ettÃ¤ minulla ei ole muita itse-suljettuja tai muutoin blokattuja pelitilejÃ¤ Dumarca Gaming Ltd kasinoilla. Jos uskot ettÃ¤ sinulla saattaakin olla jo tili Dumarca Gaming Ltd:n kasinoilla, otathan yhteyttÃ¤ asiakastukeemme ja autamme sinua chekkaamaan tilanteen."
      },
      "openAccount": "Avaa tilini",
      "currency": "EUR",
      "site": "casino.verajohn.com"
    },
    "nb": {
      "email": {
        "placeholder": "E-mail",
        "error": "Ikke gyldig"
      },
      "signupMobile": {
        "placeholder": "Mobile phone number",
        "error": "Ikke gyldig"
      },
      "password": {
        "placeholder": "Passord",
        "error": "Ikke gyldig"
      },
      "passwordConfirm": {
        "placeholder": "Bekreft passord",
        "error": "Ikke gyldig"
      },
      "terms": {
        "label": " Jeg har lest <a href=\"#terms\" class=\"link-terms-conditions ctac\">VilkÃ¥r og Betingelser</a>, som jeg alltid gjÃ¸r!",
      },
      "confirm": {
        "label": " Jeg bekrefter at jeg ikke har noen annen konto hvor jeg har stengt meg selv ute eller som er blokkert hos Dumarca Gaming Ltd. Vennligst ta kontakt med kundesupport dersom du tror du har en konto hos Dumarca Gaming Ltd, da vil vi hjelpe deg med Ã¥ gjenopprette kontoinformasjonen."
      },
      "openAccount": "Ã…pne kontoen min",
      "currency": "NOK",
      "site": "casino.verajohn.com"
    },
    "de": {
      "email": {
        "placeholder": "Email Adresse",
        "error": "Erforderlich"
      },
      "signupMobile": {
        "placeholder": "Mobile phone number",
        "error": "Erforderlich"
      },
      "password": {
        "placeholder": "Passwort",
        "error": "Das Passwort muss aus mind. 6 Zeichen bestehen und eine Zahl enthalten"
      },
      "passwordConfirm": {
        "placeholder": "Passwort bestÃ¤tigen",
        "error": "Erforderlich"
      },
      "terms": {
        "label": "<p class='text-left'>Ich habe die  <a href=\"#terms\" class=\"link-terms-conditions ctac\">allgemeinen GeschÃ¤ftsbedingungen</a> gelesen.</p>",
      },
      "confirm": {
        "label": "<p class='text-left'>Ich bestÃ¤tige, dass ich kein weiteres Konto, in welchem ich mich selbst gesperrt habe oder welches geblockt wurde, bei der Dumarca Gaming Ltd besitze oder besessen habe.</p>"
      },
      "openAccount": "Jetzt anmelden",
      "currency": "EUR",
      "site": "casino.verajohn.com"
    },
    "ja": {
      "email": {
        "placeholder": "ãƒ¡ãƒ¼ãƒ«ã‚¢ãƒ‰ãƒ¬ã‚¹",
        "error": "å¿…é ˆé …ç›®"
      },
      "signupMobile": {
        "placeholder": "æºå¸¯é›»è©±ç•ªå·",
        "error": "å¿…é ˆé …ç›®"
      },
      "password": {
        "placeholder": "ãƒ‘ã‚¹ãƒ¯ãƒ¼ãƒ‰",
        "error": "å¿…é ˆé …ç›®"
      },
      "passwordConfirm": {
        "placeholder": "ãƒ‘ã‚¹ãƒ¯ãƒ¼ãƒ‰ï¼ˆç¢ºèªã®ç‚ºã®å†å…¥åŠ›)",
        "error": "å¿…é ˆé …ç›®"
      },
      "terms": {
        "label": "<a href=\"#terms\" class=\"link-terms-conditions ctac\">åˆ©ç”¨è¦ç´„</a>ã«åŒæ„ã—ã¾ã™ã€‚</a>",
      },
      "confirm": {
        "label": "å½“ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆã¯ã€ã‚­ãƒ¥ãƒ©ã‚½ãƒ¼æ”¿åºœã®å•†æ¥­ç™»è¨˜ã«ç™»éŒ²ã•ã‚Œã¦ã„ã‚‹ã€ç•ªå·149132ã®Breckenridge Curacao B.V.ï¼ˆç™»éŒ²ä½æ‰€ï¼šEmancipatie Boulevard, Dominico F. â€œDonâ€ Martina 31, Willemstad, CuraÃ§aoï¼‰ã«ã‚ˆã‚Šé‹å–¶ã•ã‚Œã¦ã„ã¾ã™ã€‚Breckenridge CuraÃ§ao B.V.ã¯ã‚­ãƒ¥ãƒ©ã‚½ãƒ¼å·žçŸ¥äº‹ã«ã‚ˆã‚Šç™ºè¡Œã•ã‚ŒãŸMaster Gaming License #5536/JAZã«åŸºã¥ã C.I.L Curacao Interavtive Licensing N.V. ã«ã‚ˆã‚Šä»˜ä¸Žã•ã‚ŒãŸã‚µãƒ–ãƒ©ã‚¤ã‚»ãƒ³ã‚¹ã‚’é€šã—ã¦æ­£å¼ãªè¨±å¯ã‚’æ‰€æŒã—ã¦ã„ã¾ã™"
      },
      "openAccount": "ã‚¢ã‚«ã‚¦ãƒ³ãƒˆã®é–‹è¨­",
      "currency": "USD",
      "site": "verajohn.com"
    }, /* New add in case language not available */
    "global": {
      "email": {
        "placeholder": "Email address",
        "error": "Required"
      },
      "signupMobile": {
        "placeholder": "Mobile phone number",
        "error": "Required"
      },
      "password": {
        "placeholder": "Password",
        "error": "Required"
      },
      "passwordConfirm": {
        "placeholder": "Confirm password",
        "error": "Required"
      },
      "terms": {
        "label": " I've read the <a href=\"#terms\" class=\"link-terms-conditions ctac\">terms and conditions</a>, as I always do!",
      },
      "confirm": {
        "label": " I acknowledge that I do not hold any other account self-excluded or blocked with Dumarca Gaming Ltd. Please contact support if you believe you may hold an account with Dumarca Gaming Ltd and we will assist you in recovering your details."
      },
      "openAccount": "Open my account",
      "currency": "EUR",
      "site": "casino.verajohn.com"
    }
  };



  var lang = translations[culture.split('-')[0]];
  if (lang == null)
    lang = translations.global;

  $(container).html([
    '<div id="form">',
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /* charlie new add - store the country value after API Called - START */
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    '<input type="hidden" name="positioncountry" id="positioncountry" value="">',
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /* charlie new add - store the country value after API Called - END */
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    '<div class="left">',
    '<div class="input-group">',
    '<input type="text" maxlength="64" name="mail" id="signup-mail" size="30" value="" placeholder="" class="form-text required" data-placeholder-inited="true">',
    '<div class="error"></div>',
    '</div>',
    '<div class="input-group group-password">',
    '<input type="password" name="pass" id="signup-pass" maxlength="60" size="30" placeholder="" class="form-text required" data-placeholder-inited="true">',
    '<div class="error"></div>',
    '</div>',
    '<div class="input-group">',
    '<input type="password" name="pass_confirm" id="signup-pass-compare" maxlength="60" size="30" placeholder="" class="form-text required" data-placeholder-inited="true">',
    '<div class="error"></div>',
    '</div>',
    '</div>',
    '<div class="right">',
    '<div class="input-group">',
    '<input type="checkbox" name="tc" id="tc" value="1" class="form-checkbox required">',
    '<p class="title"></p>',
    '</div>',
    '<div class="input-group">',
    '<input type="checkbox" name="ac" id="ac" value="1" class="form-checkbox required">',
    '<p class="title"></p>',
    '</div>',
    '<button class="btn mt-btn ctac-g animated tada" id="btnOpenAccount"></button>',
    '<div id="submit-error" style="color: #fff;padding-top: 14px;clear:both;"></div>',
    '</div>',
    '</div>'
  ].join(''));

  /*
  <div class="input-group">
  <input type="text" name="mobile_number" id="signup-mobile" size="30" value="" placeholder="" class="form-text required" data-placeholder-inited="true">
  <div class="error"></div>
  </div>
*/

  $(container).find('#signup-mail').attr('placeholder', lang.email.placeholder);
  $(container).find('#signup-mobile').attr('placeholder', lang.signupMobile.placeholder);
  $(container).find('#signup-pass').attr('placeholder', lang.password.placeholder);
  $(container).find('#signup-pass-compare').attr('placeholder', lang.passwordConfirm.placeholder);
  $(container).find('.input-group .error').html(lang.email.error);
  $(container).find('.input-group.group-password .error').html(lang.password.error);
  $(container).find('#tc').next('.title').html(lang.terms.label);
  $(container).find('#ac').next('.title').html(lang.confirm.label);
  $(container).find('#btnOpenAccount').html(lang.openAccount);

  $('#form .input-group input:not([type="checkbox"])').blur(function () {
    if ($(this).val() <= 0) {
      $(this).next().slideDown();
      $(this).addClass('no-value');
    } else {
      $(this).next().slideUp();
      $(this).removeClass('no-value');
    }
  });

  $('#form button').click(function (ev) {

    if (culture == 'sv-sv')
      culture = 'sv-SE';
    if (culture == 'en-en')
      culture = 'en-GB';
    if (culture == 'da-dk')
      culture = 'da-DK';
    if (culture == 'ja-ja')
      culture = 'ja-JP';


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /* charlie new add - reassign the site and country if lang = en but country not gb */
    var lang_code = window.lang_code;
    var country_code = window.country_code;

    if (lang_code == 'en' && country_code != 'gb') {
      lang.currency = 'EUR';
      lang.site = 'casino.verajohn.com';
      console.log(lang.currency);
      console.log(lang.site);
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    registerUser(culture, lang.currency, lang.site);


  });
}

function validateFields() {
  var v = true;
  if ($('#signup-mail').val().length < 3 && !validateEmail($('#signup-mail').val())) {
    $('#signup-mail').next().slideDown().addClass('no-value');
    v = false;
  }
  // if ($('#signup-mail').val() != $('#signup-mail-confirm').val()) {
  //     $('#signup-mail-confirm').next().slideDown().addClass('no-value');
  //     v = false;
  // }
  if ($('#signup-pass').val().length < 5) {
    $('#signup-pass').next().slideDown().addClass('no-value');
    v = false;
  }
  if ($('#signup-pass').val() != $('#signup-pass-compare').val()) {
    $('#signup-pass-compare').next().slideDown().addClass('no-value');
    v = false;
  }
  if (!$('#tc').is(':checked')) {
    $('#tc').addClass('no-value');
    v = false;
  } else {
    $('#tc').removeClass('no-value');
  }
  if (!$('#ac').is(':checked')) {
    $('#ac').addClass('no-value');
    v = false;
  } else {
    $('#ac').removeClass('no-value');
  }
  return v;
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function registerUser(culture, currency, site) {
  console.log(culture, currency, site);
  if (!validateFields())
    return;

  var acc = {};
  acc.email = $('#signup-mail').val().trim();
  acc.password = $('#signup-pass').val().trim();
  acc.affiliateid = document.location.search.indexOf('aid=') > -1 ? document.location.search.split('aid=')[1].split('&')[0] : '';
  acc.campaignid = document.location.search.indexOf('cid=') > -1 ? document.location.search.split('cid=')[1].split('&')[0] : '';
  acc.country = culture.split('-')[1].toUpperCase();
  acc.language = culture.split('-')[0].toLowerCase();

  /* new add for these 3 languages - Charlie */
  if (culture == 'pt-br')
    acc.language = 'pt-br';
  if (culture == 'es-cl')
    acc.language = 'es-cl';
  if (culture == 'es-pe')
    acc.language = 'es-pe';

  console.log('country:' + acc.country);
  console.log('language:' + acc.language);
  /* new add for these 3 languages */

  acc.currency = currency;
  acc.type = 'regular';
  acc.linksystemkey = document.location.search.indexOf('ppincome=') > -1 ? document.location.search.split('ppincome=')[1].split('&')[0] : '';

  /* Hide Button */
  $('#btnOpenAccount').hide();
  $('#submit-error').hide();
  $('#progress-bar').show(); /* Jason */

  $.ajax({
    //url: 'https://bannerflow-feed-builder.azurewebsites.net/api/plainpartners/createaccount2/' + site,
    url: 'https://bannerflow-feed-builder.azurewebsites.net/api/plainpartners/createaccount3/' + site,
    method: 'POST',
    async: true,
    crossDomain: true,
    dataType: 'json',
    data: JSON.stringify(acc),
    /*xhrFields: {
            withCredentials: true
        },*/
    beforeSend: function (request) {
      //request.setRequestHeader("Authorization", "Basic ");
      request.setRequestHeader("Content-Type", "application/json");
    },
    success: function (msg) {
      console.log(msg);
      if (msg.errorCode) {
        // Error
        $('#submit-error').text(msg.message).show();
        $('#btnOpenAccount').show();
        $('#progress-bar').hide(); /* Jason */
      } else {
        // Success
        window.location.href = msg.redirectUrl;
      }
    },
    error: function (err) {
      console.log('Error: ', err);
      $('#btnOpenAccount').show();
      $('#progress-bar').hide(); /* Jason */
    }
  });
}


$(function () {

  var queries = document.location.search.replace('?', '');
  var links = document.getElementsByTagName('a');
  if (queries.length > 0)
    for (var i = 0; i < links.length; i++) {

      if (links[i].href) {
        var linkQ = (links[i].href.indexOf('?') > -1 ? '&' : '?') + queries;
        if (links[i].href.indexOf('#') > -1)
          links[i].href = links[i].href.replace('#', linkQ + '#');
        else
          links[i].href += linkQ;

      }
    }

  if ($('#signup-text').text().trim().length == 0) {
    $('#signup-text').hide();
  }

});