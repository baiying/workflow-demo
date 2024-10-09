import { defineAbility } from "@casl/ability";
export default (user) => defineAbility((can) => {
  can('read', 'Article');
  if (user.isLoggedIn) {
    can('update', 'Article', { authorId: user.id });
    can('create', 'Comment');
    can('udpate', 'Comment', { authorId: user.id });
  }
});