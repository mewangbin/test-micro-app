/*
 * @Author: me.wangbin
 * @Description: 首页处理
 */
import { TargetOptions } from '@angular-builders/custom-webpack';

export default (targetOptions: TargetOptions, indexHtml: string) => {
  const i = indexHtml.indexOf('</head>');
  const config = `<script src="assets/static.config.js"></script>`;
  return `${indexHtml.slice(0, i)}${config}${indexHtml.slice(i)}`;
};
