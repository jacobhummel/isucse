<?php 
$ToEmail = 'youremail@site.com';  //CHANGE YOUR EMAIL HERE
$EmailSubject = 'Anchorra Footer Subscribe'; 
$mailheader = "From: ".$_POST["email"]."\r\n"; 
$mailheader .= "Reply-To: ".$_POST["email"]."\r\n"; 
$mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
$MESSAGE_BODY .= "Email: ".$_POST["email"].""; 
mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Failure"); 
?>