const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AeAy7UNigKKO0PLvh65Oi7hWLVb4nld_BTwmg7atZGIsOJUPtDvmxWQlGrBewbLLO6njg0vFCKEVbuIf",
  client_secret: "EDMoZPOY12Req0I2h_JTP82tZPo8wBHCvYCNrrFxvO4PwhMyV8wx8qASpK6M-Ruy8bQhQDXjKFaxRx_o",
});

module.exports = paypal;
