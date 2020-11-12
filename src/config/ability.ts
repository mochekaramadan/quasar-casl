import { AbilityBuilder, Ability, AbilityClass } from '@casl/ability';

type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete';
type Subjects = 'admin' | 'merchant' | 'outlet' | 'brand' | 'all';

export type AppAbility = Ability<[Actions, Subjects]>;
export const AppAbility = Ability as AbilityClass<AppAbility>;

export function defineRulesFor(role: string) {
  const { can, rules } = new AbilityBuilder<AppAbility>();

  if (role === 'admin') {
    can('manage', 'admin');
    can(['create', 'update', 'delete'], 'admin');
  } else if (role === 'merchant') {
    can('read', 'all');
    can(['create', 'update', 'delete'], 'merchant');
    can('manage', 'merchant');
  } else if (role === 'brand') {
    can('read', 'all');
    can(['create', 'update', 'delete'], 'brand');
    can('manage', 'brand');
  } else if (role === 'outlet') {
    can('read', 'all');
    can(['create', 'update', 'delete'], 'outlet');
    can('manage', 'outlet');
  } else {

  }

  return rules;
}


export function buildAbilityFor(role: string) {
  return new AppAbility(defineRulesFor(role));
}
