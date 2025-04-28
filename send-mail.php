<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "support@synvestify.in"; // Your support email
    $subject = "New Contact Form Submission - Synvestify";
    
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $mobile = htmlspecialchars($_POST['mobile']);
    $category = htmlspecialchars($_POST['category']);
    $message = htmlspecialchars($_POST['message']);
    
    $body = "You have received a new contact form submission:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Mobile: $mobile\n";
    $body .= "Category: $category\n";
    $body .= "Message:\n$message\n";
    
    $headers = "From: no-reply@synvestify.in\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Thank you for contacting us. We will get back to you soon.'); window.location.href='contact.html';</script>";
    } else {
        echo "<script>alert('Message sending failed. Please try again later.'); window.location.href='contact.html';</script>";
    }
}
?>
