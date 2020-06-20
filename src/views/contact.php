<?php include('../helpers/country_info.php'); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <?php 
        /*** Google Tag Manager ***/
        include('../helpers/gtm.php');
    ?>
    <script>
var lang = 'en';
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
</script>
    <meta name="isoCode" content="<?php echo strtolower($country->isoCode) ?>">   
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><%= htmlWebpackPlugin.options.title %></title>   
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
            integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous"> 
    <link rel="canonical" href="https://bitcoin-pro.live/contact" />
    <link rel="shortcut icon" href="/favicon.ico">
</head>
<body class="non_index_page contact_page">
<section class="warning">
    <div class="div-block">
      <p class="paragraph-9"><strong>Due to extremely high media demand, we will close registration as of <script>document.write(today)</script> - HURRY!</p>
    </div>
  </section>
  <header class="header">
    <div class="container w-container">
      <div class="main-header-wrap"><a href="../" aria-current="page" class="link-block w-inline-block w--current"><img src="../assets/logo.png" alt class="logo"></a>
        <div class="exclusive-offer">
          <div class="exclusive-text"><span>EXCLUSIVE OFFER FOR</span><br><span class="text-span exc-2">TRADERS</span> <span class="text-span-6">IN</span> <span class="country-name">YOUR COUNTRY</span></div>
         
        </div>
        <div class="div-block-5 lang-box">
          <div data-delay="0"class="dropdown w-dropdown" onclick="getLang()">
            <div class="dropdown-toggle w-dropdown-toggle"><img src="../assets/us.png" width="21" height="16" alt="en" srcset="../assets/us-p-500.png 500w, ../assets/us.png 640w" sizes="20px" class="image-3">
              <div class="text-block-5">En</div>
              <div class="icon w-icon-dropdown-toggle"></div>
            </div>
            <nav class="dropdown-list w-dropdown-list" id="aas">
              <div class="div-block-32"><img width="20" src="../assets/de.png" alt class="image-11"><a href="?lp=1" class="dropdown-link w-dropdown-link">German</a></div>
              <div class="div-block-32"><img width="20" src="../assets/es.png" srcset="../assets/es-p-500.png 500w, ../assets/es.png 640w" sizes="100vw" alt class="image-11"><a href="?lp=1" class="dropdown-link w-dropdown-link">Spanish</a></div>
              <div class="div-block-32"><img width="20" src="../assets/pl.svg" alt class="image-11"><a href="?lp=1" class="dropdown-link w-dropdown-link">Polish</a></div>
             </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
    <?php 
        /*** Google Tag Manager - no script ***/
        include('../helpers/gtm_no_script.php');
    ?>
    
    <section class="section1" id="top" style="color:black">


        <h1 class="white bold text-center big-font contact-us-header">Contact Us</h1>

        <div class="container">
            <p class="form-header-p">Contact Form:</p>
            <form class="form form-body">
                <div class="credentials-inputs-container">
                    <div class="input-wrapper">
                        <i class="fas fa-user"></i>
                        <input type="text" id="name" class="name" placeholder="Name">
                    </div>
                    <div class="input-wrapper">
                        <i class="fas fa-envelope"></i>
                        <input type="email" id="email" class="email" placeholder="Email">
                    </div>
                </div>
                <div class="input-wrapper">
                    <textarea name="message" id="message" placeholder="Message" cols="30" rows="10"></textarea>
                </div>
                <div class="btn-wrapper">
                    <a href="/" class="btn">SEND MESSAGE</a>
                </div>
            </form>
        </div>
        
    </section>
    
    <div id="footer" class="footer">
    <div class="container w-container">
      <div data-collapse="none" data-animation="default" data-duration="400" role="banner" class="navbar-2 w-nav">
        <nav role="navigation" class="nav-menu-2 w-nav-menu">
          <a href="../account-login/" class="nav-link-4 w-nav-link">Login</a>
          <a href="../about-us/" class="nav-link-4 w-nav-link">About us</a>
          <a href="../terms-conditions/" class="nav-link-5 w-nav-link">Terms and conditions</a><a href="../privacy-policy" class="nav-link-6 w-nav-link">Privacy Policy</a>
          <a href="../cookie-policy/" class="nav-link-6 w-nav-link">cookie policy</a>
        <a href="./" class="nav-link-6 w-nav-link">contact us</a></nav>
      </div><a href="../" aria-current="page" class="w-inline-block w--current"><img src="../assets/logo.png" alt="Cannabis Millionaire Trader" class="image-8"></a></div>
  </div>

  <style>
      .non_index_page.contact_page .section1 {
          background: url(../assets/video-form-blue-bg.jpg) !important;
          padding-top: 20px;
      }
      </style>
</body>
<script>
  
function getLang() { 
    $('#aas').slideDown('slow')
  }
</script>
</html>