import { TABS } from "../util/consts";

export type ITabKeys = keyof typeof TABS;
export type ITabs = (typeof TABS)[ITabKeys];
