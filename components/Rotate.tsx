import React, { useEffect } from "react";
import { RotateAnimationProps } from "../types/Rotate";
import { generateNode } from "../utils/generateNode";

export default function DynamicRotate({
    children,
    props
}: {
    children: React.ReactNode;
    props: RotateAnimationProps;
}) {
    const node: number = generateNode();

    useEffect(() => {
        const el: HTMLDivElement = document.querySelector(
            `#dynamic-rotate-${node}`
        )!;

        let angle = props.initialAngle;

        el.style.transform = `rotate(${angle}deg)`;

        const animation = setInterval(() => {
            angle += props.increment;

            if (angle !== props.finalAngle)
                el.style.transform = `rotate(${angle}deg)`;

            if (angle === props.finalAngle && !props.endless)
                clearInterval(animation);
        }, props.speed);
    });

    return <div id={`dynamic-rotate-${node}`}>{children}</div>;
}
