---
permalink: /bitrix
---
<?php

$getBPList = 'https://b24-hk0f7x.bitrix24.ru/rest/1/ooiqfalm5isnmh86/bizproc.workflow.instances';
$queryData = http_build_query(array(
  "SELECT" => array('ID','DOCUMENT_ID','TEMPLATE_ID'),
  "FILTER" => array('DOCUMENT_ID'=>"DEAL_209",'TEMPLATE_ID'=>"53")
));

$result = executeHook($getBPList, $queryData, true);
if(count($result["result"])){
  $taskId = $result["result"][0]["ID"];
  echo $taskId."\n";
  $queryUrl = 'https://b24-hk0f7x.bitrix24.ru/rest/1/ooiqfalm5isnmh86/bizproc.workflow.terminate';
  $queryData1 = http_build_query(
    array("ID" => $taskId,
    "STATUS" => 'Процесс остановлен, т.к. дата была изменена'
  ));
  executeHook($queryUrl, $queryData1, false);
  echo "done"."\n";
}else{
  echo "ok"."\n";
}

function executeHook($url,$data,$isReturn){
  $curl = curl_init();
  curl_setopt_array($curl, array(
    CURLOPT_SSL_VERIFYPEER => 0,
    CURLOPT_POST => 1,
    CURLOPT_HEADER => 0,
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => $url,
    CURLOPT_POSTFIELDS => $data,
  ));

  $result = curl_exec($curl);
  curl_close($curl);

  if ($isReturn == true) {
    return json_decode($result, true);
  }
}

?>
