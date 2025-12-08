interface PartDataset extends DOMStringMap {
    speedMs: string;
}

export interface ConveyorHtmlElement extends HTMLDivElement {
    dataset: PartDataset;
}
