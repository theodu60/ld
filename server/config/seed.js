/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Language from '../api/language/language.model';
import Detect from '../api/detect/detect.model';

Detect.find({}).removeAsync()
  .then(function() {
    Detect.create(
    {
    "ouput" : 58,
    "freq" : [ 
        {
            "label" : "t",
            "value" : 0.0705421293272371
        }, 
        {
            "label" : "e",
            "value" : 0.1521881123448726
        }, 
        {
            "label" : "D",
            "value" : 0.0013063357282822
        }, 
        {
            "label" : "h",
            "value" : 0.0117570215545395
        }, 
        {
            "label" : "o",
            "value" : 0.0489875898105813
        }, 
        {
            "label" : "r",
            "value" : 0.0568256041802743
        }, 
        {
            "label" : "s",
            "value" : 0.0757674722403658
        }, 
        {
            "label" : "l",
            "value" : 0.0613977792292619
        }, 
        {
            "label" : "a",
            "value" : 0.0849118223383410
        }, 
        {
            "label" : "u",
            "value" : 0.0679294578706728
        }, 
        {
            "label" : "m",
            "value" : 0.0287393860222077
        }, 
        {
            "label" : "i",
            "value" : 0.0711952971913782
        }, 
        {
            "label" : "è",
            "value" : 0.0045721750489876
        }, 
        {
            "label" : "d",
            "value" : 0.0391900718484651
        }, 
        {
            "label" : "é",
            "value" : 0.0130633572828217
        }, 
        {
            "label" : "n",
            "value" : 0.0744611365120836
        }, 
        {
            "label" : "v",
            "value" : 0.0176355323318093
        }, 
        {
            "label" : "p",
            "value" : 0.0254735467015023
        }, 
        {
            "label" : "c",
            "value" : 0.0280862181580666
        }, 
        {
            "label" : "f",
            "value" : 0.0104506858262573
        }, 
        {
            "label" : "g",
            "value" : 0.0104506858262573
        }, 
        {
            "label" : "b",
            "value" : 0.0065316786414108
        }, 
        {
            "label" : "y",
            "value" : 0.0006531678641411
        }, 
        {
            "label" : "R",
            "value" : 0.0013063357282822
        }, 
        {
            "label" : "à",
            "value" : 0.0039190071848465
        }, 
        {
            "label" : "M",
            "value" : 0.0019595035924233
        }, 
        {
            "label" : "q",
            "value" : 0.0117570215545395
        }, 
        {
            "label" : "E",
            "value" : 0.0032658393207054
        }, 
        {
            "label" : "j",
            "value" : 0.0045721750489876
        }, 
        {
            "label" : "V",
            "value" : 0.0013063357282822
        }, 
        {
            "label" : "x",
            "value" : 0.0058785107772698
        }, 
        {
            "label" : "H",
            "value" : 0.0006531678641411
        }, 
        {
            "label" : "z",
            "value" : 0.0019595035924233
        }, 
        {
            "label" : "S",
            "value" : 0.0006531678641411
        }, 
        {
            "label" : "N",
            "value" : 0.0006531678641411
        }, 
        {
            "label" : "ë",
            "value" : 0
        }, 
        {
            "label" : "k",
            "value" : 0
        }, 
        {
            "label" : "w",
            "value" : 0
        }, 
        {
            "label" : "A",
            "value" : 0
        }, 
        {
            "label" : "B",
            "value" : 0
        }, 
        {
            "label" : "C",
            "value" : 0
        }, 
        {
            "label" : "F",
            "value" : 0
        }, 
        {
            "label" : "G",
            "value" : 0
        }, 
        {
            "label" : "I",
            "value" : 0
        }, 
        {
            "label" : "J",
            "value" : 0
        }, 
        {
            "label" : "K",
            "value" : 0
        }, 
        {
            "label" : "L",
            "value" : 0
        }, 
        {
            "label" : "O",
            "value" : 0
        }, 
        {
            "label" : "P",
            "value" : 0
        }, 
        {
            "label" : "Q",
            "value" : 0
        }, 
        {
            "label" : "T",
            "value" : 0
        }, 
        {
            "label" : "U",
            "value" : 0
        }, 
        {
            "label" : "W",
            "value" : 0
        }, 
        {
            "label" : "X",
            "value" : 0
        }, 
        {
            "label" : "Y",
            "value" : 0
        }, 
        {
            "label" : "Z",
            "value" : 0
        }, 
        {
            "label" : "А",
            "value" : 0
        }, 
        {
            "label" : "Б",
            "value" : 0
        }, 
        {
            "label" : "В",
            "value" : 0
        }, 
        {
            "label" : "Г",
            "value" : 0
        }, 
        {
            "label" : "Д",
            "value" : 0
        }, 
        {
            "label" : "Е",
            "value" : 0
        }, 
        {
            "label" : "Ё",
            "value" : 0
        }, 
        {
            "label" : "Ж",
            "value" : 0
        }, 
        {
            "label" : "З",
            "value" : 0
        }, 
        {
            "label" : "И",
            "value" : 0
        }, 
        {
            "label" : "Й",
            "value" : 0
        }, 
        {
            "label" : "К",
            "value" : 0
        }, 
        {
            "label" : "Л",
            "value" : 0
        }, 
        {
            "label" : "М",
            "value" : 0
        }, 
        {
            "label" : "Н",
            "value" : 0
        }, 
        {
            "label" : "О",
            "value" : 0
        }, 
        {
            "label" : "П",
            "value" : 0
        }, 
        {
            "label" : "Р",
            "value" : 0
        }, 
        {
            "label" : "С",
            "value" : 0
        }, 
        {
            "label" : "Т",
            "value" : 0
        }, 
        {
            "label" : "У",
            "value" : 0
        }, 
        {
            "label" : "Ф",
            "value" : 0
        }, 
        {
            "label" : "Х",
            "value" : 0
        }, 
        {
            "label" : "Ц",
            "value" : 0
        }, 
        {
            "label" : "Ч",
            "value" : 0
        }, 
        {
            "label" : "Ш",
            "value" : 0
        }, 
        {
            "label" : "Щ",
            "value" : 0
        }, 
        {
            "label" : "Ъ",
            "value" : 0
        }, 
        {
            "label" : "Ы",
            "value" : 0
        }, 
        {
            "label" : "Э",
            "value" : 0
        }, 
        {
            "label" : "Я",
            "value" : 0
        }, 
        {
            "label" : "а",
            "value" : 0
        }, 
        {
            "label" : "б",
            "value" : 0
        }, 
        {
            "label" : "в",
            "value" : 0
        }, 
        {
            "label" : "г",
            "value" : 0
        }, 
        {
            "label" : "д",
            "value" : 0
        }, 
        {
            "label" : "е",
            "value" : 0
        }, 
        {
            "label" : "ё",
            "value" : 0
        }, 
        {
            "label" : "ж",
            "value" : 0
        }, 
        {
            "label" : "з",
            "value" : 0
        }, 
        {
            "label" : "и",
            "value" : 0
        }, 
        {
            "label" : "й",
            "value" : 0
        }, 
        {
            "label" : "к",
            "value" : 0
        }, 
        {
            "label" : "л",
            "value" : 0
        }, 
        {
            "label" : "м",
            "value" : 0
        }, 
        {
            "label" : "н",
            "value" : 0
        }, 
        {
            "label" : "о",
            "value" : 0
        }, 
        {
            "label" : "п",
            "value" : 0
        }, 
        {
            "label" : "р",
            "value" : 0
        }, 
        {
            "label" : "с",
            "value" : 0
        }, 
        {
            "label" : "т",
            "value" : 0
        }, 
        {
            "label" : "у",
            "value" : 0
        }, 
        {
            "label" : "ф",
            "value" : 0
        }, 
        {
            "label" : "х",
            "value" : 0
        }, 
        {
            "label" : "ц",
            "value" : 0
        }, 
        {
            "label" : "ч",
            "value" : 0
        }, 
        {
            "label" : "ш",
            "value" : 0
        }, 
        {
            "label" : "щ",
            "value" : 0
        }, 
        {
            "label" : "ъ",
            "value" : 0
        }, 
        {
            "label" : "ы",
            "value" : 0
        }, 
        {
            "label" : "阿",
            "value" : 0
        }, 
        {
            "label" : "贝",
            "value" : 0
        }, 
        {
            "label" : "色",
            "value" : 0
        }, 
        {
            "label" : "德",
            "value" : 0
        }, 
        {
            "label" : "饿",
            "value" : 0
        }, 
        {
            "label" : "艾",
            "value" : 0
        }, 
        {
            "label" : "弗",
            "value" : 0
        }, 
        {
            "label" : "日",
            "value" : 0
        }, 
        {
            "label" : "什",
            "value" : 0
        }, 
        {
            "label" : "伊",
            "value" : 0
        }, 
        {
            "label" : "鸡",
            "value" : 0
        }, 
        {
            "label" : "卡",
            "value" : 0
        }, 
        {
            "label" : "勒",
            "value" : 0
        }, 
        {
            "label" : "马",
            "value" : 0
        }, 
        {
            "label" : "娜",
            "value" : 0
        }, 
        {
            "label" : "哦",
            "value" : 0
        }, 
        {
            "label" : "佩",
            "value" : 0
        }, 
        {
            "label" : "苦",
            "value" : 0
        }, 
        {
            "label" : "和",
            "value" : 0
        }, 
        {
            "label" : "丝",
            "value" : 0
        }, 
        {
            "label" : "特",
            "value" : 0
        }, 
        {
            "label" : "玉",
            "value" : 0
        }, 
        {
            "label" : "维",
            "value" : 0
        }, 
        {
            "label" : "独",
            "value" : 0
        }, 
        {
            "label" : "布",
            "value" : 0
        }, 
        {
            "label" : "克",
            "value" : 0
        }, 
        {
            "label" : "斯",
            "value" : 0
        }, 
        {
            "label" : "格",
            "value" : 0
        }, 
        {
            "label" : "黑",
            "value" : 0
        }, 
        {
            "label" : "贼",
            "value" : 0
        }, 
        {
            "label" : "あ",
            "value" : 0
        }, 
        {
            "label" : "か",
            "value" : 0
        }, 
        {
            "label" : "さ",
            "value" : 0
        }, 
        {
            "label" : "た",
            "value" : 0
        }, 
        {
            "label" : "な",
            "value" : 0
        }, 
        {
            "label" : "は",
            "value" : 0
        }, 
        {
            "label" : "ま",
            "value" : 0
        }, 
        {
            "label" : "や",
            "value" : 0
        }, 
        {
            "label" : "ら",
            "value" : 0
        }, 
        {
            "label" : "わ",
            "value" : 0
        }, 
        {
            "label" : "が",
            "value" : 0
        }, 
        {
            "label" : "ざ",
            "value" : 0
        }, 
        {
            "label" : "だ",
            "value" : 0
        }, 
        {
            "label" : "ば",
            "value" : 0
        }, 
        {
            "label" : "ぱ",
            "value" : 0
        }, 
        {
            "label" : "ア",
            "value" : 0
        }, 
        {
            "label" : "カ",
            "value" : 0
        }, 
        {
            "label" : "サ",
            "value" : 0
        }, 
        {
            "label" : "タ",
            "value" : 0
        }, 
        {
            "label" : "ナ",
            "value" : 0
        }, 
        {
            "label" : "ハ",
            "value" : 0
        }, 
        {
            "label" : "マ",
            "value" : 0
        }, 
        {
            "label" : "ヤ",
            "value" : 0
        }, 
        {
            "label" : "ラ",
            "value" : 0
        }, 
        {
            "label" : "ワ",
            "value" : 0
        }, 
        {
            "label" : "ガ",
            "value" : 0
        }, 
        {
            "label" : "ザ",
            "value" : 0
        }, 
        {
            "label" : "ダ",
            "value" : 0
        }, 
        {
            "label" : "バ",
            "value" : 0
        }, 
        {
            "label" : "パ",
            "value" : 0
        }, 
        {
            "label" : "い",
            "value" : 0
        }, 
        {
            "label" : "き",
            "value" : 0
        }, 
        {
            "label" : "し",
            "value" : 0
        }, 
        {
            "label" : "ち",
            "value" : 0
        }, 
        {
            "label" : "に",
            "value" : 0
        }, 
        {
            "label" : "ひ",
            "value" : 0
        }, 
        {
            "label" : "み",
            "value" : 0
        }, 
        {
            "label" : "り",
            "value" : 0
        }, 
        {
            "label" : "ゐ",
            "value" : 0
        }, 
        {
            "label" : "ぎ",
            "value" : 0
        }, 
        {
            "label" : "じ",
            "value" : 0
        }, 
        {
            "label" : "ぢ",
            "value" : 0
        }, 
        {
            "label" : "び",
            "value" : 0
        }, 
        {
            "label" : "ぴ",
            "value" : 0
        }, 
        {
            "label" : "イ",
            "value" : 0
        }, 
        {
            "label" : "キ",
            "value" : 0
        }, 
        {
            "label" : "シ",
            "value" : 0
        }, 
        {
            "label" : "チ",
            "value" : 0
        }, 
        {
            "label" : "ニ",
            "value" : 0
        }, 
        {
            "label" : "ヒ",
            "value" : 0
        }, 
        {
            "label" : "ミ",
            "value" : 0
        }, 
        {
            "label" : "リ",
            "value" : 0
        }, 
        {
            "label" : "ヰ",
            "value" : 0
        }, 
        {
            "label" : "ギ",
            "value" : 0
        }, 
        {
            "label" : "ジ",
            "value" : 0
        }, 
        {
            "label" : "ヂ",
            "value" : 0
        }, 
        {
            "label" : "ビ",
            "value" : 0
        }, 
        {
            "label" : "ピ",
            "value" : 0
        }, 
        {
            "label" : "う",
            "value" : 0
        }, 
        {
            "label" : "く",
            "value" : 0
        }, 
        {
            "label" : "す",
            "value" : 0
        }, 
        {
            "label" : "つ",
            "value" : 0
        }, 
        {
            "label" : "ぬ",
            "value" : 0
        }, 
        {
            "label" : "ふ",
            "value" : 0
        }, 
        {
            "label" : "む",
            "value" : 0
        }, 
        {
            "label" : "ゆ",
            "value" : 0
        }, 
        {
            "label" : "る",
            "value" : 0
        }, 
        {
            "label" : "ぐ",
            "value" : 0
        }, 
        {
            "label" : "ず",
            "value" : 0
        }, 
        {
            "label" : "づ",
            "value" : 0
        }, 
        {
            "label" : "ぶ",
            "value" : 0
        }, 
        {
            "label" : "ぷ",
            "value" : 0
        }, 
        {
            "label" : "ウ",
            "value" : 0
        }, 
        {
            "label" : "ク",
            "value" : 0
        }, 
        {
            "label" : "ス",
            "value" : 0
        }, 
        {
            "label" : "ツ",
            "value" : 0
        }, 
        {
            "label" : "ヌ",
            "value" : 0
        }, 
        {
            "label" : "フ",
            "value" : 0
        }, 
        {
            "label" : "ム",
            "value" : 0
        }, 
        {
            "label" : "ユ",
            "value" : 0
        }, 
        {
            "label" : "ル",
            "value" : 0
        }, 
        {
            "label" : "グ",
            "value" : 0
        }, 
        {
            "label" : "ズ",
            "value" : 0
        }, 
        {
            "label" : "ヅ",
            "value" : 0
        }, 
        {
            "label" : "ブ",
            "value" : 0
        }, 
        {
            "label" : "プ",
            "value" : 0
        }, 
        {
            "label" : "え",
            "value" : 0
        }, 
        {
            "label" : "け",
            "value" : 0
        }, 
        {
            "label" : "せ",
            "value" : 0
        }, 
        {
            "label" : "て",
            "value" : 0
        }, 
        {
            "label" : "ね",
            "value" : 0
        }, 
        {
            "label" : "へ",
            "value" : 0
        }, 
        {
            "label" : "め",
            "value" : 0
        }, 
        {
            "label" : "れ",
            "value" : 0
        }, 
        {
            "label" : "ゑ",
            "value" : 0
        }, 
        {
            "label" : "げ",
            "value" : 0
        }, 
        {
            "label" : "ぜ",
            "value" : 0
        }, 
        {
            "label" : "で",
            "value" : 0
        }, 
        {
            "label" : "べ",
            "value" : 0
        }, 
        {
            "label" : "ぺ",
            "value" : 0
        }, 
        {
            "label" : "エ",
            "value" : 0
        }, 
        {
            "label" : "ケ",
            "value" : 0
        }, 
        {
            "label" : "セ",
            "value" : 0
        }, 
        {
            "label" : "テ",
            "value" : 0
        }, 
        {
            "label" : "ネ",
            "value" : 0
        }, 
        {
            "label" : "ヘ",
            "value" : 0
        }, 
        {
            "label" : "メ",
            "value" : 0
        }, 
        {
            "label" : "レ",
            "value" : 0
        }, 
        {
            "label" : "ヱ",
            "value" : 0
        }, 
        {
            "label" : "ゲ",
            "value" : 0
        }, 
        {
            "label" : "ゼ",
            "value" : 0
        }, 
        {
            "label" : "デ",
            "value" : 0
        }, 
        {
            "label" : "ベ",
            "value" : 0
        }, 
        {
            "label" : "ペ",
            "value" : 0
        }, 
        {
            "label" : "お",
            "value" : 0
        }, 
        {
            "label" : "こ",
            "value" : 0
        }, 
        {
            "label" : "そ",
            "value" : 0
        }, 
        {
            "label" : "と",
            "value" : 0
        }, 
        {
            "label" : "の",
            "value" : 0
        }, 
        {
            "label" : "ほ",
            "value" : 0
        }, 
        {
            "label" : "も",
            "value" : 0
        }, 
        {
            "label" : "よ",
            "value" : 0
        }, 
        {
            "label" : "ろ",
            "value" : 0
        }, 
        {
            "label" : "を",
            "value" : 0
        }, 
        {
            "label" : "ん",
            "value" : 0
        }, 
        {
            "label" : "ご",
            "value" : 0
        }, 
        {
            "label" : "ぞ",
            "value" : 0
        }, 
        {
            "label" : "ど",
            "value" : 0
        }, 
        {
            "label" : "ぼ",
            "value" : 0
        }, 
        {
            "label" : "ぽ",
            "value" : 0
        }, 
        {
            "label" : "オ",
            "value" : 0
        }, 
        {
            "label" : "コ",
            "value" : 0
        }, 
        {
            "label" : "ソ",
            "value" : 0
        }, 
        {
            "label" : "ト",
            "value" : 0
        }, 
        {
            "label" : "ノ",
            "value" : 0
        }, 
        {
            "label" : "ホ",
            "value" : 0
        }, 
        {
            "label" : "モ",
            "value" : 0
        }, 
        {
            "label" : "ヨ",
            "value" : 0
        }, 
        {
            "label" : "ロ",
            "value" : 0
        }, 
        {
            "label" : "ヲ",
            "value" : 0
        }, 
        {
            "label" : "ン",
            "value" : 0
        }, 
        {
            "label" : "ゴ",
            "value" : 0
        }, 
        {
            "label" : "ゾ",
            "value" : 0
        }, 
        {
            "label" : "ド",
            "value" : 0
        }, 
        {
            "label" : "ボ",
            "value" : 0
        }, 
        {
            "label" : "ポ",
            "value" : 0
        }, 
        {
            "label" : "ゃ",
            "value" : 0
        }, 
        {
            "label" : "ャ",
            "value" : 0
        }, 
        {
            "label" : "ゅ",
            "value" : 0
        }, 
        {
            "label" : "ュ",
            "value" : 0
        }, 
        {
            "label" : "ょ",
            "value" : 0
        }, 
        {
            "label" : "ョ",
            "value" : 0
        }, 
        {
            "label" : "ﺍ",
            "value" : 0
        }, 
        {
            "label" : "ﺏ",
            "value" : 0
        }, 
        {
            "label" : "ﺕ",
            "value" : 0
        }, 
        {
            "label" : "ﺙ",
            "value" : 0
        }, 
        {
            "label" : "ﺝ",
            "value" : 0
        }, 
        {
            "label" : "ﺡ",
            "value" : 0
        }, 
        {
            "label" : "ﺥ",
            "value" : 0
        }, 
        {
            "label" : "ﺩ",
            "value" : 0
        }, 
        {
            "label" : "ﺫ",
            "value" : 0
        }, 
        {
            "label" : "ﺭ",
            "value" : 0
        }, 
        {
            "label" : "ﺯ",
            "value" : 0
        }, 
        {
            "label" : "ﺱ",
            "value" : 0
        }, 
        {
            "label" : "ﺵ",
            "value" : 0
        }, 
        {
            "label" : "ﺹ",
            "value" : 0
        }, 
        {
            "label" : "ﺽ",
            "value" : 0
        }, 
        {
            "label" : "ﻁ",
            "value" : 0
        }, 
        {
            "label" : "ﻅ",
            "value" : 0
        }, 
        {
            "label" : "ﻉ",
            "value" : 0
        }, 
        {
            "label" : "ﻍ",
            "value" : 0
        }, 
        {
            "label" : "ﻑ",
            "value" : 0
        }, 
        {
            "label" : "ﻕ",
            "value" : 0
        }, 
        {
            "label" : "ﻙ",
            "value" : 0
        }, 
        {
            "label" : "ﻝ",
            "value" : 0
        }, 
        {
            "label" : "ﻡ",
            "value" : 0
        }, 
        {
            "label" : "ﻥ",
            "value" : 0
        }, 
        {
            "label" : "ﻩ",
            "value" : 0
        }, 
        {
            "label" : "ﻭ",
            "value" : 0
        }, 
        {
            "label" : "ﻱ",
            "value" : 0
        }, 
        {
            "label" : "ء",
            "value" : 0
        }, 
        {
            "label" : "‎",
            "value" : 0
        }, 
        {
            "label" : "Γ",
            "value" : 0
        }, 
        {
            "label" : "Δ",
            "value" : 0
        }, 
        {
            "label" : "Ε",
            "value" : 0
        }, 
        {
            "label" : "Ζ",
            "value" : 0
        }, 
        {
            "label" : "Η",
            "value" : 0
        }, 
        {
            "label" : "Θ",
            "value" : 0
        }, 
        {
            "label" : "Ι",
            "value" : 0
        }, 
        {
            "label" : "Κ",
            "value" : 0
        }, 
        {
            "label" : "Λ",
            "value" : 0
        }, 
        {
            "label" : "Ν",
            "value" : 0
        }, 
        {
            "label" : "Ξ",
            "value" : 0
        }, 
        {
            "label" : "Ο",
            "value" : 0
        }, 
        {
            "label" : "Π",
            "value" : 0
        }, 
        {
            "label" : "Ρ",
            "value" : 0
        }, 
        {
            "label" : "Σ",
            "value" : 0
        }, 
        {
            "label" : "Τ",
            "value" : 0
        }, 
        {
            "label" : "Υ",
            "value" : 0
        }, 
        {
            "label" : "Φ",
            "value" : 0
        }, 
        {
            "label" : "Χ",
            "value" : 0
        }, 
        {
            "label" : "Ψ",
            "value" : 0
        }, 
        {
            "label" : "Ω",
            "value" : 0
        }, 
        {
            "label" : "α",
            "value" : 0
        }, 
        {
            "label" : "β",
            "value" : 0
        }, 
        {
            "label" : "ϐ",
            "value" : 0
        }, 
        {
            "label" : "γ",
            "value" : 0
        }, 
        {
            "label" : "δ",
            "value" : 0
        }, 
        {
            "label" : "ε",
            "value" : 0
        }, 
        {
            "label" : "ζ",
            "value" : 0
        }, 
        {
            "label" : "η",
            "value" : 0
        }, 
        {
            "label" : "θ",
            "value" : 0
        }, 
        {
            "label" : "ι",
            "value" : 0
        }, 
        {
            "label" : "κ",
            "value" : 0
        }, 
        {
            "label" : "λ",
            "value" : 0
        }, 
        {
            "label" : "μ",
            "value" : 0
        }, 
        {
            "label" : "ν",
            "value" : 0
        }, 
        {
            "label" : "ξ",
            "value" : 0
        }, 
        {
            "label" : "ο",
            "value" : 0
        }, 
        {
            "label" : "π",
            "value" : 0
        }, 
        {
            "label" : "ρ",
            "value" : 0
        }, 
        {
            "label" : "σ",
            "value" : 0
        }, 
        {
            "label" : "ς",
            "value" : 0
        }, 
        {
            "label" : "τ",
            "value" : 0
        }, 
        {
            "label" : "υ",
            "value" : 0
        }, 
        {
            "label" : "φ",
            "value" : 0
        }, 
        {
            "label" : "χ",
            "value" : 0
        }, 
        {
            "label" : "ψ",
            "value" : 0
        }, 
        {
            "label" : "ω",
            "value" : 0
        }
    ]
}
    )
  });
