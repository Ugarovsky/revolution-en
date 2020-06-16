<!DOCTYPE html><html lang="en"><head>
    <link rel="shortcut icon" href="./assets/favicon.ico">


    <?php 
      	
          $name = 'The Bitcoin App'; /*** the name of site, e.g. The Bitcoin App ***/
          $title = 'Bitcoin Revolution Login - Bitcoin Revolution App Sign In & Set Up'; /*** the title of the site, e.g. The Official Bitcoin App Site 2019 ***/
          $description = 'Login to your Bitcoin Revolution Account. Already a member? Sign in here and join us!'; 
          /*** Google Tag Manager ***/
            include('snippets/gtm.php');
    ?>
      
      
       <meta charset="utf-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
       <meta name="isoCode" content="<?php echo strtolower($country->isoCode) ?>">
       <meta name="description" content="<?php echo $description ?>">
      <title><?php echo $title; ?></title>
      
      <link rel="shortcut icon" href="/favicon.ico">
      <link rel="canonical" href="https://<?php echo $_SERVER['SERVER_NAME'] ?>" />
  
      <!-- 
      <meta name="msvalidate.01" content="" />
      <meta name="google-site-verification" content="" /> 
      -->
  
      <!-- twitter card -->
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="https://<?php echo $_SERVER['SERVER_NAME'] ?>" />
      <meta name="twitter:title" content="<?php echo $title;?>" />
      <meta name="twitter:description" content="<?php echo $description ?>" />
      <meta name="twitter:image"content="https://<?php echo $_SERVER['SERVER_NAME'] ?>/assets/logo.png" />
  
      <!-- open graph -->
      <meta property="og:type" content="website" />
      <meta property="og:title" content="<?php echo $title ?>" />
      <meta property="og:description" content="<?php echo $description ?>" />
      <meta property="og:url" content="https://<?php echo $_SERVER['SERVER_NAME'] ?>" />
      <meta property="og:site_name" content="https://<?php echo $_SERVER['SERVER_NAME'] ?>" />
      <meta property="og:image" content="https://<?php echo $_SERVER['SERVER_NAME'] ?>/assets/logo.png" />
  
</head>

<body class="non_index_page login_page">
  

    <section class="headerSection">
        <div class="container-fluid">
            <div class="headerRowContainer">
                <div class="headerItemWrapper header-left-item">
                    <div>
                        <span class="header-number-span"><span data-i18n>Number #</span>
                            <span class="header-dynamic-number">
                                <span class="dynamicGeneratedNumber">23</span>
                            </span>
                        </span>
                        <br> <span data-i18n>OF 30 LIMITED PLACES</span></div>
                </div>
                <div class="header-center-item" style="width:50%;text-align: center;">
                <a href="./index.php">
                    <img src="./assets/logo.png" width="25%" alt="">
                    </a>
                </div>
                <div class="headerItemWrapper header-right-item">
                    <div>
                        <span class="header-number-span">
                            <span class="countDown" id="countdown-span2">10:00</span>
                        </span>
                        <br>
                        <span data-i18n>REGISTRATION COUNTDOWN</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="videoSection" style="background-image: url(./assets/video-form-blue-bg.jpg); padding:10%;">
        <h1>Bitcoin Revolution App Login</h1>
        <p>Who said you have to be a seasoned Wall Street broker in order to get rich on the foreign exchange market? Gaining capital has never been easier thanks to Bitcoin Revolution, the most accurate cryptocurrency trading software in the industry.</p>
    <p>You don't have to be a financial expert to use cutting-edge investment technology and make money trading Bitcoin. Our automated app does it all for you by analyzing the foreign exchange market and identifying the most lucrative buying and selling points. All you have to do is sit back, relax, and watch your fortune come in.</p>
    </section>

    <section class="form-section">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <div class="form-container">
                        <div class="formHeader" style="background-image:url(./assets/form-header-blue-bg.jpg)">
                            <h2>Aleady a member?</h2>
                            <p>Use the form below to sign to your account.</p>
                        </div>
                        <div class="formwrap-outer">
                            <div class="formwrap">        
                                <div>

                                    <form style="background-image: url(./assets/form-bg.jpg);">

	<div class="alert alert-danger d-none" role="alert"></div>

	<div class="input-wrapper form-group">
		<input name="first_name" class="form-control" placeholder="First Name" type="text">
		<span class="error"></span>
	</div>

	<div class="input-wrapper form-group">
		<input name="last_name" class="form-control" placeholder="Last Name" type="text">
		<span class="error"></span>
	</div>

	<div class="input-wrapper form-group">
		<input name="email" class="form-control" placeholder="Email" type="email">
		<span class="error"></span>
	</div>

	<div class="input-wrapper form-group" style="position: relative;">
		<input name="password" class="form-control" placeholder="Password" type="password">
		<span class="error"></span>
	</div>

	<div class="input-wrapper form-group">
		<input class="phone form-control" name="phone" type="text" placeholder="phone...">
	</div>

	<input type="hidden" name="funnel" value="bitcoins-pro">
	<input type="hidden" name="affid" value="2114">
	<input type="hidden" name="_ip" value="144.76.58.48">

	<div class="form-group">
		<button class="register blue-bck registerBtn white uppercase montserrat btn_register" type="submit">LOGIN</button>
	</div>

