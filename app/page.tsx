import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Container, Title, TopBar } from "@/components/shared";
import cn from "classnames";
import { Filters } from "../components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { ProductGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className={cn("mt-10 pb-14px")}>
        <div className={cn("flex gap-[80px]")}>
          {/*Фильтрация*/}
          <div className={cn("w-[250px]")}>
            <Filters />
          </div>
          {/*Список товаров*/}
          <div className={cn("flex-1")}>
            <div className={cn("flex flex-col gap-16")}>
              <ProductGroupList
                title="Пиццы"
                items={[
                  {
                    id: 0,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/01953ced168c758399984df8561623a3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/01953ced168c758399984df8561623a3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/01953ced168c758399984df8561623a3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/01953ced168c758399984df8561623a3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/01953ced168c758399984df8561623a3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/01953ced168c758399984df8561623a3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/01953ced168c758399984df8561623a3.avif",
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductGroupList
                title="Комбо"
                items={[
                  {
                    id: 7,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/01953ced168c758399984df8561623a3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 8,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/01953ced168c758399984df8561623a3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 9,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/01953ced168c758399984df8561623a3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 10,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/01953ced168c758399984df8561623a3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 11,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/01953ced168c758399984df8561623a3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 12,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/01953ced168c758399984df8561623a3.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 13,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/01953ced168c758399984df8561623a3.avif",
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
          {/* <ProductGroupList title="Пиццы" items={[1, 2, 3, 4, 5]} />
          <ProductGroupList title="Комбо" items={[1, 2, 3, 4, 5]} /> */}
        </div>
      </Container>
    </>
  );
}
