import React from 'react';
import { elementConfiguration } from './elementConfiguration';

export const translateElementToBackendAttributes = (elem) => {
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
    id: elem.bdId || '',
    secondary_color: elem.secondary_color || '#fff',
    extraContent: elem.extraContent || '',
    title: elem.title || '',
    subtitle: elem.subtitle || '',
    type: elem.bdType,
    value: formattedValue || '',
    background: elem.background || '',
    effect: elem.effect || '',
    font_color: elem.fontColor || '#000',
    show: elem.show,
    page: elem.page,
    order: elem.order,
  };
};
