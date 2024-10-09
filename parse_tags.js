const text = "一个弱女子成功反杀数十名顶级杀手。Super star 最新韩剧，杀人者的购物中心";

// 使用正则表达式匹配所有标签
const tagsRegex = /#[^\s#]+/g;
const tags = text.match(tagsRegex);

// 提取剩余字符串（移除所有标签）
const remainingText = text.replace(tagsRegex, '').trim();

console.log("标签：", tags);
console.log("剩余字符串：", remainingText);
