<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email</title>
    <style>
        /* Mendefinisikan warna primary */
        :root {
            --primary: #6366f1; /* Warna utama */
        }

        body, table, td, a {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }

        table {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            border-spacing: 0;
        }

        .email-container {
            background-color: #f4f4f4;
            padding: 20px;
        }

        .email-header {
            text-align: center;
            padding: 20px;
            background-color: var(--primary); /* Menggunakan warna primary */
            color: white;
        }

        .email-header img {
            max-width: 100%;
            height: auto;
        }

        .email-body {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
        }

        .email-footer {
            text-align: center;
            padding: 10px;
            background-color: #333;
            color: #fff;
            font-size: 14px;
            border-radius: 8px;
        }

        .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: var(--primary); /* Menggunakan warna primary untuk tombol */
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
            margin-top: 10px;
        }

        .btn:hover {
            background-color: #5a5ce6; /* Warna hover sedikit lebih gelap */
        }
    </style>
</head>
<body>
    <table>
        <tr>
            <td>
                <div class="email-container">
                    <!-- Header dengan Gambar -->
                    <div class="email-header">
                        <img src="https://bbppmpvbmti.kemdikbud.go.id/sipp/wp-content/uploads/2024/05/logo-bmti-300x300-1.png" alt="BMTI LOGO">
                    </div>

                    <div class="email-body">
                      <p>Dear {{ $sender }}p>
                      <p>We value your opinion! Please take a moment to fill out our survey. Your feedback helps us improve our service.</p>
                      <p>Click the button below to start the survey:</p>
                      <a href="{{ $formLink }}" class="btn">Access the Form</a>
                      <p>If you have any questions, feel free to reach out to us.</p>
                  </div>

                    <!-- Footer -->
                    <div class="email-footer">
                        <p>&copy; 2024 Your Company. All rights reserved.</p>
                    </div>
                </div>
            </td>
        </tr>
    </table>
</body>
</html>
