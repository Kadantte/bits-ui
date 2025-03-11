import { useRefById, type ReadableBoxedValues, type WithRefProps } from "svelte-toolbelt";
import type { FieldValidateResult } from "./types.js";

type FieldRootStateOpts = WithRefProps &
	ReadableBoxedValues<{
		disabled: boolean;
		name: string | undefined;
		validate: (value: unknown) => FieldValidateResult | Promise<FieldValidateResult>;
		validationMode: "blur" | "change";
		validationDebounce: number;
		invalid: boolean;
	}>;

export class FieldRootState {
	constructor(readonly opts: FieldRootStateOpts) {
		useRefById(opts);
	}
}