Language.find({}).removeAsync()
  .then(function() {
    Language.create({"id":1,"code":"sq","label":"Albanian"},{"id":2,"code":"en","label":"English"},{"id":3,"code":"ar","label":"Arabic"},{"id":4,"code":"hy","label":"Armenian"},{"id":5,"code":"az","label":"Azerbaijan"},{"id":6,"code":"af","label":"Afrikaans"},{"id":7,"code":"eu","label":"Basque"},{"id":8,"code":"be","label":"Belarusian"},{"id":9,"code":"bg","label":"Bulgarian"},{"id":10,"code":"bs","label":"Bosnian"},{"id":11,"code":"cy","label":"Welsh"},{"id":12,"code":"vi","label":"Vietnamese"},{"id":13,"code":"hu","label":"Hungarian"},{"id":14,"code":"ht","label":"Haitian (Creole)"},{"id":15,"code":"gl","label":"Galician"},{"id":16,"code":"nl","label":"Dutch"},{"id":17,"code":"el","label":"Greek"},{"id":18,"code":"ka","label":"Georgian"},{"id":19,"code":"da","label":"Danish"},{"id":20,"code":"he","label":"Yiddish"},{"id":21,"code":"id","label":"Indonesian"},{"id":22,"code":"ga","label":"Irish"},{"id":23,"code":"it","label":"Italian"},{"id":24,"code":"is","label":"Icelandic"},{"id":25,"code":"es","label":"Spanish"},{"id":26,"code":"kk","label":"Kazakh"},{"id":27,"code":"ca","label":"Catalan"},{"id":28,"code":"ky","label":"Kyrgyz"},{"id":29,"code":"zh","label":"Chinese"},{"id":30,"code":"ko","label":"Korean"},{"id":31,"code":"la","label":"Latin"},{"id":32,"code":"lv","label":"Latvian"},{"id":33,"code":"lt","label":"Lithuanian"},{"id":34,"code":"mg","label":"Malagasy"},{"id":35,"code":"ms","label":"Malay"},{"id":36,"code":"mt","label":"Maltese"},{"id":37,"code":"mk","label":"Macedonian"},{"id":38,"code":"mn","label":"Mongolian"},{"id":39,"code":"de","label":"German"},{"id":40,"code":"no","label":"Norwegian"},{"id":41,"code":"fa","label":"Persian"},{"id":42,"code":"pl","label":"Polish"},{"id":43,"code":"pt","label":"Portuguese"},{"id":44,"code":"ro","label":"Romanian"},{"id":45,"code":"ru","label":"Russian"},{"id":46,"code":"sr","label":"Serbian"},{"id":47,"code":"sk","label":"Slovakian"},{"id":48,"code":"sl","label":"Slovenian"},{"id":49,"code":"sw","label":"Swahili"},{"id":50,"code":"tg","label":"Tajik"},{"id":51,"code":"th","label":"Thai"},{"id":52,"code":"tl","label":"Tagalog"},{"id":53,"code":"tt","label":"Tatar"},{"id":54,"code":"tr","label":"Turkish"},{"id":55,"code":"uz","label":"Uzbek"},{"id":56,"code":"uk","label":"Ukrainian"},{"id":57,"code":"fi","label":"Finish"},{"id":58,"code":"fr","label":"French"},{"id":59,"code":"hr","label":"Croatian"},{"id":60,"code":"cs","label":"Czech"},{"id":61,"code":"sv","label":"Swedish"},{"id":62,"code":"et","label":"Estonian"},{"id":63,"code":"ja","label":"Japanese"});
  });

User.find({}).removeAsync()
  .then(function() {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(function() {
      console.log('finished populating users');
    });
  });
