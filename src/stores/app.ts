import store from 'store2';
import { writable } from 'svelte/store';

const lang = writable<'es' | 'en'>('es');

const setLang = (l: 'es' | 'en') => {
	lang.set(l);
	store.set('lang', l);
};

export { lang, setLang };
