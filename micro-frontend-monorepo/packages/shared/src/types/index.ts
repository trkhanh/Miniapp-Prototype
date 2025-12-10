export interface MicroFrontendContract {
    name: string;
    url: string;
    mount: (props: any) => void;
    unmount: () => void;
}

export type MicroFrontendProps = {
    name: string;
    props?: any;
};