import type { WithChild } from "$lib/shared/index.js";

export type FieldValidateResult = string | string[] | null;

export type FieldValidityData = {
	state: {
		badInput: boolean;
		customError: boolean;
		patternMismatch: boolean;
		rangeOverflow: boolean;
		rangeUnderflow: boolean;
		stepMismatch: boolean;
		tooLong: boolean;
		tooShort: boolean;
		typeMismatch: boolean;
		valueMissing: boolean;
		valid: boolean | null;
	};
	error: string;
	errors: string[];
	value: unknown;
	initialValue: unknown;
};

export type FieldRootPropsWithoutHTML = WithChild<{
	/**
	 * Whether user interaction should be ignored.
	 * Overrides the `disabled` prop on descendant `Field.Control` components.
	 * @default false
	 */
	disabled?: boolean;

	/**
	 * Sets the name for the descendant control components for form submission.
	 * Overrides the `name` prop on descendant `Field.Control` components.
	 */
	name?: string;

	/**
	 * A function to validate the field value. Returns a string or array of strings with
	 * error messages is the field is invalid, or `null` if valid.
	 */
	validate?: (value: unknown) => FieldValidateResult | Promise<FieldValidateResult>;

	/**
	 * Determines how the field should be validated.
	 *
	 * - **blur**: Validate the field when the control loses focus
	 * - **change**: Validate the field when the control value changes
	 *
	 * @default 'blur'
	 */
	validationMode?: "blur" | "change";

	/**
	 * Optionally provide a debounce time in milliseconds to delay validation when
	 * `validationMode="change"` is set.
	 *
	 * @default 0
	 */
	validationDebounceMs?: number;

	/**
	 * Forcefully mark the field as invalid.
	 */
	invalid?: boolean;
}>;
