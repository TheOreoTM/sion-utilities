import type { SUError } from '#lib/structures/errors/SUError.js';
import type { SionUtilitiesCommand } from '#lib/extensions/SionUtilitiesCommand.js';
import type { MessageComponentInteraction, ModalSubmitInteraction } from 'discord.js';
import type { ChannelPermissionsError } from '#lib/structures/errors/ChannelPermissionsError';

export type ErrorPayload = {
	error: SUError;
};

export type ChannelPermissionsPayload = {
	error: ChannelPermissionsError;
	interaction:
		| SionUtilitiesCommand.ChatInputCommandInteraction //
		| SionUtilitiesCommand.ContextMenuCommandInteraction
		| MessageComponentInteraction
		| ModalSubmitInteraction;
};
