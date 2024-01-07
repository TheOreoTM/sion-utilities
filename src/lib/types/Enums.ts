export const SionUtilitiesModules = {
	Core: 'CoreModule' as const,
	Dev: 'DevModule' as const,
	Events: 'EventModule' as const,
	Moderation: 'ModerationModule' as const,
	// Utility: 'UtilityModule' as const,
	// Welcome: 'WelcomeModule' as const,
	YouTube: 'YouTubeModule' as const
};

export const SUErrors = {
	WebhookError: 'webhookError' as const,
	ChannelPermissions: 'channelPermissions' as const
};

export const SUErrorCodes = {
	ChannelPermissions: 'CHANNEL_PERMISSIONS',
	InvalidHex: 'INVALID_HEX',
	DiscordFetch: 'DISCORD_FETCH'
} as const;

export type SUErrorCode = (typeof SUErrorCodes)[keyof typeof SUErrorCodes];
