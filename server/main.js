import { Meteor } from 'meteor/meteor';
import './publications';

Meteor.startup(() => {
  // code to run on server at startup
});
// var newUser = [
//     {
//         userId: 'dongxie',
//         userName: '东邪西毒',
//         password: '123456',
//         area: '北京 朝阳'
//     },
//     {
//         userId: 'taiyi',
//         password: '123456',
//         userName: '太乙真人',
//         area: '广东 深圳'
//     },
//     {
//         userId: 'hongqi',
//         password: '123456',
//         userName: '洪七公',
//         area: '陕西 西安'
//     },
//     {
//         userId: 'chimei',
//         password: '123456',
//         userName: '魑魅魍魉',
//         area: '山东 青岛'
//     },
//     {
//         userId: 'jiuyang',
//         password: '123456',
//         userName: '九阳神功',
//         area: '广西 桂林'
//     },
//     {
//         userId: 'shenxian',
//         password: '123456',
//         userName: '神仙姐姐',
//         area: '新疆 乌鲁木齐'
//     },
//     {
//         userId: 'dongye',
//         password: '123456',
//         userName: '东野圭吾',
//         area: '日本 大阪'
//     },
//     {
//         userId: 'yellow',
//         password: '123456',
//         userName: '黄药师',
//         area: '青海 格尔木'
//     },
//     {
//         userId: 'jing',
//         password: '123456',
//         userName: '靖哥哥',
//         area: '人间 天堂'
//     },
//     {
//         userId: 'dingdang',
//         password: '123456',
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
