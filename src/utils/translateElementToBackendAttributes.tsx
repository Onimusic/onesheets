import { elementConfiguration } from './elementConfiguration';

interface ElemProps {
  bdType: string;
  type: string;
  typeSelected: string[]; // Adicione a propriedade 'typeSelected'
  value: string | number | object | string[];
  extraContent: string | number | object | string[];
  featuredImage: string;
  bdId: string;
  secondary_color: string;
  title: string;
  subtitle: string;
  background: string;
  effect: string;
  fontColor: string;
  show: boolean;
  page: object;
  order: number;
}

export const translateElementToBackendAttributes = (elem: ElemProps) => {
  let formattedValue;
  if (elementConfiguration.pipeSeparatedElementTypes.includes(elem.bdType)) {
    formattedValue = `${elem.typeSelected}|${elem.value}`;
  } else if (
    elementConfiguration.objectPipeStringPipeArrayElementTypes.includes(
      elem.bdType
    )
  ) {
    formattedValue = `${JSON.stringify(elem.extraContent)}|${
      elem.featuredImage
    }|${JSON.stringify(elem.value)}`;
  } else if (elementConfiguration.listValueElementTypes.includes(elem.bdType)) {
    formattedValue = JSON.stringify(elem.value);
  } else if (
    elementConfiguration.doublePipeSeparatedElementTypes.includes(elem.bdType)
  ) {
    formattedValue = `${elem.extraContent}|${elem.typeSelected}|${elem.value}`;
  } else if (
    elementConfiguration.stringAndJsonValueElementTypes.includes(elem.bdType)
  ) {
    formattedValue = `${elem.value}|${JSON.stringify(elem.typeSelected)}`;
  } else if (elementConfiguration.objectElementTypes.includes(elem.bdType)) {
    formattedValue = JSON.stringify(elem.value);
  } else {
    formattedValue = elem.value;
    if (typeof formattedValue === 'object') {
      formattedValue = '';
    }
  }

  return {
    background: elem.background || '',
    bdId: elem.bdId || '',
    effect: elem.effect || '',
    extraContent: elem.extraContent || '',
    font_color: elem.fontColor || '#000',
    id: elem.bdId || '',
    order: elem.order,
    page: elem.page,
    secondary_color: elem.secondary_color || '#fff',
    show: elem.show,
    subtitle: elem.subtitle || '',
    title: elem.title || '',
    type: elem.bdId,
    value: formattedValue || '',
  };
};
