import i18n from "../../localization";

export const I18N_SCREEN1_NS = "screen1";

export enum I18N_SCREEN1 {
  "example" = "Example",
  "created_ai_model" = "Created AI model",
  "create_new" = "Create New",
  "number_of_model" = "Number of model",
}

i18n.addResourceBundle('en', I18N_SCREEN1_NS, {
  [I18N_SCREEN1.example]: "Example",
  [I18N_SCREEN1.created_ai_model]: "Created AI model",
  [I18N_SCREEN1.create_new]: "Create New",
  [I18N_SCREEN1.number_of_model]: "Number of model",
})


i18n.addResourceBundle('ja', I18N_SCREEN1_NS, {
  [I18N_SCREEN1.example]: "例え",
  [I18N_SCREEN1.created_ai_model]: "作成したAIモデル",
  [I18N_SCREEN1.create_new]: "新規作成",
  [I18N_SCREEN1.number_of_model]: "モデル数",
})