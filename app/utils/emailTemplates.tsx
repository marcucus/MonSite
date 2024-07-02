export const generateEmailTemplate = (name: string, message: string, email: string) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: 'Arial', sans-serif;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          background-color: #f7fafc;
        }
        .header {
          background-color: #00001f;
          color: #fff;
          padding: 10px;
          text-align: center;
          border-radius: 8px 8px 0 0;
        }
        .content {
          padding: 20px;
        }
        .footer {
          text-align: center;
          padding: 10px;
          font-size: 12px;
          color: #a0aec0;
        }
        .button {
          display: inline-block;
          padding: 10px 20px;
          margin: 20px 0;
          background-color: #4f46e5;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>CONTACT - MARQUES ADRIEN</h1>
        </div>
        <div class="content">
          <p>Message de ${name} - ${email},</p>
          <p>${message}</p>
        </div>
        <div class="footer">
          <p>&copy; 2024 Adrien Marques. Tous droits réservés.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};