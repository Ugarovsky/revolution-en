<?php header('X-Robots-Tag: noindex, nofollow', true); ?>



<!DOCTYPE html>
<html lang="en">
<head>
<script src="https://kit.fontawesome.com/a5598cee1d.js" crossorigin="anonymous"></script>

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
        <div class="container c404">
            

                <h1>
                    404
                </h1>

                <h3>
                    Page Not Found
                </h3>

                <p>
                    Unfortunately, we couldn’t find the page you tried to view.<br />
                    Please <a href="/">Click Here</a> to visit our Home Page.
                </p>

        </div>
    </section>


</body>

</html>