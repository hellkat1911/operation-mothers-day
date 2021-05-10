const VonageSDK = require('@vonage/server-sdk');

exports.test = (req, res) => {
  return res.status(200).send('OKAY');
};

exports.send = (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ err: 'Must include a valid message' });
  }

  const vonage = new VonageSDK({
    apiKey: process.env.VONAGE_API_KEY,
    apiSecret: process.env.VONAGE_API_SECRET,
  });

  vonage.message.sendSms(
    process.env.FROM,
    process.env.TO,
    message,
    (err, responseData) => {
      if (err) {
        return res.status(500).json({ err });
      } else {
        if (responseData.messages[0]['status'] === '0') {
          return res.json({ status: 'sent', message });
        } else {
          return res
            .status(500)
            .json({ err: responseData.messages[0]['error-text'] });
        }
      }
    }
  );
};
