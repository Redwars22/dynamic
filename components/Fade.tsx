import React, { useEffect } from "react";
import { FadeAnimationProps } from "../types/Fade";
import { generateNode } from "../utils/generateNode";

export default function DynamicFade({
    children,
    props
}: {
    children: React.ReactNode;
    props: FadeAnimationProps;
}) {
    const node: number = generateNode();

    useEffect(() => {
        const el: HTMLDivElement = document.querySelector(`#dynamic-fade-${node}`)!;
        let opacity: number = props.initialOpacity;

        if (props?.beforeAll) props.beforeAll();

        el.style.opacity = String(opacity);

        const animation = setInterval(() => {
            opacity += props.increment;

            el.style.opacity = String(opacity);

            if (props.type === "fadeout" && opacity <= props.targetOpacity) {
                if (props.afterAll) props.afterAll();
                clearInterval(animation);
            }
            if (props.type === "fadein" && opacity >= props.targetOpacity) {
                clearInterval(animation);
                if (props.afterAll) props.afterAll();
            }
        }, props.interval);
    });

    return <div id={`dynamic-fade-${node}`} style={{ opacity: props.initialOpacity }}>{children}</div>;
}
