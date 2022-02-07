import { colors } from "../settings/settings";

export const colorMixin = {
    data() {
        return {
            primary: colors.primary,
			secondary: colors.secondary,
			tertiary: colors.tertiary,
			medium: colors.medium,
			light: colors.light,
			greyLight: colors.greyLight,
        }
    },
};