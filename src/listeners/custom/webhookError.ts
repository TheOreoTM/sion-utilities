import { Listener } from '@sapphire/framework';
import { ApplyOptions } from '@sapphire/decorators';
import { SUErrors } from '#lib/types/Enums.js';

@ApplyOptions<Listener.Options>({
	event: SUErrors.WebhookError
})
export class CustomListener extends Listener<typeof SUErrors.WebhookError> {
	public async run(error: unknown): Promise<void> {
		this.container.logger.sentryError(error);
	}
}
