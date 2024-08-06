import React from "react";
import { Card } from "@chakra-ui/react";

interface iConteinerCardProps {
  children: React.ReactNode | React.ReactNode[];
  heigth: string;
  width: string | { base: string; md: string; lg: string };
  padding?: string;
}

export default function ConteinerCard({ children, heigth, width, padding }: iConteinerCardProps) {
  return (
    <Card
      w={width}
      margin={"auto"}
      borderRadius={16}
      backgroundColor={"rgba(134, 119, 205, .75)"}
      color={"white"}
      h={heigth}
      mb={"2%"}
      pb={padding}
      pt={padding}
    >
      {children}
    </Card>
  );
}
