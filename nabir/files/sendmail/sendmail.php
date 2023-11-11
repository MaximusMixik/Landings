
<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';
	require 'phpmailer/src/SMTP.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('uk', 'phpmailer/language/');
	$mail->IsHTML(true);

	$mail->isSMTP();                                            //Send using SMTP
	$mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
	$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
	$mail->Username   = 'maximus.mixik@gmail.com';                     //SMTP username
	// $mail->Password   = 'efhlwwxpwdshwexu';                               //SMTP password
	$mail->Password   = 'xdjkcqfzzocaslca';                               //SMTP password
	$mail->SMTPSecure = 'TLS';            //Enable implicit TLS encryption
	$mail->Port       = 587;                 

	//Від кого лист
	$mail->setFrom('maximus.mixik@gmail.com'); // Вказати потрібний E-mail
	//Кому відправити
	$mail->addAddress('neon8525@gmail.com '); // Вказати потрібний E-mail
	//Тема листа
	$mail->Subject = 'Повідомлення з сайту"';

	//Тіло листа
	$body = '<h1>Данні користувача</h1>';

		if(trim(!empty($_POST['user_name']))){
		$body.= 	' <p> <strong>Ім*я:</strong> ' . $_POST['user_name'] . '</p>';
	}	
	if(trim(!empty($_POST['phone_number']))){
		$body.= 	' <p> <strong>Номер телефону:</strong> ' . $_POST['phone_number'] . '</p>';
	}	
		if(trim(!empty($_POST['value']))){
		$body.= 	' <p> <strong>id товара</strong> ' . $_POST['value'] . '</p>';
	}	
	
	/*
	//Прикріпити файл
	if (!empty($_FILES['image']['tmp_name'])) {
		//шлях завантаження файлу
		$filePath = __DIR__ . "/files/sendmail/attachments/" . $_FILES['image']['name']; 
		//грузимо файл
		if (copy($_FILES['image']['tmp_name'], $filePath)){
			$fileAttach = $filePath;
			$body.='<p><strong>Фото у додатку</strong>';
			$mail->addAttachment($fileAttach);
		}
	}
	*/

	$mail->Body = $body;

	//Відправляємо
	if (!$mail->send()) {
		$message = 'Error';
	} else {
		$message = 'Data sent';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>