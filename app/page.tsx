import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Container, Title, TopBar } from "@/components/shared";
import cn from "classnames";
import { Filters } from "../components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className={cn("pb-14px")}>
        <div className={cn("flex gap-[60px]")}>
          {/*Фильтрация*/}
          <div className={cn("w-[250px]")}>
            <Filters />
          </div>
          {/*Список товаров*/}
          <div className={cn("flex-1")}>
            <div className={cn("flex flex-col gap-16")}>Список товаров</div>
          </div>
          {/* <ProductGroupList title="Пиццы" items={[1, 2, 3, 4, 5]} />
          <ProductGroupList title="Комбо" items={[1, 2, 3, 4, 5]} /> */}
        </div>
      </Container>
    </>
  );
}
