<script lang="ts">
	import { Slider } from "bits-ui";
	import { cn } from "$lib/utils/styles.js";
	import SpeakerSimpleHigh from "phosphor-svelte/lib/SpeakerSimpleHigh";
	import SpeakerSimpleLow from "phosphor-svelte/lib/SpeakerSimpleLow";
	import SpeakerSimpleNone from "phosphor-svelte/lib/SpeakerSimpleNone";

	let value = $state(50);

	const Icon = $derived.by(() => {
		if (value < 10) return SpeakerSimpleNone;
		if (value < 50) return SpeakerSimpleLow;
		return SpeakerSimpleHigh;
	});
</script>

<div class="flex w-full items-center gap-4 md:max-w-[300px]">
	<span class="">
		<Icon class="size-6" aria-hidden="true" />
	</span>
	<Slider.Root
		aria-label="Volume"
		type="single"
		bind:value
		class="relative flex w-full flex-1 touch-none select-none items-center"
	>
		{#snippet children()}
			<span
				class="bg-dark-10 relative h-2 w-full grow cursor-pointer overflow-hidden rounded-full"
			>
				<Slider.Range class="bg-foreground absolute h-full" />
			</span>
			<Slider.Thumb
				index={0}
				class={cn(
					"border-border-input bg-background hover:border-dark-40 dark:bg-foreground dark:shadow-card block size-[25px] cursor-pointer rounded-full border shadow-sm transition-colors active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
				)}
			/>
		{/snippet}
	</Slider.Root>
	<span class="min-w-[40px] text-sm" aria-hidden="true">
		{value}%
	</span>
</div>
