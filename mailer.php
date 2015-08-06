<?php
function sentMail($email, $passForEmail, $mailData)
{
    require_once('swiftmailer/lib/swift_required.php');

    // Create message
    $message =
        "You have feedback from " .
        $mailData['name'] . " (email: " . $mailData['email'] . " skype: " . $mailData['skype'] . ") \n\n " .
        $mailData['message'];

    // Create the Transport
    $transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, 'ssl')
        ->setUsername($email)
        ->setPassword($passForEmail);

    // Create the Mailer using your created Transport
    $mailer = Swift_Mailer::newInstance($transport);

    // Create a message
    $message = Swift_Message::newInstance('UI Crystal contact us')//theme of mail
    ->setFrom(array($mailData['email'] => $mailData['name']))
        ->setTo(array($email => 'Info'))
        ->setBody($message);

    $mail = $mailer->send($message);

    return $mail;
}

function writeDataToFile($fileName, $text)
{
    $current = file_get_contents($fileName);
    $current .= $text . "\n";
    file_put_contents($fileName, $current);
}

$contactFormData = $_POST['contactUs'];

var_dump($contactFormData);
if (!empty($contactFormData)) {
    writeDataToFile('emailList.txt', $contactFormData['email']. ' ' . $contactFormData['skype']);
    if (sentMail('uicrystalinfo@gmail.com', 'eg3s22dA', $contactFormData)) {

        return [
            'status' => 'ok'
        ];
    } else {

        return [
            'status' => 'fail'
        ];
    }
}
exit();
