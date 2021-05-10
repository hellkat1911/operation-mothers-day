const fs = require('fs');
const path = require('path');
const VonageSDK = require('@vonage/server-sdk');

exports.test = (req, res) => {
  return res.status(200).send('OKAY');
};

exports.getSelection = (req, res) => {
  const buffer = fs.readFileSync(path.resolve('api/state.json'));
  const selection = JSON.parse(buffer);
  return res.status(200).json(selection);
};

exports.clearSelection = (req, res) => {
  const reset = JSON.stringify({ selection: null });
  fs.writeFileSync(path.resolve('api/state.json'), reset, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Selection cleared successfully');
  });

  return res.status(200).send('OKAY');
};

exports.sendSms = (req, res) => {
  const { value, label } = req.body;

  const selection = JSON.stringify({ selection: { label, value } });
  const message = `
      FLASH: Operator #0000b33, you have selected ${label} for your debriefing location. Report to your exfil officer and follow his instructions carefully. This message will self-destruct.
      -- HQ
    `;

  fs.writeFileSync(path.resolve('api/state.json'), selection, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Selection written successfully');
  });

  return res.json({ status: 'sent', message });

  if (!value || !label) {
    return res.status(400).json({ err: 'Must include a valid selection' });
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
