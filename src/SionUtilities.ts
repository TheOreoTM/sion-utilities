import '@kbotdev/plugin-modules/register';
import '@sapphire/plugin-scheduled-tasks/register';
import '@sapphire/plugin-api/register';
import { loadConfig } from '#config';
import { SionUtilitiesClient } from '#lib/extensions/SionUtilitiesClient';
import { ApplicationCommandRegistries, RegisterBehavior, container } from '@sapphire/framework';

ApplicationCommandRegistries.setDefaultBehaviorWhenNotIdentical(RegisterBehavior.BulkOverwrite);

async function main(): Promise<void> {
	let client: SionUtilitiesClient | undefined = undefined;

	try {
		const { discord } = container.config;

		client = new SionUtilitiesClient();

		await client.login(discord.token);
	} catch (error: unknown) {
		container.logger.sentryError(error);

		await client?.destroy();
		process.exit(1);
	}
}

void loadConfig();

void main();
