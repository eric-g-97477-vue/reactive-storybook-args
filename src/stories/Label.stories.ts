import type { Meta, StoryObj } from '@storybook/vue3';

import Label from './Label.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Example/Label',
	component: Label,
	tags: ['autodocs'],
	argTypes: {},
	args: {}
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: (args) => {
		console.log(args);

		return {
			components: { Label },
			setup() {
				return { args };
			},
			template: `
				<div>
					<Label :label="args.label"></Label>
				</div>
			`
		};
	},
	args: {
		label: '<my themed label>'
	}
};