</form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="secondFormSection" style="background-image: url(./assets/features-section-blue-bg.jpg); padding:50px 5%;">
        <h2>Want To Join Bitcoin Revolution?</h2>
        <p>Join Bitcoin Revolution today and get ahead on the path towards authentic financial freedom!</p>
        <div>
        <a data-params href="?lp=1" class="registerBtn registerBtn-2" data-i18n="Get access now">REGISTER HERE</a>
</div>
<br><br><br>
        <p>As far as the initial investment is concerned, you don’t need to be rich to start trading with Bitcoin Revolution. By funding your account with as little as $250 to begin with, you can get back more than triple the amount in profits in just one day.</p>
        <p>There are certainly many pros to trading, but what about the cons? Human errors are perhaps the most notable drawback when it comes to trading any type of currency. Stories of accomplished and competent traders going broke after one rash decision or ill-advised investment are unfortunately quite common when it comes to forex.</p>
        <p>However, you don’t need to worry about life-altering mistakes when using the Bitcoin Revolution. The app and software our website operates on were developed by a team of financial experts and professional programmers to ensure accurate results every time. With the highest success rate on the market of over 99%, Bitcoin Revolution is your one way ticket to an affluent life where no luxury will be out of your reach.</p>
        <p>Join Bitcoin Revolution today and get ahead on the path towards authentic financial freedom!</p>
    </section>

  
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 text-center">
                <br>
                <p>Risk Note: Trading has the potential to be a highly profitable activity when pursued correctly. However, initial investors are advised to keep in mind that it also involves the risk of partial or total capital loss. Therefore, we first of all strongly recommend you to thoroughly read our disclaimer, as well as the Bitcoin Revolution terms and conditions before funding your account and making any transactions.  Second of all, we advise you to consider your country’s capital gain tax liability. Soliciting United States citizens to purchase and trade commodity options is illegal unless they are listed on a CFTC-registered exchange or otherwise legally exempt.</p>
                <br>        
                <ul class="footer-ul" style="list-style: none" itemscope>
                            <li itemprop="name"><a itemprop="url" id="home" data-params href="../" data-i18n>Home Page</a></li>
                            <li itemprop="name"><a itemprop="url" id="about" data-params href="../about" data-i18n>About</a></li>
                            <li itemprop="name"><a itemprop="url" id="contact" data-params href="?lp=1" data-i18n>Contact Us</a></li>
                            <li itemprop="name"><a itemprop="url" id="terms" target="_blank" href="?lp=1" data-i18n>Terms</a></li>
                            <li itemprop="name"><a itemprop="url" id="privacy-policy" target="_blank" href="?lp=1" data-i18n>Privacy Policy</a></li>
                            <li itemprop="name"><a itemprop="url" id="login" data-params href="./" data-i18n>Login</a></li>
                        </ul>
                </div>
            </div>
        </div>
    </footer> 
<div id="openModalLoading" class="modalDialog">
    <div>
        <div class="loading-spinner"></div>
    </div>
    <div class="loading-text">Connecting you to your broker...</div>
</div>

</body></html>