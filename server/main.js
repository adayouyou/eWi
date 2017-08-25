import { Meteor } from 'meteor/meteor';
import './publications';

Meteor.startup(() => {
  // code to run on server at startup
});
// var newUser = [
//     {
//         userId: 'dongxie',
//         userName: '东邪西毒',
//         area: '北京 朝阳'
//     },
//     {
//         userId: 'taiyi',
//         userName: '太乙真人',
//         area: '广东 深圳'
//     },
//     {
//         userId: 'hongqi',
//         userName: '洪七公',
//         area: '陕西 西安'
//     },
//     {
//         userId: 'chimei',
//         userName: '魑魅魍魉',
//         area: '山东 青岛'
//     },
//     {
//         id: 'jiuyang',
//         userName: '九阳神功',
//         area: '广西 桂林'
//     },
//     {
//         userId: 'shenxian',
//         userName: '神仙姐姐',
//         area: '新疆 乌鲁木齐'
//     },
//     {
//         userId: 'dongye',
//         userName: '东野圭吾',
//         area: '日本 大阪'
//     },
//     {
//         userId: 'yellow',
//         userName: '黄药师',
//         area: '青海 格尔木'
//     },
//     {
//         userId: 'jing',
//         userName: '靖哥哥',
//         area: '人间 天堂'
//     },
//     {
//         userId: 'dingdang',
//         userName: '叮叮当当',
//         area: '大唐 西域'
//     },
// ];
// try{
//     ChatUser.remove({});
//     newUser.forEach((key)=>{
//         console.log(key);
//         ChatUser.insert(key);
//     });
// } catch (e) {
//     throw new Error(e);
// }
