module.exports = () => {
  return async (ctx, next) => {
    const start = Date.now();
    console.log("ctx.request.url")

    if (
      ctx.request.url.includes("/api/contact-forms") &&
      ctx.request.method === "POST"
    ) {
      console.log(ctx.request.body);
      const { name, email, subject, message } = ctx.request.body.data;
      const emailTemplate = {
        subject: subject ? subject : "No Subject",
        text: `${name},${email},${subject},${message}`,
        html: `<!DOCTYPE html>
        <html>
          <head>
            <style>
              table {
                font-family: arial, sans-serif;
                border-collapse: collapse;
              }
        
              td,
              th {
                border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;
              }
        
              tr:nth-child(even) {
                background-color: #dddddd;
              }
            </style>
          </head>
          <body>
            <h2>
              <u><i>Contact form send from Islamic University Site</i></u>
            </h2>
            <table>
              <tr>
                <td><b>Name</b></td>
                <td>${name}</td>
              </tr>
              <tr>
                <td><b>Email</b></td>
                <td>${email}</td>
              </tr>
              <tr>
                <td><b>Message</b></td>
                <td>${message}</td>
              </tr>
            </table>
          </body>
        </html>
        `,
      };
      await strapi.plugins["email"].services.email.sendTemplatedEmail(
        {
          to: "muddasir009@gmail.com",
          // from: is not specified, so it's the defaultFrom that will be used instead
        },
        emailTemplate
      );
    }
    await next();
  };
};
