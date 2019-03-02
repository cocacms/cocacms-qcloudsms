"use strict";

const QcloudSms = require("qcloudsms_js");

class Sms {
  constructor(ctx, setting) {
    this.ctx = ctx;
    this.setting = setting;
  }

  async install() {
    return true;
  }

  async uninstall() {
    return true;
  }

  async send(phoneNumber, params) {
    return new Promise((resolve, reject) => {
      var qcloudsms = QcloudSms(this.setting["appid"], this.setting["appkey"]);
      const ssender = qcloudsms.SmsSingleSender();
      ssender.sendWithParam(
        86,
        phoneNumber,
        this.setting["templateId"],
        params,
        this.setting["smsSign"],
        "",
        "",
        (error, response, responseData) => {
          if (!error) {
            resolve();
          } else {
            reject(error);
          }
        }
      );
    });
  }
}

module.exports = Sms;
