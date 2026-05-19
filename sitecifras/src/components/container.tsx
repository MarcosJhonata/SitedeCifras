import React from "react";

type ContainerProps<T extends keyof React.JSX.IntrinsicElements> = {
	as?: T;
} & React.ComponentPropsWithoutRef<T>;

export default function Container<T extends keyof React.JSX.IntrinsicElements = "div">({
	as,
	children,
	className,
	...props
}: ContainerProps<T>) {
	const Component = as ?? "div";

	return React.createElement(Component, { ...props, className }, children);
}
