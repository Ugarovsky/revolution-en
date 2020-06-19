<?php 
	// require_once __DIR__.'/../../vendor/autoload.php';
	// use GeoIp2\Database\Reader; // https://maxmind.github.io/GeoIP2-php

	// // do we get proxy ip from cloudflare? ask for real ip then
	// if (!empty($_SERVER["HTTP_CF_CONNECTING_IP"]) && filter_var($_SERVER["HTTP_CF_CONNECTING_IP"], FILTER_VALIDATE_IP)) {
	// 	$_SERVER["REMOTE_ADDR"] = $_SERVER["HTTP_CF_CONNECTING_IP"];
	// }

	// // if localhost take random IP
	// $clientIP = ($_SERVER['REMOTE_ADDR'] == '127.0.0.1') ? '84.194.10.45' : $_SERVER['REMOTE_ADDR'];
	// $geoDBLocation = ($_SERVER['REMOTE_ADDR'] == '127.0.0.1') ? '/GeoIP2-City.mmdb' : '/home/forge/geoip/GeoIP2-City.mmdb';

	// $reader = new Reader($geoDBLocation);
	// $record = $reader->city($clientIP);

	// $country = $record->country;
?> 