import { OnboardingDataProps } from "../../@types/data";

export const dataAPI: OnboardingDataProps = {
  id: "5c7e9bc8-e063-4d86-8e2c-eccce6f3ee1c",
  status: "ACTIVE",
  title: "Onboarding 2025",
  welcome_title: "Seja bem-vindo(a)!",
  welcome_phrase: "Estamos felizes em ter você conosco!",
  logo_url:
    "https://res.cloudinary.com/hiwtbwecx/image/upload/c_limit,h_1024,q_auto,w_1024/v1/store/redeems/redeem_page_customer_logo/2a10f6fec5dc461c2c59ac9dd1575dd2.avif",
  background_color: "#d7fff7",
  button_color: "#22007f",
  items: [
    {
      customer_product_id: "ffe1a11e-637f-466e-aa4c-34565874ab0b",
      name: "Caixa Lobby",
      quantity: 1,
      optional: false,
      image_url:
        "https://res.cloudinary.com/hiwtbwecx/image/upload/c_limit,h_1024,q_auto,w_1024/v1/store/customer_products/customer_product_images/842f2692ff3eaf35c38b3c4d2b215d77.png",
      sizes_grid: null,
      sizes: [],
    },
    {
      customer_product_id: "4dd5413c-4931-4a37-b95d-c7a712266f44",
      name: "Caneca Lobby",
      quantity: 1,
      optional: true,
      image_url:
        "https://res.cloudinary.com/hiwtbwecx/image/upload/c_limit,h_1024,q_auto,w_1024/v1/store/customer_products/customer_product_images/fe071e56a58a02c0a82a16d5c5c5e879.png",
      sizes_grid: null,
      sizes: [],
    },
    {
      customer_product_id: "d65ae33a-0c29-44f5-afba-6bfcd954f821",
      name: "Caneta Lobby",
      quantity: 1,
      optional: true,
      image_url:
        "https://res.cloudinary.com/hiwtbwecx/image/upload/c_limit,h_1024,q_auto,w_1024/v1/store/customer_products/customer_product_images/35778b5c790ed060a539f1e5fe84a968.png",
      sizes_grid: null,
      sizes: [],
    },
    {
      customer_product_id: "2ca0da2d-34ba-4a9f-b7e4-986559f0d9ac",
      name: "Caderno Lobby",
      quantity: 1,
      optional: true,
      image_url:
        "https://res.cloudinary.com/hiwtbwecx/image/upload/c_limit,h_1024,q_auto,w_1024/v1/store/customer_products/customer_product_images/96f6d7a99348718e67b5b5fe504c7c24.png",
      sizes_grid: null,
      sizes: [],
    },
    {
      customer_product_id: "b21f2520-abaf-4f9e-a8fc-894ddb345fdd",
      name: "Camiseta Lobby",
      quantity: 1,
      optional: true,
      image_url:
        "https://res.cloudinary.com/hiwtbwecx/image/upload/c_limit,h_1024,q_auto,w_1024/v1/store/customer_products/customer_product_images/283d8bc5cc809bfcf09235085c33d29b.png",
      sizes_grid: {
        name: "Camiseta",
      },
      sizes: [
        {
          id: "fa971d71-faf6-447e-a7df-474de8384bef",
          name: "P",
        },
        {
          id: "f31bb178-fec5-4518-a82a-d6131e8466f0",
          name: "M",
        },
        {
          id: "f92c5138-00fa-48b4-a0c9-1682af599aa7",
          name: "G",
        },
        {
          id: "ef6f4c3a-81a3-4f2a-8f1e-4f6305b4661a",
          name: "GG",
        },
        {
          id: "df83ce06-edab-4943-b61a-1c24e35454f0",
          name: "",
        },
      ],
    },
    {
      customer_product_id: "d6cd9397-1cd3-48ad-95ec-e4b84b22d5e9",
      name: "Adesivos Lobby",
      quantity: 1,
      optional: true,
      image_url:
        "https://res.cloudinary.com/hiwtbwecx/image/upload/c_limit,h_1024,q_auto,w_1024/v1/store/customer_products/customer_product_images/82de5132597d769b09da55e05b9549b1.png",
      sizes_grid: null,
      sizes: [],
    },
    {
      customer_product_id: "151c2329-9432-4798-bce1-d0233da83321",
      name: "Enchimento Lobby",
      quantity: 1,
      optional: false,
      image_url:
        "https://res.cloudinary.com/hiwtbwecx/image/upload/c_limit,h_1024,q_auto,w_1024/v1/store/customer_products/customer_product_images/d68e5bbb59f9b1413f949c998044592d.png",
      sizes_grid: null,
      sizes: [],
    },
  ],
  extra_questions: [
    {
      id: 383,
      answer_type: "text",
      question: "Qual seu time favorito?",
      position: 1,
      options: [],
    },
    {
      id: 384,
      answer_type: "text_area",
      question: "Fale um pouco sobre você",
      position: 4,
      options: [],
    },
    // {
    //   id: 385,
    //   answer_type: "select_one",
    //   question: "Você já participou de algum evento?",
    //   position: 3,
    //   options: ["Sim", "Não"],
    // },
    // {
    //   id: 386,
    //   answer_type: "date",
    //   question: "Data de nascimento",
    //   position: 2,
    //   options: [],
    // },
  ],
};
