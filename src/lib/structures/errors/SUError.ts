import type { SUErrorCode } from '#lib/types/Enums';

export type SUErrorOptions = {
	name?: string;
	code: SUErrorCode;
	userMessage?: string;
};

export class SUError extends Error {
	public override readonly name: string;

	public readonly code: SUErrorCode;

	public readonly userMessage: string | undefined;

	public constructor(message: string, { name, code, userMessage }: SUErrorOptions) {
		super(message);

		this.name = name ?? 'KBotError';
		this.code = code;
		this.userMessage = userMessage;
	}
}
