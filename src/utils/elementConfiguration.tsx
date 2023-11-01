export const elementConfiguration = {
    // Elementos que tem link
    linkElementTypes: [
        "onipages_music",
        "onipages_video",
        "onipages_link",
        "onipages_spotify",
        "onipages_deezer",
        "onipages_instagram",
        "onipages_tiktok",
        "onipages_youtube",
        "onipages_twitter",
        "onipages_qrcode",
    ],
    // Elementos cujo valor é uma lista de objetos
    listValueElementTypes: [
        "onipages_calendar",
        "onipages_lnk",
        "onipages_social-media",
        "onipages_images-grid",
        "onipages_latest-albums",
        "onipages_video-gallery",
        "onipages_news",
        "onipages_featured-numbers",
    ],
    // Elementos cujo valor é do tipo tipo|valor
    pipeSeparatedElementTypes: ["onipages_spacer", "onipages_link"],
    // Elementos cujo valor é um objeto, depois uma string (correspondente a uma imagem) e depois um array de objetos
    objectPipeStringPipeArrayElementTypes: [
        "onipages_lnk",
        "onipages_bio",
        "onipages_latest-release",
        "onipages_last-tour",
    ],
    // Elementos cujo valor é do tipo extra|tipo|valor
    doublePipeSeparatedElementTypes: [
        "onipages_profile-photo",
        "onipages_emphasis",
    ],
    // Elementos cujo valor é do tipo string|json
    stringAndJsonValueElementTypes: ["onipages_capture-user"],
    // Elementos cujo valor é um objeto
    objectElementTypes: ["onipages_footer"],
    // Valores iniciais/default para os elementos
    initialElementValue: {
        bdId: "", // Necessário para sincronização com o banco de dados
        value: "",
        title: "",
        subtitle: "",
        section: "",
        id: "",
        order: "",
        page: "",
        bdType: "", // Necessário para sincronização com o banco de dados
        type: "",
        placeholder: "",
        description: "",
        extraContent: "",
        background: "transparent",
        secondary_color: "",
    },
};