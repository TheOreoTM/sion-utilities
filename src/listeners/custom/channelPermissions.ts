import { Listener } from '@sapphire/framework';
import { ApplyOptions } from '@sapphire/decorators';
import type { ChannelPermissionsPayload } from '#lib/types/Errors';
import type { InteractionResponseUnion } from '#lib/types/Augments';
import { SUErrors } from '#lib/types/Enums.js';

@ApplyOptions<Listener.Options>({
	event: SUErrors.ChannelPermissions
})
export class CustomListener extends Listener<typeof SUErrors.ChannelPermissions> {
	public async run({ interaction, error }: ChannelPermissionsPayload): Promise<InteractionResponseUnion> {
		return interaction.errorReply(error.userMessage, {
			tryEphemeral: true
		});
	}
}
