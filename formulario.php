<?php
if (isset($_POST['date2'], $_POST['dias'])) {
  $dias = (int) $_POST['dias'];  // converte dias para inteiro
  $data = date_create($_POST['date2']);  // cria um objeto data usando a data enviada
  $data->modify("+{$dias} days"); // soma dias a data
  echo $data->format("d/m/Y");      // retorna a data formatada
}

?>


<?php
if (isset($_POST['date3'], $_POST['date4'])) {
  $data3 = date_create($_POST['date3']);  // cria um objeto data usando a data enviada 
  $data4 = date_create($_POST['date4']);
  $diff = $data3->diff($data4);    // diferença de dias entre data3 e data4
 echo $diff->days;      // retorna a diferença de dias
}

?>
