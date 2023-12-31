function changeEmailTemplate(username, otp) {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verifikasi Email Baru</title>
  </head>
  
  <body style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
  
    <h2>Verifikasi Email Baru</h2>
    <br>
    <p>Halo ${username},</p>
    <p>Kami mendeteksi permintaan untuk mengganti email pada akun Anda.</p>
  
    <p>Berikut adalah kode OTP Anda:</p>
    <h3>${otp}</h3>
  
    <p>Harap gunakan kode ini untuk menyelesaikan proses verifikasi.</p>
  
    <p>Jika Anda tidak melakukan perubahan ini, abaikan pesan ini.</p>
  
    <p>Terima kasih,</p>

    <p>Zeta, Admin Trashtalk</p>
  
  </body>
  
  </html>
  `;
}

module.exports = changeEmailTemplate;
