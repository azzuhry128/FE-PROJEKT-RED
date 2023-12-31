function forgetPassword(verificationCode) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Lupa Password</title>
  </head>
  <body style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
  
      <h2>Lupa Password?</h2>
      <p>Kami mendeteksi permintaan pengaturan ulang password untuk akun Anda.</p>
  
      <p>Berikut adalah kode verifikasi Anda:</p>
      
      <h3 style="color: rgb(44, 218, 87);">${verificationCode}</h3>
  
      <p>Masukkan kode ini pada formulir pengaturan ulang password Anda.</p>
  
      <p>Terima kasih!</p>
  
      <p>Zeta, Admin Trashtalk</p>
  
  </body>
  </html>
  `;
}

module.exports = forgetPassword;
