<?php 
$ToEmail = 'youremail@site.com'; // CHANGE YOUR EMAIL HERE
$EmailSubject = 'Site contact form'; 
$mailheader = "From: ".$_POST["emailAddress"]."\r\n"; 
$mailheader .= "Reply-To: ".$_POST["emailAddress"]."\r\n"; 
$mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
$MESSAGE_BODY = "Name: ".$_POST["fullName"].""; 
$MESSAGE_BODY .= "Email: ".$_POST["emailAddress"].""; 
$MESSAGE_BODY .= "Company: ".$_POST["company"].""; 
$MESSAGE_BODY .= "Message: ".nl2br($_POST["message"]).""; 
mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Failure"); 
?>