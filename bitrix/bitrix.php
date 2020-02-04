<?php
  $queryUrl = 'https://b24-hk0f7x.bitrix24.ru/rest/1/ooiqfalm5isnmh86/bizproc.workflow.terminate';
  $queryData = http_build_query(array());

  $curl = curl_init();
  curl_setopt_array($curl, array(
    CURLOPT_SSL_VERIFYPEER => 0,
    CURLOPT_POST => 1,
    CURLOPT_HEADER => 0,
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => $queryUrl,
    CURLPOT_POSTFIELDS => $queryData,
  ));

  $result = curl_exec($curl);
  curl_close($curl);
  
?>
