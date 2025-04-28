<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $mobile = htmlspecialchars($_POST['mobile']);
    $category = htmlspecialchars($_POST['category']);
    $message = htmlspecialchars($_POST['message']);

    $to = "support@synvestify.in";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMobile: $mobile\nCategory: $category\nMessage: $message";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message sending failed.";
    }
}
?>
