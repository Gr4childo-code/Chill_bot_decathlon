import { Markup } from 'telegraf';

export function getPererivPERM() {
    return Markup.keyboard(['30 ПРМ', 'Обед ПРМ', '15 ПРМ']).resize();
}

export function getPererivMSC() {
    return Markup.keyboard(['30 МСК', 'Обед МСК', '15 МСК']).resize();
}

export function getMoscow() {
    return Markup.keyboard([['Москва']]).resize();
}

export function getPerm() {
    return Markup.keyboard([['Пермь']]).resize();
}
