export const baseCacheKey = (guildId: string): string => `sion.utilities:guilds:${guildId}`;

export const coreCacheKey = (guildId: string): string => `${baseCacheKey(guildId)}:core`;

export const moderationCacheKey = (guildId: string): string => `${baseCacheKey(guildId)}:moderation`;
