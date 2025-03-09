export interface SizeProps {
  id: string;
  name: string;
}

export interface SizesGridProps {
  name: string;
}

export interface ItemProps {
  customer_product_id: string;
  name: string;
  quantity: number;
  optional: boolean;
  image_url: string;
  sizes_grid: SizesGridProps | null;
  sizes: SizeProps[];
}

export interface ExtraQuestionProps {
  id: number;
  answer_type: "text" | "text_area" | "select_one" | "date";
  question: string;
  position: number;
  options: string[];
}

export interface OnboardingDataProps {
  id: string;
  status: "ACTIVE" | "INACTIVE";
  title: string;
  welcome_title: string;
  welcome_phrase: string;
  logo_url: string;
  background_color: string;
  button_color: string;
  items: ItemProps[];
  extra_questions: ExtraQuestionProps[];
}
