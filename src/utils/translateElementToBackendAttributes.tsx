import { elementConfiguration } from './elementConfiguration';

interface ElemProps {
  background: string;
  bdId: string;
  bdType: string;
  effect: string;
  extraContent: string | number | object | string[];
  featuredImage: string;
  fontColor: string;
  id: number;
  order: number;
  page: object;
  secondary_color: string;
  show: boolean;
  subtitle: string;
  title: string;
  type: string;
  typeSelected: string[]; // Adicione a propriedade 'typeSelected'
  value: string | number | object | string[] | object[];
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

  console.log(elem.title)

  return {
    background: elem.background || '',
    bdId: elem.bdId || '',
    bdType: elem.bdType || '',
    effect: elem.effect || '',
    extraContent: elem.extraContent || '',
    featuredImage: elem.featuredImage || '',
    font_color: elem.fontColor || '#000',
    id: elem.bdId || '',
    order: elem.order,
    page: elem.page,
    secondary_color: elem.secondary_color || '#fff',
    show: elem.show,
    subtitle: elem.subtitle || '',
    title: elem.title || '',
    type: elem.bdType,
    typeSelected: elem.typeSelected || '',
    value: formattedValue || '',
  };
};
