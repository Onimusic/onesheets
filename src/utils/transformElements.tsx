import { elementConfiguration } from './elementConfiguration';

export const transformElements = (tempElement:any, element: any, uniqueId: string, contents:any, mm:boolean, mappedElements:any) => {
    if (elementConfiguration.pipeSeparatedElementTypes.includes(element.type)) {
        const elementTypeAndValue = element.value.split("|");
        tempElement.typeSelected = elementTypeAndValue[0] || "";
        tempElement.value = elementTypeAndValue[1] || "";
    } else if (elementConfiguration.objectPipeStringPipeArrayElementTypes.includes(element.type)) {
        const elementImageAndValue = element.value.split("|");
        tempElement.extraContent = JSON.parse(elementImageAndValue[0] || "{}");
        tempElement.featuredImage = elementImageAndValue[1] || "";
        tempElement.value = JSON.parse(elementImageAndValue[2] || "[]");
    } else if (elementConfiguration.listValueElementTypes.includes(element.type)) {
        let parsedValue: any;
        try {
            parsedValue = JSON.parse(element.value);
        } catch (error) {
            parsedValue = [];
        }
        tempElement.value = parsedValue;
    } else if (elementConfiguration.doublePipeSeparatedElementTypes.includes(element.type)) {
        const elementTypeAndValue = element.value.split("|");
        tempElement.extraContent = elementTypeAndValue[0] || "";
        tempElement.typeSelected = elementTypeAndValue[1] || "";
        tempElement.value = elementTypeAndValue[2] || "";
    } else if (elementConfiguration.stringAndJsonValueElementTypes.includes(element.type)) {
        const elementValueAndJson = element.value.split("|");
        tempElement.value = elementValueAndJson[0];
        tempElement.typeSelected = JSON.parse(elementValueAndJson[1] || "[]");
    } else if (elementConfiguration.objectElementTypes.includes(element.type)) {
        tempElement.value = JSON.parse(element.value || "{}");
    } else {
        tempElement.value = element.value || ""; // Nesse caso o valor é uma string simples
    }

    tempElement.bdId = element.id; // Id do objeto PageContent no onilnk
    tempElement.title = element.title || "";
    tempElement.subtitle = element.subtitle || "";
    tempElement.bdType = element.type;
    tempElement.background = element.background || "";
    tempElement.effect = element.effect || "";
    tempElement.fontColor = element.font_color || "";
    tempElement.secondary_color = element.secondary_color || "";
    tempElement.page = element.page;
    tempElement.order = element.order;
    tempElement.show = typeof element.show === "boolean" ? element.show : true;

    // Adiciona o elemento montado do jeito certo na chave única do objeto que vai para o state elements
    return mm ? contents.push(tempElement) : mappedElements[uniqueId] = tempElement;
};

export default transformElements;
