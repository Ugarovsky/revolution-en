<?php

require "./helpers/country_info.php";

use GuzzleHttp\Client;

use GuzzleHttp\Exception\RequestException;

$data = [
    'affid' => 91,
    'funnel' => 'bitcoin-pro',
    '_ip' => $clientIP,
    // 'test' => 459,
    // 'test_lead' => 1
];

$requestData = array_merge($_POST, $data);

$httpClient = new Client();

try {
    $response = $httpClient->request('POST', 'https://api.secureleadsnow.com/leads', [
        'form_params' => $requestData,
        'timeout' => 45
    ]);

    $responseBody = json_decode($response->getBody()->getContents());
    header('HTTP/1.1 200 Success');
    header('Content-Type: application/json');
} catch (RequestException $e) {
    $responseBody = json_decode($e->getResponse()->getBody());
    $responseBody['errors'][0] = 'An error occurred during registration.';
    header('HTTP/1.1 400 Bad Request');
    header('Content-Type: application/json');
} finally {
    echo json_encode($responseBody);
}
