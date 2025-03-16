export interface RedeemPagesProps {
  redeem_pages: RedeemPageProps[]; // A estrutura esperada da API
}

export interface RedeemPageProps {
  id: string;
  status: string;
  title: string;
  welcome_title: string;
  welcome_phrase: string;
  logo_url: string;
  background_color: string;
  button_color: string;
  items: ItemRedeemPageProps[];
  extra_questions: ExtraQuestionProps[];
}

export interface ExtraQuestionProps {
  id: number;
  answer_type: string;
  question: string;
  position: number;
  options: string[];
}

export interface ItemRedeemPageProps {
  customer_product_id: string;
  name: string;
  quantity: number;
  optional: boolean;
  image_url: string;
  sizes_grid: SizesGridItemRedeemPageProps;
  sizes: SizeItemRedeemPageProps[];
}

export interface SizeItemRedeemPageProps {
  id: string;
  name: string;
}

export interface SizesGridItemRedeemPageProps {
  name: string;
}
