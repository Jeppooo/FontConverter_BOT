import { Bot, InlineKeyboard } from "grammy";
import dotenv from 'dotenv';

let converter = false;
dotenv.config();

const bot = new Bot(process.env.BOT_TOKEN!);

const cursive = [
    "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">",
    "?", "@", "𝒜", "ℬ", "𝒞", "𝒟", "ℰ", "ℱ", "𝒢", "ℋ", "ℐ", "𝒥", "𝒦", "ℒ", "ℳ",
    "𝒩", "𝒪", "𝒫", "𝒬", "ℛ", "𝒮", "𝒯", "𝒰", "𝒱", "𝒲", "𝒳", "𝒴", "𝒵", "[", "\\",
    "]", "^", "_", "`", "𝒶", "𝒷", "𝒸", "𝒹", "ℯ", "𝒻", "ℊ", "𝒽", "𝒾", "𝒿", "𝓀",
    "𝓁", "𝓂", "𝓃", "ℴ", "𝓅", "𝓆", "𝓇", "𝓈", "𝓉", "𝓊", "𝓋", "𝓌", "𝓍", "𝓎", "𝓏",
    "{", "|", "}"
];
let convert_cursive = false;
const doubleLining = [
    "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/",
    "𝟘", "𝟙", "𝟚", "𝟛", "𝟜", "𝟝", "𝟞", "𝟟", "𝟠", "𝟡", ":", ";", "<", "=", ">",
    "?", "@", "𝔸", "𝔹", "ℂ", "𝔻", "𝔼", "𝔽", "𝔾", "ℍ", "𝕀", "𝕁", "𝕂", "𝕃", "𝕄",
    "ℕ", "𝕆", "ℙ", "ℚ", "ℝ", "𝕊", "𝕋", "𝕌", "𝕍", "𝕎", "𝕏", "𝕐", "ℤ", "[", "\\",
    "]", "^", "_", "`", "𝕒", "𝕓", "𝕔", "𝕕", "𝕖", "𝕗", "𝕘", "𝕙", "𝕚", "𝕛", "𝕜",
    "𝕝", "𝕞", "𝕟", "𝕠", "𝕡", "𝕢", "𝕣", "𝕤", "𝕥", "𝕦", "𝕧", "𝕨", "𝕩", "𝕪", "𝕫",
    "{", "|", "}"
];
let convert_doubleLining = false;
const gothic = [
    "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">",
    "?", "@", "𝔄", "𝔅", "ℭ", "𝔇", "𝔈", "𝔉", "𝔊", "ℌ", "ℑ", "𝔍", "𝔎", "𝔏", "𝔐",
    "𝔑", "𝔒", "𝔓", "𝔔", "ℜ", "𝔖", "𝔗", "𝔘", "𝔙", "𝔚", "𝔛", "𝔜", "ℨ", "[", "\\",
    "]", "^", "_", "`", "𝔞", "𝔟", "𝔠", "𝔡", "𝔢", "𝔣", "𝔤", "𝔥", "𝔦", "𝔧", "𝔨",
    "𝔩", "𝔪", "𝔫", "𝔬", "𝔭", "𝔮", "𝔯", "𝔰", "𝔱", "𝔲", "𝔳", "𝔴", "𝔵", "𝔶", "𝔷",
    "{", "|", "}"
];
let convert_gothic = false;
const circled = [
    "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/",
    "⓪", "①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", ":", ";", "<", "=", ">",
    "?", "@", "Ⓐ", "Ⓑ", "Ⓒ", "Ⓓ", "Ⓔ", "Ⓕ", "Ⓖ", "Ⓗ", "Ⓘ", "Ⓙ", "Ⓚ", "Ⓛ", "Ⓜ",
    "Ⓝ", "Ⓞ", "Ⓟ", "Ⓠ", "Ⓡ", "Ⓢ", "Ⓣ", "Ⓤ", "Ⓥ", "Ⓦ", "Ⓧ", "Ⓨ", "Ⓩ", "[", "\\",
    "]", "^", "_", "`", "ⓐ", "ⓑ", "ⓒ", "ⓓ", "ⓔ", "ⓕ", "ⓖ", "ⓗ", "ⓘ", "ⓙ", "ⓚ",
    "ⓛ", "ⓜ", "ⓝ", "ⓞ", "ⓟ", "ⓠ", "ⓡ", "ⓢ", "ⓣ", "ⓤ", "ⓥ", "ⓦ", "ⓧ", "ⓨ", "ⓩ",
    "{", "|", "}"
];
let convert_circled = false;
const squared = [
    "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", "⊡", "/",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">",
    "?", "@", "🄰", "🄱", "🄲", "🄳", "🄴", "🄵", "🄶", "🄷", "🄸", "🄹", "🄺", "🄻",
    "🄼", "🄽", "🄾", "🄿", "🅀", "🅁", "🅂", "🅃", "🅄", "🅅", "🅆", "🅇", "🅈", "🅉",
    "[", "\\", "]", "^", "_", "`", "🄰", "🄱", "🄲", "🄳", "🄴", "🄵", "🄶", "🄷",
    "🄸", "🄹", "🄺", "🄻", "🄼", "🄽", "🄾", "🄿", "🅀", "🅁", "🅂", "🅃", "🅄",
    "🅅", "🅆", "🅇", "🅈", "🅉", "{", "|", "}"
];
let convert_squared = false;
const smallCaps = [
    "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "[", "\\", "]", "^", "_", "`",
    "ᴀ", "ʙ", "ᴄ", "ᴅ", "ᴇ", "ꜰ", "ɢ", "ʜ", "ɪ", "ᴊ", "ᴋ", "ʟ", "ᴍ", "ɴ", "ᴏ", "ᴘ",
    "q", "ʀ", "ꜱ", "ᴛ", "ᴜ", "ᴠ", "ᴡ", "x", "ʏ", "ᴢ",
    "{", "|", "}"
];
let convert_smallCaps = false;
const fullWidth = [
    "！", " ", "゛", "＃", "＄", "％", "＆", "'", "（", "）", "＊", "＋", "、", "ー", "。", "／",
    "０", "１", "２", "３", "４", "５", "６", "７", "８", "９", "：", "；", "〈", "＝", "〉", "？", "＠",
    "Ａ", "Ｂ", "Ｃ", "Ｄ", "Ｅ", "Ｆ", "Ｇ", "Ｈ", "Ｉ", "Ｊ", "Ｋ", "Ｌ", "Ｍ", "Ｎ", "Ｏ", "Ｐ",
    "Ｑ", "Ｒ", "Ｓ", "Ｔ", "Ｕ", "Ｖ", "Ｗ", "Ｘ", "Ｙ", "Ｚ",
    "［", "\\", "］", "＾", "＿", "‘",
    "ａ", "ｂ", "ｃ", "ｄ", "ｅ", "ｆ", "ｇ", "ｈ", "ｉ", "ｊ", "ｋ", "ｌ", "ｍ", "ｎ", "ｏ", "ｐ",
    "ｑ", "ｒ", "ｓ", "ｔ", "ｕ", "ｖ", "ｗ", "ｘ", "ｙ", "ｚ",
    "｛", "｜", "｝"
];
let convert_fullWidth = false;
const emojiRegional = [
    "❗", "\\", "❝", "#", "$", "%", "&", "❜", "(", ")", "*", "+", ",", "-", ".", "/",
    "0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣",
    "⦂", "⨾", "<", "=", ">", "?", "@",
    "🇦", "🇧", "🇨", "🇩", "🇪", "🇫", "🇬", "🇭", "🇮", "🇯", "🇰", "🇱", "🇲", "🇳", "🇴",
    "🇵", "🇶", "🇷", "🇸", "🇹", "🇺", "🇻", "🇼", "🇽", "🇾", "🇿",
    "[", "\\", "]", "^", "_", "`",
    "🇦", "🇧", "🇨", "🇩", "🇪", "🇫", "🇬", "🇭", "🇮", "🇯", "🇰", "🇱", "🇲", "🇳", "🇴",
    "🇵", "🇶", "🇷", "🇸", "🇹", "🇺", "🇻", "🇼", "🇽", "🇾", "🇿",
    "{", "|", "}"
];
let convert_emojiRegional = false;
const distortedStyle = [
    "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/",
    "0", "߁", "2", "3", "4", "5", "6", "7", "8", "9",
    ":", ";", "<", "=", ">", "⸮", "@",
    "A", "d", "Ↄ", "b", "Ǝ", "ꟻ", "G", "H", "I", "J", "K", "⅃", "M", "ᴎ", "O", "ꟼ", "p", "ᴙ", "Ꙅ", "T", "U", "V", "W", "X", "Y", "Z",
    "[", "\\", "]", "^", "_", "`",
    "A", "d", "ↄ", "b", "ɘ", "ꟻ", "g", "H", "i", "j", "k", "l", "m", "ᴎ", "o", "q", "p", "ᴙ", "ꙅ", "T", "U", "v", "w", "x", "Y", "z",
    "{", "|", "}"
];
let convert_distortedStyle = false;
const alienStyle = [
    "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/",
    "⊘", "𝟙", "ϩ", "Ӡ", "५", "Ƽ", "Ϭ", "7", "𝟠", "९",
    ":", ";", "<", "=", ">", "?", "@",
    "Ⱥ", "β", "↻", "Ꭰ", "Ɛ", "Ƒ", "Ɠ", "Ƕ", "į", "ل", "Ҡ", "Ꝉ", "Ɱ", "ហ", "ට", "φ", "Ҩ", "འ", "Ϛ", "Ͳ", "Ա", "Ỽ", "చ", "ჯ", "Ӌ", "ɀ",
    "[", "\\", "]", "^", "_", "`",
    "ą", "ҍ", "ç", "ժ", "ҽ", "ƒ", "ց", "հ", "ì", "ʝ", "ҟ", "Ӏ", "ʍ", "ղ", "օ", "ք", "զ", "ɾ", "ʂ", "է", "մ", "ѵ", "ա", "×", "վ", "Հ",
    "{", "|", "}"
];
let convert_alienStyle = false;





