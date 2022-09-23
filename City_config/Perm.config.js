import bot from '../app.js';
import { getPererivPERM } from '../services/keyboard.services.js';

export const Perm = async () => {
    bot.hears('Пермь', async (ctx) => {
        ctx.reply('Выбери перерыв ', getPererivPERM());
    });

    let users = [];

    const TenMinuteTimeout = 600000;
    const TwentyFiveMinutesTimeout = 1500000;
    const FiftyFiveMinutesTimeout = 3300000;

    bot.hears('15 ПРМ', async (ctx) => {
        let chatId = ctx.from.id;
        setTimeout(() => {
            users.push(chatId);
            try {
                return ctx.telegram.sendMessage(
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
                `${ctx.message.from.first_name} Уходит на 15 в ${CurrentHours.getHours() + 2}:${
                    (CurrentHours.getMinutes() < 10 ? '0' : '') + CurrentHours.getMinutes()
                }, выходит в ${CurrentTime.getHours() + 2}:${
                    (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
                }`
            );
        } else {
            await ctx.deleteMessage(ctx.chat.message_id);
            await ctx.reply(
                `${ctx.message.from.first_name} ${ctx.message.from.last_name} Уходит на 15 в ${
                    CurrentHours.getHours() + 2
                }:${
                    (CurrentHours.getMinutes() < 10 ? '0' : '') + CurrentHours.getMinutes()
                }, выходит в ${CurrentTime.getHours() + 2}:${
                    (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
                }`
            );
        }
    });

    bot.hears('30 ПРМ', async (ctx) => {
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
                `${ctx.message.from.first_name} Уходит на 30 в ${CurrentHours.getHours() + 2}:${
                    (CurrentHours.getMinutes() < 10 ? '0' : '') + CurrentHours.getMinutes()
                }, выходит в ${CurrentTime.getHours() + 2}:${
                    (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
                }`
            );
        } else {
            await ctx.deleteMessage(ctx.chat.message_id);
            await ctx.reply(
                `${ctx.message.from.first_name} ${ctx.message.from.last_name} Уходит на 30 в ${
                    CurrentHours.getHours() + 2
                }:${
                    (CurrentHours.getMinutes() < 10 ? '0' : '') + CurrentHours.getMinutes()
                }, выходит в ${CurrentTime.getHours() + 2}:${
                    (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
                }`
            );
        }
    });

    bot.hears('Обед ПРМ', async (ctx) => {
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
                `${ctx.message.from.first_name} Уходит на обед в ${CurrentTime.getHours() + 2}:${
                    (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
                }, выходит в ${CurrentTime.getHours() + 3}:${
                    (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
                }`
            );
        } else {
            await ctx.deleteMessage(ctx.chat.message_id);
            await ctx.reply(
                `${ctx.message.from.first_name} ${ctx.message.from.last_name} Уходит на обед в ${
                    CurrentTime.getHours() + 2
                }:${
                    (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
                }, выходит в ${CurrentTime.getHours() + 3}:${
                    (CurrentTime.getMinutes() < 10 ? '0' : '') + CurrentTime.getMinutes()
                }`
            );
        }
    });
};
