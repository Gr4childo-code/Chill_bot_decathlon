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