const firstMenu = "Welcome to Unicode Font Bot! 🌟 Transform your regular text into stylish Unicode fonts with just a tap! ✨ Send any text, and we\'ll convert it into cool, fancy, and eye-catching fonts — perfect for social media, bios, and messages.";
const secondMenu = "Now use the buttons below to choose your font";
const convertMenu = `<b>How to Use</b>
- Send any text – Just type and send a message.
- Choose a font – The bot will reply with your text in multiple Unicode font styles.
- Copy & Paste – Tap and copy your favorite style to use it anywhere!`
const helpMenu = `Welcome! This bot helps you convert plain text into a variety of stylish Unicode fonts that you can copy and use anywhere — on Instagram, Twitter, WhatsApp, or wherever you want to stand out!

🔹 <b>How to Use</b>
- Send any text – Just type and send a message.
- Choose a font – The bot will reply with your text in multiple Unicode font styles.
- Copy & Paste – Tap and copy your favorite style to use it anywhere!
`;

const convertButton = "Convert";
const cursiveButton = "cursive";
const doubleLiningButton = "double lining";
const gothicButton = "gothic";
const circledButton = "circled";
const squaredButton = "squared";
const smallCapsButton = "small caps";
const fullWidthButton = "full width";
const backButton = "Back";
const helpButton = "Help";
const emojiRegionalButton = "​emoji regional";
const distortedStyleButton = "distorted";
const alienStyleButton = "alien style";

