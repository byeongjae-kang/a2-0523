import { LayoutProps } from "@/lib/definistions/layout.types";
import { ReactNode } from "react";

type AnimalsLayoutProps = LayoutProps & {
  cats: ReactNode;
  dogs: ReactNode;
};

export default function layout({ cats, children, dogs }: AnimalsLayoutProps) {
  return (
    <div>
      {dogs}
      {children}
      {cats}
    </div>
  );
}
