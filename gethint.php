<?php
// Array with names
$a[] = "Anna";
$a[] = "Brittany";
$a[] = "Cinderella";
$a[] = "Diana";
$a[] = "Eva";
$a[] = "Fiona";
$a[] = "Gunda";
$a[] = "Hege";
$a[] = "Inga";
$a[] = "Johanna";
$a[] = "Kitty";
$a[] = "Linda";
$a[] = "Nina";
$a[] = "Ophelia";
$a[] = "Petunia";
$a[] = "Amanda";
$a[] = "Raquel";
$a[] = "Cindy";
$a[] = "Doris";
$a[] = "Eve";
$a[] = "Evita";
$a[] = "Sunniva";
$a[] = "Tove";
$a[] = "Unni";
$a[] = "Violet";
$a[] = "Liza";
$a[] = "Elizabeth";
$a[] = "Ellen";
$a[] = "Wenche";
$a[] = "Vicky";
$a[] = "Zethros";
$a[] = "Yisvalm";
$a[] = "Xin";
$a[] = "Warvt";
$a[] = "Vesta";
$a[] = "Uro";
$a[] = "Tallart";
$a[] = "Salvic";
$a[] = "Reston";
$a[] = "Quagmire";
$a[] = "Penestro";
$a[] = "Optimos";
$a[] = "Notch";
$a[] = "Moloch";
$a[] = "Listlen";
$a[] = "Kistrons";
$a[] = "Jenkis";
$a[] = "Icanos";
$a[] = "Hurbid";
$a[] = "Garland";
$a[] = "Fenworth";
$a[] = "Edimarlg";
$a[] = "Dathlas";
$a[] = "Crestark";
$a[] = "Baryos";
$a[] = "Aldemars"

// get the q parameter from URL
$q = $_REQUEST["q"];

$hint = "";

// lookup all hints from array if $q is different from ""
if ($q !== "") {
  $q = strtolower($q);
  $len=strlen($q);
  foreach($a as $name) {
    if (stristr($q, substr($name, 0, $len))) {
      if ($hint === "") {
        $hint = $name;
      } else {
        $hint .= ", $name";
      }
    }
  }
}

// Output "no suggestion" if no hint was found or output correct values
echo $hint === "" ? "no suggestion" : $hint;
?>