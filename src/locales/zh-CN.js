import appLocaleData from "react-intl/locale-data/zh";

const messages = {
    'clock.button.standard': "标准番茄钟", //键值在组件进行国际化时对应的就是id,具体见组件如何使用
    'clock.button.long': '长休息',
    'clock.button.short': '短休息',
    'clock.button.reset': '重置',
    'navi.title': 'AA番茄钟',
    'navi.settings': '设置',
    'settings.title': '设置',
    'settings.enableTickingSound': '开启时钟滴答声音',
    'settings.enableRestTickingSound':'开启休息时钟滴答声音',
    'settings.button.save':'保存',
    'settings.button.reset': '重置',
    'settings.field.pomodoro_duration': '番茄钟时长',
    'settings.field.short_break_duration': '短休息时长',
    'settings.field.long_break_duration': '长休息时长'



}
const zh_CN = {
    locale: 'zh-CN',
    data: appLocaleData,
    messages: messages
};

export default zh_CN;

