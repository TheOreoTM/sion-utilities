import { APIUser, Guild, ImageURLOptions, User } from 'discord.js';

/**
 * Get a guild's icon.
 * @param guild - The guild
 * @param options - The image options for the icon
 */
export function getGuildIcon(guild: Guild | null, options: ImageURLOptions = {}): string | undefined {
	const { forceStatic = false, size = 512 } = options;

	return guild?.iconURL({ forceStatic, size, extension: 'png' }) ?? undefined;
}

/**
 * Get the URL of a user's avatar
 * @param user - The user
 * @param options - The image options for the avatar
 */
export function getUserAvatarUrl(user: APIUser | User, options: ImageURLOptions = {}): string {
	const { forceStatic = false, size = 512 } = options;

	if (user instanceof User) {
		return user.avatar //
			? user.avatarURL({ forceStatic, size, extension: 'png' })!
			: user.defaultAvatarURL;
	}
	return user.avatar ?? createDefaultAvatar();
}

/**
 * Create a default avatar.
 */
export function createDefaultAvatar(): string {
	return `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 5)}.png`;
}
