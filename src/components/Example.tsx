import { JSX } from "solid-js/jsx-runtime";

interface IProps {
	title: string;
	children: JSX.Element;
}

export const Example = ({ title, children }: IProps) => {
	return (
		<fieldset class="border border-gray-900 mt-5 rounded w-fit px-5 pb-3 h-fit flex flex-col justify-center shadow-md shadow-gray-600">
			<legend class="font-mono text-gray-800">{title}</legend>
			{children}
		</fieldset>
	);
};
