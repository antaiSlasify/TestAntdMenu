const _zh_tw = 'zh-tw';
const _zh_cn = 'zh-cn';
const _en_us = 'en-us';

export type LangCode = typeof _zh_tw | typeof _zh_cn | typeof _en_us;

export const constant = {
  zh_tw: _zh_tw as LangCode,
  zh_cn: _zh_cn as LangCode,
  en_us: _en_us as LangCode,
  PATH_TW: `/${_zh_tw}`,
  PATH_CN: `/${_zh_cn}`,
  PATH_EN: `/${_en_us}`,
};

export const localePath = {
  'zh-TW': constant.PATH_TW,
  [_zh_tw]: constant.PATH_TW,
  'zh-CN': constant.PATH_CN,
  [_zh_cn]: constant.PATH_CN,
  'en-US': constant.PATH_EN,
  [_en_us]: constant.PATH_EN,
};
