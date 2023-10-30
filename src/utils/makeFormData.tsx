// const makeFormDataBody = (data, excludedFields = []) => {
//     /*
//     Função que gera o FormData dos dados de formulário passados como parâmetro.
//     Args:
//         data: objeto FormData com os campos e dados do form
//      */
//     let formDataBody = new FormData();
//     // Iterando sobre o dicionário do objeto principal
//     for (let [field, value] of Object.entries(data)) {
//         if (!excludedFields.includes(field)) {
//             // Só adiciona o campo no formData se nao tiver nos campos exluidos
//             if (!isNotEmpty(value)) value = "";
//             // Evita de mandar 'null' pro backend, mandando string vazia no lugar
//             else if (value.constructor === Object) value = value.value; // Se for um dict, queremos na verdade o valor dele
//             formDataBody.append(field, value);
//         }
//     }
//     return formDataBody;
// };