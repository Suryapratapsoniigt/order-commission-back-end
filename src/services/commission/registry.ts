import { Condition, isWeekdayDay, isWeekdayNight, isWeekend } from "./conditions";
import { CommissionRule, WeekdayCommissionRule, WeekdayNightCommissionRule, WeekendCommissionRule } from "./rules";

// Rule registry mapping conditions to rules
const ruleRegistry: Map<Condition, CommissionRule> = new Map();

// function for registering the rules
const registerRule = (condition: Condition, rule: CommissionRule) => {
    ruleRegistry.set(condition, rule);
};

// Registering rules
registerRule(isWeekend, new WeekendCommissionRule());
registerRule(isWeekdayNight, new WeekdayNightCommissionRule());
registerRule(isWeekdayDay, new WeekdayCommissionRule());


export { ruleRegistry };
  

