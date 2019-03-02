"use strict";

module.exports = {
  name: "腾讯云短信",
  author: "rojer",
  mail: "rojerchen@qq.com",
  /**
   * 1 通用
   * 2 上传
   */
  type: 1,
  config: [
    /**
     * 单行文本 varchar
     * 整数 int
     * 小数 decimal
     * 多行文本 text
     * 单选 radio
     * 选择框 select
     * 多选 checkbox
     * 时间选择器 time
     * 日期选择器 date
     * 日期时间选择器 datetime
     * 图片 img
     * 文件 file
     * 富文本 richtext
     * 评分 rate
     * 开关 switch
     */
    {
      key: "appid",
      name: "短信AppID",
      type: "varchar",
      rules: [{ required: true, message: "请输入" }]
    },
    {
      key: "appkey",
      name: "短信AppKey",
      type: "varchar",
      rules: [{ required: true, message: "请输入" }]
    },
    {
      key: "smsSign",
      name: "短信签名",
      type: "varchar",
      rules: [{ required: true, message: "请输入" }]
    },
    {
      key: "templateId",
      name: "模板ID",
      type: "varchar",
      rules: [{ required: true, message: "请输入" }]
    }
  ]
};
