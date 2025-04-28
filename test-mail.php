<?php
$to = "synvestify@gmail.com"; // <-- Replace with your email
$subject = "Testing PHP Mail Function";
$message = "This is a test email from Synvestify hosting.";
$headers = "From: test@synvestify.in";

if (mail($to, $subject, $message, $headers)) {
    echo "Mail sent successfully!";
} else {
    echo "Mail sending failed.";
}
?>
