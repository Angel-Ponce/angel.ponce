import { readable } from 'svelte/store';
import { lang } from '$stores';

import { en } from '$i18n/locales/en';

export interface Variables {
	[key: string]: string | number;
}

const t = readable<(s: string, variables?: Variables) => string>(
	(s: string, variables?: Variables) => translate(s, 'es', variables),
	(set) => {
		lang.subscribe((locale) => {
			set((s: string, variables?: Variables) => {
				return translate(s, locale, variables);
			});
		});
	},
);

const translate = (s: string, locale: 'es' | 'en', variables?: Variables): string => {
	if (locale == 'en') {
		if (en[s]) {
			return parse(en[s], variables);
		}

		return parse(s, variables);
	}

	return parse(s, variables);
};

const parse = (traduction: string, variables?: Variables): string => {
	if (variables) {
		const keys: string[] = Object.keys(variables);

		keys.forEach((k) => {
			const pattern = `{{${k}}}`;
			traduction = traduction.replaceAll(pattern, `${variables[k]}`);
		});

		return traduction;
	}

	return traduction;
};

export default t;