const firstMenuMarkup = new InlineKeyboard().text(convertButton, convertButton).text(helpButton, helpButton);
const secondMenuMarkup = new InlineKeyboard().text(cursiveButton, cursiveButton)
    .text(doubleLiningButton, doubleLiningButton)
    .text(gothicButton, gothicButton)
    .row()
    .text(circledButton, circledButton)
    .text(squaredButton, squaredButton)
    .text(smallCapsButton, smallCapsButton)
    .row()
    .text(fullWidthButton, fullWidthButton)
    .text(emojiRegionalButton, emojiRegionalButton)
    .text(distortedStyleButton, distortedStyleButton)
    .row()
    .text(alienStyleButton, alienStyleButton)
    .row()
    .text(backButton, backButton)
    .text(helpButton, helpButton);
const helpMenuMarkup = new InlineKeyboard().text(backButton, backButton);
const convertMenuMarkup = new InlineKeyboard().text(backButton);

bot.command("start", async (ctx) => {
    await ctx.reply(firstMenu, {
        parse_mode: "HTML",
        reply_markup: firstMenuMarkup,
    });
});


bot.callbackQuery(helpButton, async (ctx) => {
    await ctx.editMessageText(helpMenu, {
        parse_mode: "HTML",
        reply_markup: helpMenuMarkup
    })
})

bot.callbackQuery(cursiveButton, async (ctx) => {
    convert_cursive = true;
    await ctx.editMessageText(convertMenu, {
        parse_mode: "HTML",
        reply_markup: convertMenuMarkup
    })
})

