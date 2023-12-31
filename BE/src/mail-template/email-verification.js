function verificationAccountRegister(username, otp) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verifikasi OTP</title>
    </head>
    <body style="font-family: 'Arial', sans-serif;">
    
        <h2>Halo ${username},</h2>
    
        
        <p>Ini adalah OTP (One-Time Password) untuk verifikasi email pada akun anda:</p>
    
        <h3>${otp}</h3>
    
        <p>Gunakan OTP ini untuk mengonfirmasi identitas Anda. Jangan pernah berikan OTP ini pada orang lain</p>
    
        <p>Terima kasih!</p>

        <p>Zeta, Admin Trashtalk</p>
    
    </body>
    </html>
    `;
}

module.exports = verificationAccountRegister;
