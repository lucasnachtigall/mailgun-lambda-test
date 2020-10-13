const apiKey = process.env.MAILGUN_API_KEY;
const domain = process.env.DOMAIN;
const mailgun = require("mailgun-js")({ apiKey, domain });


exports.handler = async (event, context, callback) => {
    
    const data = {
        from: event.from,
        to: event.to,
        subject: event.subject,
        text: event.text
    }
    
    let response;
    await mailgun.messages().send(data).
        then(res => {
            console.log(res.message);
            response = {
                statusCode: 200,
                body: JSON.stringify(res),
            };
        }).
        catch(err => {
            console.log("Error: ", err.message)
            response = {
                statusCode: 500,
                body: JSON.stringify(err),
            };
        });

    return response;
};
