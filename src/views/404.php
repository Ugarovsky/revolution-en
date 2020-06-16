<?php header('X-Robots-Tag: noindex, nofollow', true); ?>


<?php include('../helpers/country_info.php'); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <?php 
        /*** Google Tag Manager ***/
        include('../helpers/gtm.php');
    ?>
    <meta name="isoCode" content="<?php echo strtolower($country->isoCode) ?>">   
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>404 - Page Not Found</title>    
    <link rel="shortcut icon" href="/favicon.ico">
</head>
<body class="non_index_page">
    <?php 
        /*** Google Tag Manager - no script ***/
        include('../helpers/gtm_no_script.php');
    ?>
    
    
    <section class="section1" id="top">
        <?php
            include('../partials/header.php');
        ?>
    </section>
    
    <!-- JOIN US SECTION-1 START -->
    <section class="join-us-section join-us-section-1 text-center">
        <div class="container">
            

                <h1 style="font-size: 80px;font-weight: bold;margin-bottom: 30px;">
                    404
                </h1>

                <h3 style="font-size: 30px;margin-bottom: 30px;">
                    Page Not Found
                </h3>

                <p style="font-size: 21px;line-height: 180%;">
                    Unfortunately, we couldn’t find the page you tried to view.<br />
                    Please <a href="/">Click Here</a> to visit our Home Page.
                </p>

        </div>
    </section>
    <!-- JOIN US SECTION-1 END -->


    <?php include('../partials/footer.php'); ?>


</body>

</html>