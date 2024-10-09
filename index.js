import { Article } from "./Article.js";
import defineAbilityFor from "./defineAbility.js";

const user = {id: 1, isLoggedIn: true};
const ability = defineAbilityFor(user);
const article = new Article();
const ownArticle = new Article({ authorId: user.id });
const otherArticle = new Article({ authorId: 2 });

console.log(ability.can('read', article));
console.log(ability.can('update', 'Article'));
console.log(ability.can('update', ownArticle));
console.log(ability.can('update', otherArticle));