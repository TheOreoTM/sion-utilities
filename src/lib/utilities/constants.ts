import { join } from 'path';

export const rootDir = join(__dirname, '..', '..');
export const srcDir = join(rootDir, 'src');

export const NodeEnvironments = {
	Dev: 'development',
	Production: 'production'
} as const;

export const BotOwners = ['600707283097485322', '508552375397515285'];
export const PrivilegedUsers = [...BotOwners];
export const BotPrefix = '!';
export const BotName = 'Sion Utilities';
export const BotVersion = '0.0.1';

export const MainServerID = '789945485284474932';

export const enum EmbedColors {
	Success = 0x46b485,
	Error = 0xf05050,
	Warn = 0xfee65c,
	Info = 0x297bd1,
	Loading = 0x23272a,
	Default = 0x2b2d31
}

export const Emojis = {
	Fail: '<:fail:1093480740571852810>',
	Success: '<:success:1093480744040534046>',
	Loading: '<a:loading:1096158078900129943>',
	Info: '<:info:1096158656942330006>'
};

export const HexColorRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;

export const UrlRegex = /https\S*?([a-zA-Z0-9]+)(?:\.\w+)?(?:\s|$)/;

/**
 * @remarks Group 1: If the emoji is animated
 * @remarks Group 2: The name of the emoji
 * @remarks Group 3: The ID of the emoji
 */
export const EmojiRegex = /<?(a)?:?(\w{2,32}):(\d{17,20})>?/;

export const GENERIC_ERROR = 'Woops, something went wrong. The devs have been made aware of the error and are looking into it.';

export function formGenericError(message?: string): string {
	if (!message) return GENERIC_ERROR;
	return `${message} The devs have been made aware of the error and are looking into it.`;
}
