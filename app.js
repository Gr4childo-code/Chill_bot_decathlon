const bot = new Telegraf('5203214477:AAHHRJcLQ-_1lV4yfST9C3EXpiF599nflaQ');
export default bot;

import { Telegraf } from 'telegraf';
import { Moscow } from './City_config/Moscow.config.js';
import { Perm } from './City_config/Perm.config.js';

import { getMoscow, getPerm } from './services/keyboard.services.js';

bot.start(async (ctx) => {
    ctx.reply(
        'Привет, я бот перерывов от магазина 2518, введи /help что бы узнать о моих командах'
    );
});

bot.help(async (ctx) => {
    ctx.reply(
        'Я (Бот) работаю пока что на 2 часовых пояса, если нужно больше, пиши - daniil.samokhin@decathlon.com, либо телега @Gr4childo'
    );
    ctx.reply('Мои команды - /Moscow, /Perm');
});
bot.command('/Moscow', (ctx) => {
    ctx.reply('Теперь нажми на город который у тебя вылез на клавиатуре', getMoscow(), Moscow());
});

bot.command('/Perm', (ctx) => {
    ctx.reply('Теперь нажми на город который у тебя вылез на клавиатуре', getPerm(), Perm());
});

// bot.hears('15', async (ctx) => {
//     let CurrentTime = new Date(ctx.message.date * 1000);

//     let CurrentHours = new Date(ctx.message.date * 1000);

//     CurrentTime.setMinutes(CurrentTime.getMinutes() + 15);

//     if (ctx.message.from.last_name == undefined) {
//         await ctx.deleteMessage(ctx.chat.message_id);
//         await ctx.reply(
//             `${ctx.message.from.first_name} Ушел(ла) на 15 в ${CurrentHours.getHours()}:${
//                 (CurrentHours.getMinutes() < 10 ? '0' : '') + CurrentHours.getMinutes()
//             }, выходит в ${CurrentTime.getHours()}:${
//                 (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
//             }`
//         );
//     } else {
//         await ctx.deleteMessage(ctx.chat.message_id);
//         await ctx.reply(
//             `${ctx.message.from.first_name} ${ctx.message.from.last_name} Ушел(ла) на 15 в ${
//                 CurrentHours.getHours() + 2
//             }:${
//                 (CurrentHours.getMinutes() < 10 ? '0' : '') + CurrentHours.getMinutes()
//             }, выходит в ${CurrentTime.getHours() + 2}:${
//                 (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
//             }`
//         );
//     }
// });

// bot.hears('15', async (ctx) => {
//     let CurrentTime = new Date(ctx.message.date * 1000);

//     let CurrentHours = new Date(ctx.message.date * 1000);

//     CurrentTime.setMinutes(CurrentTime.getMinutes() + 15);

//     if (ctx.message.from.last_name == undefined) {
//         await ctx.deleteMessage(ctx.chat.message_id);
//         await ctx.reply(
//             `${ctx.message.from.first_name} Ушел(ла) на 15 в ${CurrentHours.getHours()}:${
//                 (CurrentHours.getMinutes() < 10 ? '0' : '') + CurrentHours.getMinutes()
//             }, выходит в ${CurrentTime.getHours()}:${
//                 (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
//             }`
//         );
//     } else {
//         await ctx.deleteMessage(ctx.chat.message_id);
//         await ctx.reply(
//             `${ctx.message.from.first_name} ${
//                 ctx.message.from.last_name
//             } Ушел(ла) на 15 в ${CurrentHours.getHours()}:${
//                 (CurrentHours.getMinutes() < 10 ? '0' : '') + CurrentHours.getMinutes()
//             }, выходит в ${CurrentTime.getHours()}:${
//                 (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
//             }`
//         );
//     }
// });

// bot.hears('30', async (ctx) => {
//     let chatId = ctx.from.id;

//     try {
//         setTimeout(() => {
//             users.push(chatId);
//             ctx.telegram.sendMessage(chatId, 'Эй друг, у тебя заканчивается перерыв через 5 минут');
//         }, TwentyFiveMinutesTimeout);
//     } catch (e) {
//         throw new Error(e);
//     }

//     let CurrentTime = new Date(ctx.message.date * 1000);

//     let CurrentHours = new Date(ctx.message.date * 1000);
//     CurrentTime.setMinutes(CurrentTime.getMinutes() + 30);

//     if (ctx.message.from.last_name == undefined) {
//         await ctx.deleteMessage(ctx.chat.message_id);
//         await ctx.reply(
//             `${ctx.message.from.first_name} Ушел(ла) на 30 в ${CurrentHours.getHours()}:${
//                 (CurrentHours.getMinutes() < 10 ? '0' : '') + CurrentHours.getMinutes()
//             }, выходит в ${CurrentTime.getHours()}:${
//                 (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
//             }`
//         );
//     } else {
//         await ctx.deleteMessage(ctx.chat.message_id);
//         await ctx.reply(
//             `${ctx.message.from.first_name} ${
//                 ctx.message.from.last_name
//             } Ушел(ла) на 30 в ${CurrentHours.getHours()}:${
//                 (CurrentHours.getMinutes() < 10 ? '0' : '') + CurrentHours.getMinutes()
//             }, выходит в ${CurrentTime.getHours()}:${
//                 (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
//             }`
//         );
//     }
// });

// bot.hears('Обед', async (ctx) => {
//     let chatId = ctx.from.id;

//     try {
//         setTimeout(() => {
//             users.push(chatId);
//             ctx.telegram.sendMessage(chatId, 'Эй друг, у тебя заканчивается перерыв через 5 минут');
//         }, FiftyFiveMinutesTimeout);
//     } catch (error) {
//         throw new Error(e);
//     }
//     let CurrentTime = new Date(ctx.message.date * 1000);

//     if (ctx.message.from.last_name == undefined) {
//         await ctx.deleteMessage(ctx.chat.message_id);
//         await ctx.reply(
//             `${ctx.message.from.first_name} Ушел(ла) на обед в ${CurrentTime.getHours()}:${
//                 (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
//             }, выходит в ${CurrentTime.getHours() + 1}:${
//                 (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
//             }`
//         );
//     } else {
//         await ctx.deleteMessage(ctx.chat.message_id);
//         await ctx.reply(
//             `${ctx.message.from.first_name} ${
//                 ctx.message.from.last_name
//             } Ушел(ла) на обед в ${CurrentTime.getHours()}:${
//                 (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
//             }, выходит в ${CurrentTime.getHours() + 1}:${
//                 (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
//             }`
//         );
//     }
// });

bot.launch()
    .then((res) => {
        console.log('Bot is started');
        // Perm();
        // Moscow();
        // Spb();
    })
    .catch((err) => {
        console.log(err);
    });

/*
Старт
systemctl start decathlon_bot

Остановка
systemctl stop decathlon_bot

Перезапуск
systemctl restart decathlon_bot

Проверка состояния бота
systemctl status decathlon_bot


*/