bot.callbackQuery(doubleLiningButton, async (ctx) => {
    convert_doubleLining = true;
    await ctx.editMessageText(convertMenu, {
        parse_mode: "HTML",
        reply_markup: convertMenuMarkup
    })
})

bot.callbackQuery(gothicButton, async (ctx) => {
    convert_gothic = true;
    await ctx.editMessageText(convertMenu, {
        parse_mode: "HTML",
        reply_markup: convertMenuMarkup
    })
})

bot.callbackQuery(circledButton, async (ctx) => {
    convert_circled = true;
    await ctx.editMessageText(convertMenu, {
        parse_mode: "HTML",
        reply_markup: convertMenuMarkup
    })
})

bot.callbackQuery(squaredButton, async (ctx) => {
    convert_squared = true;
    await ctx.editMessageText(convertMenu, {
        parse_mode: "HTML",
        reply_markup: convertMenuMarkup
    })
})

bot.callbackQuery(smallCapsButton, async (ctx) => {
    convert_smallCaps = true;
    await ctx.editMessageText(convertMenu, {
        parse_mode: "HTML",
        reply_markup: convertMenuMarkup
    })
})

bot.callbackQuery(fullWidthButton, async (ctx) => {
    convert_fullWidth = true;
    await ctx.editMessageText(convertMenu, {
        parse_mode: "HTML",
        reply_markup: convertMenuMarkup
    })
})

bot.callbackQuery(emojiRegionalButton, async (ctx) => {
    convert_emojiRegional = true;
    await ctx.editMessageText(convertMenu, {
        parse_mode: "HTML",
        reply_markup: convertMenuMarkup
    })
})

bot.callbackQuery(distortedStyleButton, async (ctx) => {
    convert_distortedStyle = true;
    await ctx.editMessageText(convertMenu, {
        parse_mode: "HTML",
        reply_markup: convertMenuMarkup
    })
})

bot.callbackQuery(alienStyleButton, async (ctx) => {
    convert_alienStyle = true;
    await ctx.editMessageText(convertMenu, {
        parse_mode: "HTML",
        reply_markup: convertMenuMarkup
    })
})

bot.callbackQuery(convertButton, async (ctx) => {
    converter = true
    await ctx.editMessageText(secondMenu, {
        reply_markup: secondMenuMarkup,
        parse_mode: "HTML"
    });
});

bot.callbackQuery(backButton, async (ctx) => {
    converter = false;
    resetAllFlags();
    await ctx.editMessageText(firstMenu, {
        reply_markup: firstMenuMarkup,
        parse_mode: "HTML"

    })
})
bot.on("message", async (ctx) => {
    console.log(
        `${ctx.from.first_name} ha scritto ${"text" in ctx.message ? ctx.message.text : ""
        }`,
    )
    if (!ctx.message.text) return;

    const text = ctx.message.text;

    if (!converter) {

        return;
    }

    let result = "";


    let fontArray: string[] | null = null;
    if (convert_cursive) fontArray = cursive;
    else if (convert_doubleLining) fontArray = doubleLining;
    else if (convert_gothic) fontArray = gothic;
    else if (convert_circled) fontArray = circled;
    else if (convert_squared) fontArray = squared;
    else if (convert_smallCaps) fontArray = smallCaps;
    else if (convert_fullWidth) fontArray = fullWidth;
    else if (convert_emojiRegional) fontArray = emojiRegional;
    else if (convert_distortedStyle) fontArray = distortedStyle;
    else if (convert_alienStyle) fontArray = alienStyle;

    if (!fontArray) {
        await ctx.reply("Please select a font style first by using /start and then Convert.");
        return;
    }

    for (let i = 0; i < text.length; i++) {
        const char = text.charAt(i);
        if (char === " ") {
            result += " ";
            continue;
        }
        
        const baseCharCode = "!".charCodeAt(0);
        const index = char.charCodeAt(0) - baseCharCode;

        if (index >= 0 && index < fontArray.length) {
            result += fontArray[index];
        } else {
            result += char;
        }
    }

    await ctx.reply(result, {
        parse_mode: "HTML",
    });
});

function resetAllFlags() {
    convert_cursive = false;
    convert_doubleLining = false;
    convert_gothic = false;
    convert_circled = false;
    convert_squared = false;
    convert_smallCaps = false;
    convert_fullWidth = false;
    convert_emojiRegional = false;
    convert_distortedStyle = false;
    convert_alienStyle = false;
}


bot.start();