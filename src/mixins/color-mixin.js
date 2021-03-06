import { colors } from "../settings/settings";

export const colorMixin = {
    data() {
        return {
            primary: colors.primary,
			secondary: colors.secondary,
			tertiary: colors.tertiary,
			medium: colors.medium,
			light: colors.light,
			lighter: colors.lighter,
			greyLight: colors.greyLight,
        }
    },
};