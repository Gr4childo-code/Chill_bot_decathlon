import bot from '../app.js';
import { getPererivMSC } from '../services/keyboard.services.js';

export const Moscow = () => {
    bot.hears('Москва', async (ctx) => {
        ctx.reply('Выбери перерыв ', getPererivMSC());
    });

    let users = [];

    const TenMinuteTimeout = 600000;
    const TwentyFiveMinutesTimeout = 1500000;
    const FiftyFiveMinutesTimeout = 3300000;

    bot.use(async (ctx, next) => {
        console.time(`Processing update ${ctx.update.update_id}`);
        await next(); // runs next middleware
        // runs after next middleware finishes
        console.timeEnd(`Processing update ${ctx.update.update_id}`);
    });

    bot.hears('15 МСК', async (ctx) => {
        let chatId = ctx.from.id;

        setTimeout(async () => {
            users.push(chatId);
            try {
                return await ctx.telegram.sendMessage(
                    chatId,
                    'Эй друг, у тебя заканчивается перерыв через 5 минут'
                );
            } catch (err) {
                console.log(err);
            }
        }, TenMinuteTimeout);

        let CurrentTime = new Date(ctx.message.date * 1000);

        let CurrentHours = new Date(ctx.message.date * 1000);

        CurrentTime.setMinutes(CurrentTime.getMinutes() + 15);

        if (ctx.message.from.last_name == undefined) {
            await ctx.deleteMessage(ctx.chat.message_id);
            await ctx.reply(
                `${ctx.message.from.first_name} Уходит на 15 в ${CurrentHours.getHours()}:${
                    (CurrentHours.getMinutes() < 10 ? '0' : '') + CurrentHours.getMinutes()
                }, выходит в ${CurrentTime.getHours()}:${
                    (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
                }`
            );
        } else {
            await ctx.deleteMessage(ctx.chat.message_id);
            await ctx.reply(
                `${ctx.message.from.first_name} ${
                    ctx.message.from.last_name
                } Уходит на 15 в ${CurrentHours.getHours()}:${
                    (CurrentHours.getMinutes() < 10 ? '0' : '') + CurrentHours.getMinutes()
                }, выходит в ${CurrentTime.getHours()}:${
                    (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
                }`
            );
        }
    });

    bot.hears('30 МСК', async (ctx) => {
        let chatId = ctx.from.id;
        setTimeout(async () => {
            users.push(chatId);
            try {
                return await ctx.telegram.sendMessage(
                    chatId,
                    'Эй друг, у тебя заканчивается перерыв через 5 минут'
                );
            } catch (err) {
                console.log(err);
            }
        }, TwentyFiveMinutesTimeout);

        let CurrentTime = new Date(ctx.message.date * 1000);

        let CurrentHours = new Date(ctx.message.date * 1000);
        CurrentTime.setMinutes(CurrentTime.getMinutes() + 30);

        if (ctx.message.from.last_name == undefined) {
            await ctx.deleteMessage(ctx.chat.message_id);
            await ctx.reply(
                `${ctx.message.from.first_name} Уходит на 30 в ${CurrentHours.getHours()}:${
                    (CurrentHours.getMinutes() < 10 ? '0' : '') + CurrentHours.getMinutes()
                }, выходит в ${CurrentTime.getHours()}:${
                    (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
                }`
            );
        } else {
            await ctx.deleteMessage(ctx.chat.message_id);
            await ctx.reply(
                `${ctx.message.from.first_name} ${
                    ctx.message.from.last_name
                } Уходит на 30 в ${CurrentHours.getHours()}:${
                    (CurrentHours.getMinutes() < 10 ? '0' : '') + CurrentHours.getMinutes()
                }, выходит в ${CurrentTime.getHours()}:${
                    (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
                }`
            );
        }
    });

    bot.hears('Обед МСК', async (ctx) => {
        let chatId = ctx.from.id;

        setTimeout(async () => {
            users.push(chatId);
            try {
                return await ctx.telegram.sendMessage(
                    chatId,
                    'Эй друг, у тебя заканчивается перерыв через 5 минут'
                );
            } catch (err) {
                console.log(err);
            }
        }, FiftyFiveMinutesTimeout);
        let CurrentTime = new Date(ctx.message.date * 1000);

        if (ctx.message.from.last_name == undefined) {
            await ctx.deleteMessage(ctx.chat.message_id);
            await ctx.reply(
                `${ctx.message.from.first_name} Уходит на обед в ${CurrentTime.getHours()}:${
                    (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
                }, выходит в ${CurrentTime.getHours() + 1}:${
                    (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
                }`
            );
        } else {
            await ctx.deleteMessage(ctx.chat.message_id);
            await ctx.reply(
                `${ctx.message.from.first_name} ${
                    ctx.message.from.last_name
                } Уходит на обед в ${CurrentTime.getHours()}:${
                    (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
                }, выходит в ${CurrentTime.getHours() + 1}:${
                    (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
                }`
            );
        }
    });
    return;
};
