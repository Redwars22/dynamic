export type FadeAnimationProps = {
    interval: number;
    initialOpacity: number;
    targetOpacity: number;
    increment: number;
    type: "fadein" | "fadeout";
    afterAll?: () => void;
    beforeAll?: () => void;
};