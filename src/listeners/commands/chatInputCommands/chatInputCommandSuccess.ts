import { Events, Listener } from '@sapphire/framework';
import { ApplyOptions } from '@sapphire/decorators';
import type { ChatInputCommandSuccessPayload } from '@sapphire/framework';

@ApplyOptions<Listener.Options>({
	event: Events.ChatInputCommandSuccess
})
export class CommandListener extends Listener<typeof Events.ChatInputCommandSuccess> {
	public async run({ command: _command }: ChatInputCommandSuccessPayload): Promise<void> {
		//
	}
}
